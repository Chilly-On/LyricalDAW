import React, { useState, useRef } from 'react';
import { Player } from "textalive-app-api";
import Track from './Track/Track';
import Right_menu from './Right-menu/Right-menu';
import Footer from './Footer/Footer';
import TextAlive from '../TextAlive/TextAlive';
import '../index.css'; // Use Tailwind's CSS instead of App.css
import 'bootstrap/dist/css/bootstrap.min.css';
interface DAWProps {       // for input parameters
    player: Player,
    musicOffset: number,
    processedWords: Set<string>
}

const DAW: React.FC<DAWProps> = ({ player, musicOffset, processedWords }) => {
    const [isPlaying, setIsPlaying] = useState(false);      // make this global
    const [timePos, setTimePos] = useState(0);
    const [beatPos, setBeatPos] = useState(0);
    const [beatLeftPos, setBeatLeftPos] = useState(0);
    const [beatRightPos, setBeatRightPos] = useState(0);
    const [masterVolume, setMasterVolume] = useState(0);
    const [repeat, setRepeat] = useState(false);            // whether allow to repeat full songs after playing, or a small area.
    const [leftTime, setLeftTime] = useState(0);            // use to set the time for quick seeking to left for repeat
    const refs = useRef({
        timePos: 0,
        beatPos: 0,
        isPlaying: false,
        repeat: false,
        beatLeftPos: 0,
        beatRightPos: 0,
        masterVolume: 0,
        leftTime: 0,
    });

    const handleClose = () => {
        const instructJP = document.getElementById("instructJP");
        const instructEN = document.getElementById("instructEN");
        if (instructJP) {
            instructJP.style.display = 'none'; // Hide if have popup
        }
        if (instructEN) {
            instructEN.style.display = 'none'; // Hide if have popup
        }
    }
    const handleEN = () => {
        const instructJP = document.getElementById("instructJP");
        const instructEN = document.getElementById("instructEN");
        if (instructJP) {
            instructJP.style.display = 'none';
        }
        if (instructEN) {
            instructEN.style.display = 'flex'; // Hide if have popup
        }
    }
    const handleJP = () => {
        const instructJP = document.getElementById("instructJP");
        const instructEN = document.getElementById("instructEN");
        if (instructJP) {
            instructJP.style.display = 'flex';
        }
        if (instructEN) {
            instructEN.style.display = 'none'; // Hide if have popup
        }
    }

    return ( 
        <div className="d-flex flex-column"   // hard code for width, update later
            style={{
                width: "100vw", 
                height: "100vh",  // hard code for weight, update later,
                position: "relative"
            }}
        >
            <main className="inner-main text-center text-gray-600 d-flex flex-row justify-content-between">
                <Track musicOffset={musicOffset} player={player}
                    isPlaying={isPlaying}
                    timePos={timePos} setTimePos={setTimePos}
                    beatPos={beatPos} setBeatPos={setBeatPos}
                    beatLeftPos={beatLeftPos} setBeatLeftPos={setBeatLeftPos}
                    beatRightPos={beatRightPos} setBeatRightPos={setBeatRightPos}
                    leftTime={leftTime} setLeftTime={setLeftTime}
                    refs={refs}
                    processedWords={processedWords}
                />
                <Right_menu player={player}
                    masterVolume={masterVolume} setMasterVolume={setMasterVolume}
                    refs={refs}
                />
            </main>
            <Footer musicOffset={musicOffset} 
                player={player} isPlaying={isPlaying} setIsPlaying={setIsPlaying}
                timePos={timePos}
                beatPos={beatPos}
                beatLeftPos={beatLeftPos} setBeatLeftPos={setBeatLeftPos}
                beatRightPos={beatRightPos} setBeatRightPos={setBeatRightPos}
                refs={refs} repeat={repeat} setRepeat={setRepeat}
            />
            <div className="justify-content-center align-items-center"
                id="overlay"
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#70767a80",
                    zIndex: "3"
                }}
            >
                <img
                    src="logo.png"
                    alt="Logo layer"
                >
                </img>
            </div>
            <div id="lyrics"
                style={{                           // set default position for lyrics
                    display: refs.current.isPlaying ? "block" : "none",
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "72px",
                    color: "white",
                    pointerEvents: "none",           // click though
                    zIndex: "4"
                }}>
            </div>
            {/* Insert illustration here, in absolute position */}
            <img className="illust justify-content-center align-items-center"
                id="illust"
                src="illust.png"
                alt="Logo layer"
            >
            </img>
            <div
                className="overlay justify-content-center align-items-center"
                id="instructJP"
            >
                <div
                    style={{                           // set default position for lyrics
                        position: "relative"
                    }}>
                    <img
                        src="helpJP.png"
                        alt="Logo layer"
                        style={{                           // set default position for lyrics
                            height: "500px"
                        }}
                    >
                    </img>
                    <div className="help-button-container d-flex flex-row align-items-center text-center justify-content-start">
                        <button className="help-button"
                            onClick={handleClose}
                            style={{
                                backgroundColor: "#15c18d",
                            }}>
                            <div className="help-text text-center"
                            >閉じる</div>
                        </button>
                        <button className="help-button"
                            onClick={handleEN}
                            style={{
                                backgroundColor: "#15c173",
                            }}>
                            <div className="help-text text-center"
                            >English</div>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="overlay justify-content-center align-items-center"
                id="instructEN"
            >
                <div
                    style={{                           // set default position for lyrics
                        position: "relative"
                    }}>
                    <img
                        src="helpEN.png"
                        alt="Logo layer"
                        style={{                           // set default position for lyrics
                            height: "500px"
                        }}
                    >
                    </img>
                    <div className="help-button-container d-flex flex-row align-items-center text-center justify-content-between">
                        <button className="help-button"
                            onClick={handleClose}
                            style={{
                                backgroundColor: "#15c18d",
                            }}>
                            <div className="help-text text-center"
                            >Close</div>
                        </button>
                        <button className="help-button"
                            onClick={handleJP}
                            style={{
                                backgroundColor: "#15c173",
                            }}>
                            <div className="help-text text-center"
                            >日本語</div>
                        </button>
                    </div>
                </div>


            </div>
            <TextAlive musicOffset={musicOffset}
                player={player}
                timePos={timePos} setTimePos={setTimePos}
                beatPos={beatPos} setBeatPos={setBeatPos}
                refs={refs}
                masterVolume={masterVolume} setMasterVolume={setMasterVolume}
            />
        </div>
    );
}

export default DAW;