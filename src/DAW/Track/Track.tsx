import React from "react";
import Track_gen from "./track-gen";

const Track = () => {
    return (
        <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-between align-items-center"
                style={{
                    fontSize: "15px"
                }}
            >
                <div style={{
                    width: "400px",
                    height: "700px",         // pending auto
                    backgroundColor: "black",
                    borderWidth: "0px",
                    padding: "10px"
                }}>
                    {/* Track setting*/ }
                    <div className="d-flex flex-row align-items-center justify-content-between"
                        style={{
                            width: "380px",
                            height: "24px",
                            backgroundColor: "black",
                            padding: "10px",
                            border: "3px solid #70767a",
                            borderRadius: "10px",
                            overflow: "hidden"
                        }}>
                        {/* Left part*/ }
                        <div className="d-flex flex-row"
                            style={{
                                height: "20px",
                                backgroundColor: "#898e8c", // match with parent color
                                alignItems: "center",
                                border: "1px solid #70767a",
                                borderRadius: "10px"
                            }}>
                            <button
                                style={{
                                    backgroundColor: "inherit", // match with parent color
                                    display: "flex",
                                    alignItems: "inherit",
                                    justifyContent: "inherit",
                                    border: "0px",
                                    borderTopLeftRadius: "10px",
                                    borderBottomLeftRadius: "10px"
                                }}
                            >
                                <img
                                    src="Track/add-track.png"
                                    alt="Play Button"
                                    style={{
                                        height: "12px", width: "12px"
                                    }} // scales arrow within the square
                                />
                            </button>
                            <button
                                style={{
                                    backgroundColor: "inherit", // match with parent color
                                    display: "flex",
                                    alignItems: "inherit",
                                    justifyContent: "inherit",
                                    border: "0px",
                                    borderTopRightRadius: "10px",
                                    borderBottomRightRadius: "10px"
                                }}
                            >
                                <img
                                    src="Track/category.png"
                                    alt="Play Button"
                                    style={{
                                        height: "12px", width: "12px"
                                    }} // scales arrow within the square
                                />
                            </button>
                        </div>
                        {/* Right part*/}
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-row"
                                style={{
                                    height: "20px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "10px",
                                    gap: "0px", // ensure no spacing
                                    border: "3px solid #70767a",
                                    borderRadius: "10px"
                                }}
                            >
                                <div
                                    style={{        // pending for dynamic
                                        width: "100px",
                                        alignItems: "center",
                                        textAlign: "right",
                                        marginRight: "10px"
                                    }}>
                                    0/0
                                </div>
                                <button
                                    style={{
                                        backgroundColor: "inherit",
                                        display: "flex",
                                        alignItems: "inherit",
                                        justifyContent: "center",
                                        borderWidth: "0px",
                                        borderLeft: "3px solid #70767a",
                                        borderRight: "3px solid #70767a",
                                    }}
                                >
                                    <img
                                        src="Track/house.png"
                                        alt="Play Button"
                                        style={{
                                            height: "15px",
                                            width: "15px"
                                        }} // scales arrow within the square
                                    />
                                </button>
                                <button
                                    style={{
                                        height: "15px",
                                        backgroundColor: "inherit",
                                        display: "flex",
                                        alignItems: "inherit",
                                        justifyContent: "center",
                                        borderWidth: "0px",
                                        borderRadius: "5px"
                                    }}
                                >
                                    <img
                                        src="Track/collapse.png"
                                        alt="Play Button"
                                        style={{
                                            height: "12px"
                                        }} // scales arrow within the square
                                    />
                                </button>
                            </div>
                            <button
                                style={{
                                    height: "20px",
                                    width: "30px",
                                    backgroundColor: "#898e8c",
                                    display: "flex",
                                    alignItems: "inherit",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    border: "1px solid #70767a",
                                    borderRadius: "3px"
                                }}
                            >
                                <img
                                    src="Track/search.png"
                                    alt="Play Button"
                                    style={{
                                        height: "15px", width: "12px"
                                    }} // scales arrow within the square
                                />
                            </button>
                        </div>
                    </div>
                    {/* Track header, wait for dynamic
                    Width 50px normal, 60px if open file    
                    */}
                    <div className="d-flex flex-column">
                        {/*  DON'T COPY HERE*/ }
                        <Track_gen color="#e6357a" icon="Track/file.png" name="File closed" borderTop={1} />
                        {/* File open*/}
                        <div className="d-flex flex-column align-items-center"
                            style={{
                                width: "380px"
                            }}
                        >
                            <div className="d-flex flex-row align-items-center track"
                                style={{
                                    width: "380px"            // del top border to match upper's bottom border
                                }}
                            >
                                <div className="d-flex align-items-end justify-content-between track-serial"
                                    style={{
                                        width: "60px",
                                        backgroundColor: "#b167ff" // Change color track here
                                    }}
                                >
                                    <img src="Track/file-open.png" alt="Timeline"        // Change track icon here
                                        className="track-icon"
                                    />
                                    <div style={{
                                        fontSize: "14px",
                                        color: "black"
                                    }}>
                                           {/* Track id here*/}
                                    </div>
                                </div>
                                <div className="d-flex flex-row fw-bold">
                                    <button className="mute-track">m</button>
                                    <button className="stop-track">s</button>
                                </div>
                                <div className="d-flex"
                                    style={{
                                        borderWidth: "0px",
                                        gap: "10px"
                                    }}>
                                    {/* Track name here*/}
                                    File opened
                                </div>
                            </div>
                            <div className="d-flex">
                                <div style={{
                                        width: "10px"
                                }} />
                                <div className="d-flex flex-column">
                                    {/*  One track in div*/}
                                    <Track_gen width="370px" color="#f5c848" icon="Track/harmony.png" id={1} name="Harmony" />
                                    <Track_gen width="370px" color="#41dfe2" icon="Track/mix.png" id={2} name="Mixing" />
                                    <Track_gen width="370px" color="#dff155" icon="Track/piano.png" id={3} name="Piano" />
                                    <Track_gen width="370px" color="#b1bbca" icon="Track/sample.png" id={4} name="Sample" />
                                </div>
                            </div>
                        </div>
                        <Track_gen color="#dff155" icon="Track/piano.png" id={5} name="Piano 2" />

                    </div>
                </div>
            </div>
            {/* Track content part
                Clear overflow
                Extend indefinely based on track
            */}
            <div>
                {/* Timeline*/}
                {/* Consider redesign timeline so that it maintains weight during zooming in or out*/}
                <div className="d-flex flex-row"
                    style={{
                        width: "400px",
                        height: "700px"
                    }}>
                    <img src="Track/timeline.png" alt="Timeline"
                        style={{
                            width: "563px",
                            height: "59px"
                        }} />
                    <img src="Track/timeline.png" alt="Timeline"
                        style={{
                            width: "563px",
                            height: "59px"
                        }} />
                </div>
            </div>

        </div>
    );
};

export default Track;
