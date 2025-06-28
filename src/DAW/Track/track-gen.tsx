import React, { useState } from "react";
import Track_Volume from "./track-volume"

interface ChildWithLevelProps {
    level: number;
}
type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
};
interface TrackGenProps {       // for input parameters
    beatPos: number;
    rowGridData: string[];
    width?: string;
    widthHead?: string;
    color: string;
    icon: string;
    id?: number | string;
    name: string;
    borderTop?: number;
    children?: React.ReactNode;
    level?: number;
    trackNo: number;
    trackVolume: number[];
    setTrackVolume: React.Dispatch<React.SetStateAction<number[]>>;
    refs: React.RefObject<PlayerRefs>; 
}
const Track_gen: React.FC<TrackGenProps> = ({
    beatPos,
    rowGridData,
    width = "295px",
    widthHead = "50px",
    color,
    icon,
    id,
    name,
    borderTop = 0,
    children,
    level = 0,
    trackNo,
    trackVolume,
    setTrackVolume,
    refs
}) => { // add parameters


    const isContainer = !!children;
    //const [expanded, setExpanded] = useState(true); // NEW: toggle children visibility
    const [expanded] = useState(true); // NEW: toggle children visibility
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
                        //onClick={() => setExpanded(!expanded)} // toggle on click
                        style={{
                            width,
                            paddingLeft: `${indent}px` // indentation
                        }}
                    >
                        <div className="d-flex flex-row align-items-center"
                            style={{
                                gap: "10px"
                            }}
                        >
                            <div
                                className="d-flex align-items-end justify-content-between track-serial"
                                style={{
                                    width: "60px",
                                    backgroundColor: color
                                }}
                            >
                                <img src={icon} alt="Timeline" className="track-icon" />
                                <div
                                    style={{
                                    fontSize: "14px",
                                    color: "black"
                                }}>{id}</div>
                            </div>
                            <div className="d-flex flex-row fw-bold">
                                <button className="mute-track">m</button>
                                <button className="stop-track">s</button>
                            </div>
                            <div className="d-flex">
                                {level > 0 ? name.length <= 15 ? name : name.slice(0, 11).concat("...".concat(name.slice(-4))) // 15, Track text
                                    : name.length <= 18 ? name : name.slice(0, 14).concat("...".concat(name.slice(-4)))   // 19
                                }
                            </div>
                        </div>
                        <Track_Volume 
                            rowGridData={rowGridData}
                            beatPos={beatPos}
                            trackNo={trackNo}
                            trackVolume={trackVolume}
                            setTrackVolume={setTrackVolume}
                            refs={refs} // Pass refs
                        />
                    </div>

                    {/* Children (conditionally rendered) */}
                    {expanded && (
                        <div className="d-flex flex-column">
                            {React.Children.map(children, (child) =>
                                React.isValidElement(child)
                                    ? React.cloneElement(child as React.ReactElement<ChildWithLevelProps>,
                                        { level: level + 1 }) // Propagate level
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
        paddingLeft: `${indent}px`, // Align leaf like child tracks
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
                    <div className="text-end"
                        style={{            // Track ID
                            fontSize: "14px",
                            color: "black"
                        }}>{id}
                    </div>
                </div>

                <div className="d-flex flex-row fw-bold">
                    <button className="mute-track">m</button>
                    <button className="stop-track">s</button>
                </div>

                <div className="d-flex" style={{ borderWidth: "0px" }}>
                    {level > 0 ? name.length <= 15 ? name : name.slice(0, 11).concat("...".concat(name.slice(-4))) // 15, Track text
                        : name.length <= 18 ? name : name.slice(0, 14).concat("...".concat(name.slice(-4)))   // 19
                }
                </div>
            </div>

            {/* Meter */}
            <Track_Volume
                rowGridData={rowGridData}
                beatPos={beatPos}
                trackNo={trackNo}
                trackVolume={trackVolume}
                setTrackVolume={setTrackVolume}
                refs={refs} // Pass refs
            />
        </div>
    );
};
export default Track_gen;