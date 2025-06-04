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
        if (e.ctrlKey) {
            e.preventDefault();
            const zoomDelta = e.deltaY > 0 ? -5 : 5;
            setTimeWidth((prev) => Math.max(10, prev + zoomDelta)); // Min width 10px
        }
    };

    return (
        <div
            ref={containerRef}
            onWheel={handleWheel}
            style={{
                overflow: "auto",
                width: "830px",             // change to dynamic
                height: "100%",
                backgroundColor: "#2f3135",
                paddingTop: "5px",
                border: "1px solid #999",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px"
            }}
        >
            {/* Timeline Header */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${timeSteps}, ${timeWidth}px)`,
                    position: "sticky",
                    height: "25px",
                    top: 0,
                    zIndex: 1,
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

            {/* Main Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: `repeat(${trackCount}, ${trackHeight}px)`,
                    gridTemplateColumns: `repeat(${timeSteps}, ${timeWidth}px)`,
                    borderLeft: "1px solid #737579",
                }}
            >
                {Array.from({ length: trackCount * timeSteps }).map((_, index) => (
                    <div
                        key={index}
                        style={{
                            borderRight: "1px solid #737579",
                            borderBottom: "1px solid #737579",
                            backgroundColor: "#2f2f2f",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Track_grid;
