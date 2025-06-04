import React, { useState } from "react";

interface TrackGenProps {       // for input parameters
    width?: string;
    widthHead?: string;
    color: string;
    icon: string;
    id?: number | string;
    name: string;
    borderTop?: number;
    children?: React.ReactNode;
    level?: number;
}

const Track_gen: React.FC<TrackGenProps> = ({ width = "395px", widthHead = "50px", color, icon, id, name, borderTop = 0, children, level = 0 }) => { // add parameters
    const isContainer = !!children;
    const [expanded, setExpanded] = useState(true); // NEW: toggle children visibility
    const indent = 10 * level;

    if (isContainer) {  // File opened
        return (
            <div className="d-flex flex-column align-items-center" style={{ width }}>
                {/* Header */}
                <div
                    className="d-flex flex-column align-items-start"
                    style={{
                        width
                    }}
                >
                    {/* Clickable Header */}
                    <div
                        className="d-flex flex-row justify-content-between align-items-center track"
                        onClick={() => setExpanded(!expanded)} // NEW: toggle on click
                        style={{
                            width,
                            paddingLeft: `${indent}px` // NEW: indentation
                        }}
                    >
                        <div className="d-flex flex-row align-items-center"
                            style={{
                                gap: "10px"
                            } }
                        >
                            <div
                                className="d-flex align-items-end justify-content-between track-serial"
                                style={{
                                    width: "60px",
                                    backgroundColor: color
                                }}
                            >
                                <img src={icon} alt="Timeline" className="track-icon" />
                                <div style={{ fontSize: "14px", color: "black" }}>{id}</div>
                            </div>
                            <div className="d-flex flex-row fw-bold">
                                <button className="mute-track">m</button>
                                <button className="stop-track">s</button>
                            </div>
                            <div className="d-flex">
                                {name}
                            </div>
                        </div>
                        <div className="d-flex flex-row" style={{ gap: "1px" }}>
                            <div style={{ width: "5px", height: "18px", backgroundColor: "#99f4e9" }} />
                            <div style={{ width: "5px", height: "18px", backgroundColor: "#99f4e9" }} />
                        </div>
                    </div>

                    {/* Children (conditionally rendered) */}
                    {expanded && (
                        <div className="d-flex flex-column">
                            {React.Children.map(children, (child) =>
                                React.isValidElement(child)
                                    ? React.cloneElement(child, { level: level + 1 }) // Propagate level
                                    : child
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Normal (leaf) track
    const trackStyle: React.CSSProperties = {
        width,
        paddingLeft: `${indent}px`, // NEW: align leaf like child tracks
        ...(borderTop === 1 && { borderTop: "1px solid #737579" })
    };

    return (
        <div
            className="d-flex flex-row justify-content-between align-items-center track"
            style={trackStyle}
        >
            <div className="d-flex flex-row align-items-center"
                style={{
                    gap: "10px"
                }}
            >
                <div
                    className="d-flex align-items-end justify-content-between track-serial"
                    style={{
                        width: widthHead,
                        backgroundColor: color
                    }}
                >
                    <img src={icon} alt="Timeline" className="track-icon" />
                    <div style={{ fontSize: "14px", color: "black" }}>{id}</div>
                </div>

                <div className="d-flex flex-row fw-bold">
                    <button className="mute-track">m</button>
                    <button className="stop-track">s</button>
                </div>

                <div className="d-flex" style={{ borderWidth: "0px"}}>
                    {name}
                </div>
            </div>

            {/* Meter */}
            <div className="d-flex flex-row"
                style={{gap: "1px" }}
            >
                <div className="d-flex flex-column"
                    style={{
                        width: "5px",
                        height: "18px",
                        backgroundColor: "#99f4e9"
                    }}
                />
                <div className="d-flex flex-column"
                    style={{
                        width: "5px",
                        height: "18px",
                        backgroundColor: "#99f4e9"
                    }}
                />
            </div>
        </div>
    );
};

export default Track_gen;