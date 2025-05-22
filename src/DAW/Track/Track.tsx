const Track = () => {
    /*return (
        <div className="d-flex flex-column gap-2"
            style={{
                width: "300px",
                height: "700px",         // pending auto
                backgroundColor: "#2f3238", // green color
                alignItems: "center",
                borderWidth: "0px",
                borderRadius: "20px",       // match shape
                padding: "20px"
            }}
        >
        </div>
    );*/
    return (
        <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-between align-items-center">
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
                            height: "50px",
                            backgroundColor: "black",
                            padding: "10px",
                            border: "5px solid #70767a",
                            borderRadius: "10px"
                        }}>
                        {/* Left part*/ }
                        <div className="d-flex flex-row"
                            style={{
                                height: "30px",
                                backgroundColor: "#898e8c", // match with parent color
                                alignItems: "center",
                                border: "3px solid #70767a",
                                borderRadius: "10px"
                            }}>
                            <button
                                style={{
                                    backgroundColor: "inherit", // match with parent color
                                    display: "flex",
                                    alignItems: "inherit",
                                    justifyContent: "inherit",
                                    border: "0px"
                                }}
                            >
                                <img
                                    src="Track/add-track.png"
                                    alt="Play Button"
                                    style={{
                                        height: "20px", width: "20px"
                                    }} // scales arrow within the square
                                />
                            </button>
                            <button
                                style={{
                                    backgroundColor: "inherit", // match with parent color
                                    display: "flex",
                                    alignItems: "inherit",
                                    justifyContent: "inherit",
                                    border: "0px"
                                }}
                            >
                                <img
                                    src="Track/category.png"
                                    alt="Play Button"
                                    style={{
                                        height: "20px", width: "20px"
                                    }} // scales arrow within the square
                                />
                            </button>
                        </div>
                        {/* Right part*/}
                        <div className="d-flex flex-row align-items-center">
                            <div className="d-flex flex-row"
                                style={{
                                    height: "30px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "10px",
                                    gap: "0px", // ensure no spacing
                                    border: "5px solid #70767a",
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
                                            height: "20px",
                                            width: "20px"
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
                                            height: "15px"
                                        }} // scales arrow within the square
                                    />
                                </button>
                            </div>
                            <button
                                style={{
                                    height: "30px",
                                    width: "40px",
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
                    <div className="d-flex flex-column"
                        style={{
                            fontSize: "15px"
                        } }
                    >
                        {/*  DON'T COPY HERE*/ }
                        <div className="d-flex flex-row align-items-center track"
                            style={{
                                width: "380px",
                                border: "3px solid #737579"
                            }}
                        >
                            <div className="d-flex align-items-center justify-content-between track-serial"
                                style={{
                                    width: "50px",
                                    backgroundColor: "#e6357a" // Change color track here
                                }}
                            >
                                <img src="Track/file.png" alt="Timeline"        // Change track icon here
                                    className="track-icon"
                                />
                                <div>
                                    <div style={{
                                        fontSize: "14px",
                                        color: "black"
                                    }}>
                                           {/* Track id here*/}
                                    </div>
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
                                File closed
                            </div>
                        </div>
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
                                    <div className="d-flex flex-row align-items-center track"
                                        style={{
                                            width: "370px"            // del top border to match upper's bottom border
                                        }}
                                    >
                                        <div className="d-flex align-items-end justify-content-between track-serial"
                                            style={{
                                                width: "50px",
                                                backgroundColor: "#f5c848", // Change color track here
                                            }}
                                        >
                                            <img src="Track/harmony.png" alt="Timeline"        // Change track icon here
                                                className="track-icon"
                                            />
                                            <div>
                                                <div style={{
                                                    fontSize: "14px",
                                                    color: "black"
                                                }}>
                                                1    {/* Track id here*/}
                                                </div>
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
                                            Harmony
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center track"
                                        style={{
                                            width: "370px"  // del top border to match upper's bottom border
                                        }}
                                    >
                                        <div className="d-flex align-items-end justify-content-between track-serial"
                                            style={{
                                                width: "50px",
                                                backgroundColor: "#41dfe2" // Change color track here
                                            }}
                                        >
                                            <img src="Track/mix.png" alt="Timeline"        // Change track icon here
                                                className="track-icon"
                                            />
                                            <div>
                                                <div style={{
                                                    fontSize: "14px",
                                                    color: "black"
                                                }}>
                                                    2    {/* Track id here*/}
                                                </div>
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
                                            Mixing
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center track"
                                        style={{
                                            width: "370px"// del top border to match upper's bottom border
                                        }}
                                    >
                                        <div className="d-flex align-items-end justify-content-between track-serial"
                                            style={{
                                                width: "50px",
                                                backgroundColor: "#dff155" // Change color track here
                                            }}
                                        >
                                            <img src="Track/piano.png" alt="Timeline"        // Change track icon here
                                                className="track-icon"
                                            />
                                            <div>
                                                <div style={{
                                                    fontSize: "14px",
                                                    color: "black"
                                                }}>
                                                    3    {/* Track id here*/}
                                                </div>
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
                                            Piano
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center track"
                                        style={{
                                            width: "370px"  // del top border to match upper's bottom border
                                        }}
                                    >
                                        <div className="d-flex align-items-end justify-content-between track-serial"
                                            style={{
                                                width: "50px",
                                                backgroundColor: "#b1bbca", // Change color track here
                                            }}
                                        >
                                            <img src="Track/sample.png" alt="Timeline"        // Change track icon here
                                                className="track-icon"
                                            />
                                            <div>
                                                <div style={{
                                                    fontSize: "14px",
                                                    color: "black"
                                                }}>
                                                    4    {/* Track id here*/}
                                                </div>
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
                                            Sample
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

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
