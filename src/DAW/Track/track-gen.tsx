import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        // Update index i
        const updateVolume = (i: number, newValue: number) => {
            setTrackVolume(prev => {
                const newArr = [...prev];
                newArr[i] = newValue;
                return newArr;
            });
        };

        let animationId: number;

        const update = () => {
            // TOOO HERE
            if (refs.current.isPlaying) {
                const beat = Math.floor(refs.current.beatPos);
                if (beat < rowGridData.length && rowGridData[beat] !== "") {
                    updateVolume(trackNo, 1);   // if have track and play, make it active
                    //console.log("rowGridData[beat]: ", rowGridData[beat]);
                }
                else if (beat > 0 && beat - 1 < rowGridData.length && rowGridData[beat - 1] !== "") {        // If after 1 beat of track
                    const trackVolume = 1 - (refs.current.beatPos - beat);     // Fake volume for demonstartion, the farther position, the lower volume
                    updateVolume(trackNo, trackVolume);   // if no square, mute track
                }
                else {
                    updateVolume(trackNo, 0);   // if no square, mute track
                }
            }
            else {
                updateVolume(trackNo, 0);   // if no playing, mute track
            }
            animationId = requestAnimationFrame(update);
        };

        update();
        return () => cancelAnimationFrame(animationId);
    }, [rowGridData, trackNo, beatPos, trackVolume, setTrackVolume]);

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
                        <div className="d-flex flex-row" style={{
                            gap: "1px"
                        }}>
                            <div className="d-flex flex-column align-items-center"
                                style={{
                                    position: "relative",
                                    width: "5px",
                                    height: "18px",
                                    backgroundColor: "black"
                                }}
                            >
                                <div className="d-flex flex-column align-items-center"
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        width: "5px",
                                        height: `${18 * trackVolume[trackNo]}px`,
                                        backgroundColor: "#99f4e9"
                                    }}
                                />
                            </div>
                            <div className="d-flex flex-column align-items-center"
                                style={{
                                    position: "relative",
                                    width: "5px",
                                    height: "18px",
                                    backgroundColor: "black"
                                }}
                            >
                                <div className="d-flex flex-column align-items-center"
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        width: "5px",
                                        height: `${18 * trackVolume[trackNo]}px`,
                                        backgroundColor: "#99f4e9"
                                    }}
                                />
                            </div>
                        </div>
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

                <div className="d-flex" style={{ borderWidth: "0px" }}>
                    {level > 0 ? name.slice(0, 18).concat(name.length > 18 ? "..." : "")
                        : name.slice(0, 21).concat(name.length > 21 ? "..." : "")
                }
                </div>
            </div>

            {/* Meter */}
            <div className="d-flex flex-row"
                style={{ gap: "1px" }}
            >
                <div className="d-flex flex-column align-items-center"
                    style={{
                        position: "relative",
                        width: "5px",
                        height: "18px",
                        backgroundColor: "black"
                    }}
                >
                    <div className="d-flex flex-column align-items-center"
                        style={{
                            position: "absolute",
                            bottom: 0,
                            width: "5px",
                            height: `${18 * trackVolume[trackNo]}px`,
                            backgroundColor: "#99f4e9"
                        }}
                    />
                </div>
                <div className="d-flex flex-column align-items-center"
                    style={{
                        position: "relative",
                        width: "5px",
                        height: "18px",
                        backgroundColor: "black"
                    }}
                >
                    <div className="d-flex flex-column align-items-center"
                        style={{
                            position: "absolute",
                            bottom: 0,
                            width: "5px",
                            height: `${18 * trackVolume[trackNo]}px`,
                            backgroundColor: "#99f4e9"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default Track_gen;