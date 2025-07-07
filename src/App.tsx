import React from 'react';
import DAW from './DAW/DAW';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Player, Ease } from "textalive-app-api";
import P5 from 'p5';

function loadText(player) {
    new P5((p5) => {
        // Initialize with default values that will be updated in setup
        let baseFontSize;
        let maxFontSize;
        let lineHeight;
        let spacing;
        
        const processedWords = new Set();
        let currentLine = [];
        let activeLines = [];
        let lastWordEndTime = 0;

        // Function to check if a word should be excluded
        const shouldExcludeWord = (text) => {
            // Define patterns to exclude
            const excludePatterns = [
                /^[\(\)\[\]\{\}]+$/, // Parentheses, brackets, braces
                /^[!@#$%^&*_+\-=\\|;:'",.<>?]+$/, // Common symbols
                /^[\u3000-\u303F]+$/, // Japanese punctuation and symbols
                /^[\uFF00-\uFFEF]+$/ // Halfwidth and Fullwidth Forms
            ];
            
            // Check if text matches any exclusion pattern
            return excludePatterns.some(pattern => pattern.test(text));
        };

        p5.setup = () => {
            // Calculate sizes based on window dimensions
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            // Base font size is 13% of the smaller dimension
            baseFontSize = Math.min(width, height) * 0.13;
            maxFontSize = baseFontSize * 1.2; // 120% of base size
            lineHeight = baseFontSize * 1.2; // 120% of base size
            spacing = baseFontSize * 0.2; // 20% of base size
            
            const canvas = p5.createCanvas(width, height);
            canvas.parent("lyrics");
            p5.colorMode(p5.HSB, 100);
            p5.frameRate(60);
            p5.textFont("Noto Sans JP");
            p5.textWeight("bold");
            p5.textAlign(p5.CENTER, p5.CENTER); 
            p5.smooth();
        };

        // Handle window resize
        p5.windowResized = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            baseFontSize = Math.min(width, height) * 0.13;
            maxFontSize = baseFontSize * 1.2;
            lineHeight = baseFontSize * 1.2;
            spacing = baseFontSize * 0.2;
            
            p5.resizeCanvas(width, height);
        };

        p5.draw = () => {
            if (!player || !player.video) return;
            
            const position = player.timer.position;
            p5.clear();
            if (position < 500) return;
            
            const char = player.video.findChar(position, { loose: true });
            
            // Create new line on first word
            if (position > lastWordEndTime) { 
                if (currentLine.length > 0) {
                    activeLines.push([...currentLine]);
                    currentLine = [];
                }
            }

            // Process current character
            if (char) {
                const word = char.parent;
                const wordId = `${word.startTime}-${word.text}`; 
                
                const isNewWord = currentLine.length === 0 || 
                                word.startTime > currentLine[currentLine.length-1].endTime + 50;
                
                // Only process if it's not an excluded word
                if (isNewWord && !processedWords.has(wordId) && !shouldExcludeWord(word.text)) {
                    processedWords.add(wordId);
                    
                    const newWord = {
                        text: word.text,
                        startTime: word.startTime,
                        endTime: word.endTime,
                        baseSize: baseFontSize,
                        x: 0,
                        width: 0,
                        id: wordId,
                        shadowAlpha: 20
                    };
                    
                    if (word.text.length === 1 && activeLines.length > 0) {
                        const lastActiveLine = activeLines[activeLines.length - 1];
                        lastActiveLine.push(newWord);
                        lastWordEndTime = word.endTime;
                        calculateLineLayout(p5, activeLines, currentLine, position);
                    } else {
                        currentLine.push(newWord);
                        lastWordEndTime = word.endTime;
                    }
                }
                
                if (currentLine.length > 0) {
                    const currentWord = currentLine[currentLine.length-1];
                    if (currentWord.id === wordId) {
                        currentWord.endTime = Math.max(currentWord.endTime, word.endTime);
                        currentWord.pulse = Math.sin(position / 150) * 5;
                    }
                }
            }
            
            // Calculate vertical positions
            const totalLines = activeLines.length + (currentLine.length > 0 ? 1 : 0);
            const startY = p5.height * 0.35 - (totalLines - 1) * lineHeight / 2;
            
            calculateLineLayout(p5, activeLines, currentLine, position);
            
            // Render active lines
            activeLines.forEach((line, i) => {
                const lineEndTime = line[line.length - 1].endTime;
                const lineOpacity = position > lineEndTime ? 
                    Math.max(0, 1 - (position - lineEndTime) / 1000) : 1;
                
                const floatOffset = Math.sin(position/300 + i) * 3;
                renderLine(p5, line, position, startY + i * lineHeight + floatOffset, true, 1, lineOpacity);
            });
            
            // Render current line
            if (currentLine.length > 0) {
                const currentWord = currentLine[currentLine.length - 1];
                
                // Calculate progress based on word position
                const elapsed = position - currentWord.startTime;
                const expandDuration = 2000; // Fixed expansion time
                const progress = Math.min(elapsed / expandDuration, 1);
                
                const scale = 1 + (maxFontSize / baseFontSize - 1) * Ease.circInOut(progress);

                currentWord.scale = scale;
                currentWord.isExpanding = true;
                currentWord.shadowAlpha = 50 + Math.sin(position / 150) * 20;

                renderLine(p5, currentLine, position, 
                        startY + activeLines.length * lineHeight, 
                        false, scale, 1);
            }
            
            // Cleanup old lines
            activeLines = activeLines.filter(line => {
                const lineEndTime = line[line.length - 1].endTime;
                return position < lineEndTime + 1000;
            });

            // Update current line to include words that are still active
            if (currentLine.length > 0) {
                const position = player.timer.position;
                const currentWord = currentLine[currentLine.length - 1];

                currentLine = currentLine.filter((word) => {
                    return position < word.endTime + 1000; 
                });

                if (!currentLine.includes(currentWord)) {
                    currentLine.push(currentWord);
                }
            }
        };
        
        function calculateLineLayout(p5, activeLines, currentLine, position) {
            const allLines = [...activeLines, currentLine];
            
            allLines.forEach(line => {
                if (line.length === 0) return;
                
                let totalLineWidth = 0;
                const wordWidths =[];
                
                for (const word of line) {
                    const scale = word.isExpanding ? (word.scale || 1) : 1;
                    p5.textSize(word.baseSize * scale);
                    const w = p5.textWidth(word.text);
                    wordWidths.push(w);
                    totalLineWidth += w + spacing;
                }
                totalLineWidth -= spacing;
                
                let currentX = p5.width / 2 - totalLineWidth / 2;
                
                for (let i = 0; i < line.length; i++) {
                    const word = line[i];
                    const w = wordWidths[i];
                    word.x = currentX + w / 2;
                    word.width = w;
                    currentX += w + spacing;
                }
            });
        }

        function renderWord(p5, word, position, yPos, isCompleted, scale, lineOpacity) {
            let fontSize = word.baseSize * scale;
            let opacity = 100;
            let yOffset = word.pulse || 0;
            
            if (position < word.startTime) {
                const progress = 1 - (word.startTime - position) / 150; 
                fontSize = word.baseSize * scale * Ease.quintOut(progress);
                opacity = 100 * Ease.quintOut(progress);
                yOffset += (1 - progress) * 15;
            } 
            else if (position > word.endTime && !isCompleted) {
                const progress = (position - word.endTime) / 250; 
                opacity = 100 * (1 - Ease.circIn(progress));
                yOffset -= Ease.circIn(progress) * 10; 
            }
            
            opacity *= lineOpacity;
            
            const shadowAlpha = word.shadowAlpha || 20;
            if (opacity > 0) {
                p5.push();
                p5.fill(0, 0, 0, shadowAlpha * opacity / 100);
                p5.textSize(fontSize + 2);
                p5.text(word.text, word.x + 3, yPos + yOffset + 3);
                p5.pop();
            }

            p5.fill(0, 0, 100, opacity);
            p5.textSize(fontSize);
            p5.text(word.text, word.x, yPos + yOffset);
        }

        function renderLine(p5, line, position, yPos, isCompleted, scale, lineOpacity) {
            line.forEach(word => {
                if (position >= word.startTime - 500) {
                    renderWord(p5, word, position, yPos, isCompleted, scale, lineOpacity);
                }
            });
        }
    });
}

function App() {
    const player = new Player({ app: { token: "test" } });
    loadText(player);

    return (
        <div className="flex flex-col">
            <DAW player={player} />
        </div>
    );
}

export default App;