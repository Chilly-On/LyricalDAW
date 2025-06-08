import React, { useRef, useState } from "react";

type TimelineGridProps = {
    trackCount: number;
    timeSteps: number;
    trackHeight?: number;
    initialTimeWidth?: number;
};

const Track_grid: React.FC<TimelineGridProps> = ({
    trackCount,
    timeSteps,
    trackHeight = 40,
    initialTimeWidth = 30,
}) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [timeWidth, setTimeWidth] = useState(initialTimeWidth);

    // Zoom with Ctrl + mouse wheel
    const handleWheel = (e: React.WheelEvent) => {
        /*if (e.ctrlKey) {
            e.preventDefault();
            const zoomDelta = e.deltaY > 0 ? -5 : 5;
            setTimeWidth((prev) => Math.max(10, prev + zoomDelta)); // Min width 10px
        }*/
    };

    const gridData = [["", "", "", "", "", "", "", "#dff155", "#dff155", "#dff155", "#dff155"], // "" means blank
        ["", "", "", "", "", "", "", "#dff155", "#dff155", "#dff155", "#dff155"],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", ""],
    ];

    return (
        <div
            ref={containerRef}
            onWheel={handleWheel}
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
                        backgroundColor: "#1e1e1e",
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
                                paddingLeft: "2px"
                            }}
                        >
                            {i + 1}
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
                }}
            >
                {gridData.flatMap((row, rowIndex) =>
                    Array.from({ length: timeSteps }).map((_, colIndex) => {
                        const cellColor = row[colIndex] || "#2f2f2f";
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
