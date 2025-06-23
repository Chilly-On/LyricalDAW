import React, { useRef, useState, useEffect } from "react";
import type { Player } from "textalive-app-api";

type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
};

type TimelineGridProps = {
    gridData: string[][];
    player: Player;
    timeSteps: number;
    trackHeight?: number;
    initialTimeWidth?: number;
    timePos: number;
    setTimePos?: (n: number) => void,
    beatPos: number;
    setBeatPos?: (n: number) => void,
    beatLeftPos: number,
    setBeatLeftPos: (n: number) => void,
    beatRightPos: number,
    setBeatRightPos: (n: number) => void,
    leftTime: number,
    setLeftTime: (n: number) => void,
    refs: React.RefObject<PlayerRefs>;
};

const Track_grid: React.FC<TimelineGridProps> = ({
    gridData,
    player, // TextAlive
    timeSteps,
    trackHeight = 40,
    initialTimeWidth = 30,
    timePos,
    beatPos,
    beatLeftPos, setBeatLeftPos, beatRightPos, setBeatRightPos,
    leftTime, setLeftTime,       // Store absolute time of left area to seek later
    refs
}) => {

    //const containerRef = useRef<HTMLDivElement>(null);
    //const [timeWidth, setTimeWidth] = useState(initialTimeWidth);
    const [timeWidth] = useState(initialTimeWidth);

    // Zoom with Ctrl + mouse wheel
    //const handleWheel = (e: React.WheelEvent) => {
    //    if (e.ctrlKey) {
    //        e.preventDefault();
    //        const zoomDelta = e.deltaY > 0 ? -5 : 5;
    //        setTimeWidth((prev) => Math.max(10, prev + zoomDelta)); // Min width 10px
    //    }
    //};

    // Handle clicking the grid to seek

    const gridRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartBeat, setDragStartBeat] = useState<number | null>(null);
    const [dragStartTime, setDragStartTime] = useState(0);               

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!gridRef.current || !player ) return;

        const { beatIndex, clickedTimeMs } = getBeatAtMouseEvent(e);
        setDragStartBeat(beatIndex);
        setDragStartTime(clickedTimeMs);
        setBeatLeftPos(beatIndex);
        setBeatRightPos(beatIndex);
        setLeftTime(clickedTimeMs);
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setDragStartBeat(null);

        console.log("leftTime: ", refs.current.leftTime);
        console.log("timePos: ", refs.current.timePos);
        player.requestMediaSeek(refs.current.leftTime); // seek the song here

        const beat = player.findBeat(refs.current.leftTime);
        //console.log("Seek pos: ", position);
        const beatIndex = beat.index + (refs.current.leftTime - beat.startTime) / (beat.endTime - beat.startTime)   // add remaining position to beat pos
        refs.current.timePos = refs.current.leftTime;
        refs.current.beatPos = beatIndex;

        console.log("Real position after seek:", player.timer?.position);
    };

    const getBeatAtMouseEvent = (
        e: React.MouseEvent | MouseEvent
    ): { beatIndex: number; clickedTimeMs: number } => {
        const container = gridRef.current;
        if (!container) return { beatIndex: 0, clickedTimeMs: 0 }; // or throw an error or fallback

        const gridRect = container.getBoundingClientRect();
        const offsetX = e.clientX - gridRect.left + container.scrollLeft;
        const totalWidth = timeSteps * (timeWidth + 1.2);
        const relativePosition = offsetX / totalWidth;

        const b0 = player.findBeat(0);
        const beatDuration = b0.endTime - b0.startTime;
        const totalDuration = timeSteps * beatDuration;
        const clickedTimeMs = relativePosition * totalDuration;

        const beat = player.findBeat(clickedTimeMs);
        const beatIndex =
            beat.index +
            (clickedTimeMs - beat.startTime) / (beat.endTime - beat.startTime);

        return { beatIndex, clickedTimeMs };
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || dragStartBeat === null || !player) return;

            const { beatIndex, clickedTimeMs } = getBeatAtMouseEvent(e); // as any to cast to React.MouseEvent
            const left = Math.min(dragStartBeat, beatIndex);
            const right = Math.max(dragStartBeat, beatIndex);
            setBeatLeftPos(left);
            setBeatRightPos(right);
            setLeftTime(Math.min(dragStartTime, clickedTimeMs));
        };

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, dragStartBeat, dragStartTime, player]);

    // Force to update value completely
    useEffect(() => {
        refs.current.timePos = timePos;
    }, [timePos]);
    useEffect(() => {
        refs.current.beatPos = beatPos;
    }, [beatPos]);
    useEffect(() => {
        refs.current.beatLeftPos = beatLeftPos;
    }, [beatLeftPos]);
    useEffect(() => {
        refs.current.beatRightPos = beatRightPos;
    }, [beatRightPos]);
    useEffect(() => {
        refs.current.leftTime = leftTime;
    }, [leftTime]);

    //const handleGridClick = (e: React.MouseEvent) => {
    //    if (!gridRef.current || !player) return;

    //    const container = gridRef.current;
    //    const gridRect = container.getBoundingClientRect();

    //    // Mouse X relative to the grid including scroll
    //    const offsetX = e.clientX - gridRect.left + container.scrollLeft;
    //    console.log("offsetX: ", offsetX);
    //    console.log("Recommend frame: ", offsetX / 60);


    //    const totalWidth = timeSteps * (timeWidth + 1.2);

    //    // Calculate the position (0–1) in the grid
    //    const relativePosition = offsetX / totalWidth;

    //    // Calculate the beat length in time
    //    const b0: IBeat = player.findBeat(0);                                  // hardcoded for first position, may not incorrect
    //    const beatDuration = b0.endTime - b0.startTime; 

    //    const totalDuration = timeSteps * beatDuration; // total in ms
    //    const clickedTimeMs = relativePosition * totalDuration;

    //    player.requestMediaSeek(clickedTimeMs); // seek the song here
    //    const beat = player.findBeat(clickedTimeMs);
    //    const beatIndex = beat.index + (clickedTimeMs - beat.startTime) / (beat.endTime - beat.startTime)   // add remaining position to beat pos
    //    setBeatLeftPos(beatIndex);
    //    setBeatRightPos(beatIndex);
    //};

    return (
        <div
            //ref={containerRef}
            //onWheel={handleWheel}
            ref={gridRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#2f3135",
                border: "1px solid #999",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px"
            }}
        >
            {/* Timeline Header */}
            <div
                style={{
                    position: "sticky",
                    top: 0
                } }
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${timeSteps}, ${timeWidth}px)`,
                        height: "25px",
                        backgroundColor: "#5FC8E0",
                        color: "#ccc",
                        fontSize: "12px",
                        borderBottom: "1px solid #737579",
                    }}
                >
                    {Array.from({ length: timeSteps }).map((_, i) => (
                        <div
                            key={`header-${i}`}
                            style={{
                                display: "flex",
                                width: `${timeWidth}px`,
                                justifyContent: "flex-start",
                                alignItems: "center",
                                height: "20px",
                                borderRight: "1px solid #737579",
                                paddingLeft: "2px",
                                color: "black",
                                fontWeight: "bold"
                            }}
                        >
                            {/* If is divisible by 4, display; First index is 1 */ }
                            {!(i % 4) ? (i / 4 + 1) : ""}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Grid based on gridData */}
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: `repeat(${gridData.length}, ${trackHeight}px)`,
                    gridTemplateColumns: `repeat(${timeSteps}, ${timeWidth}px)`,
                    borderLeft: "1px solid #737579",
                    overflow: "auto",
                    position: "relative",
                    cursor: "pointer"
                }}
            >
                {gridData.flatMap((row, rowIndex) =>
                    Array.from({ length: timeSteps }).map((_, colIndex) => {
                        const cellColor = row[colIndex] || "#ABDFEC";
                        return (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                style={{
                                    backgroundColor: cellColor,
                                    borderRight: "1px solid #737579",
                                    borderBottom: "1px solid #737579"
                                }}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Track_grid;
