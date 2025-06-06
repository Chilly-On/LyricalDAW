import React from "react";
import { useMemo, useRef, useEffect, useState } from "react";
import Track_gen from "./track-gen";
import Track_grid from "./track-grid";

const getTrackCount = (tracks) => {
    let count = 0;
    const traverse = (items) => {
        for (const item of items) {
            if (item.tracks && item.open) {
                traverse(item.tracks);
            } else {
                count += 1;
            }
        }
    };
    traverse(tracks);
    return count;
};


const Track = () => {
    const timeSteps = 30;
    const initialTimeWidth = 30;

    const renderTrack = (track, level = 0) => (
        <Track_gen
            key={track.id}
            id={track.id}
            name={track.name}
            color={track.color}
            icon={track.icon}
            borderTop={track.borderTop}
            level={level}
        >
            {track.tracks?.map((subTrack) => renderTrack(subTrack, level + 1))}
        </Track_gen>
    );

    const fileTracks = [
        {
            name: "File closed",
            icon: "Track/file.png",
            color: "#e6357a",
            borderTop: 1
        },
        {
            name: "File opened",
            icon: "Track/file-open.png",
            color: "#b167ff",
            open: true,
            tracks: [
                {
                    id: 1,
                    name: "Harmony",
                    color: "#f5c848",
                    icon: "Track/harmony.png"
                },
                {
                    id: 2,
                    name: "Mixing",
                    color: "#41dfe2",
                    icon: "Track/mix.png"
                },
                {
                    id: 3,
                    name: "Piano",
                    color: "#dff155",
                    icon: "Track/piano.png"
                },
                {
                    id: 4,
                    name: "Sample",
                    color: "#b1bbca",
                    icon: "Track/sample.png"
                },
                {
                    name: "Nested File",
                    icon: "Track/file-open.png",
                    color: "#b167ff",
                    open: true,
                    tracks: [
                        {
                            id: 5,
                            name: "Harmony",
                            color: "#f5c848",
                            icon: "Track/harmony.png"
                        },
                        {
                            id: 6,
                            name: "Mixing",
                            color: "#41dfe2",
                            icon: "Track/mix.png"
                        },
                        {
                            id: 7,
                            name: "Piano",
                            color: "#dff155",
                            icon: "Track/piano.png"
                        },
                        {
                            id: 8,
                            name: "Sample",
                            color: "#b1bbca",
                            icon: "Track/sample.png"
                        }
                    ]
                }
            ]
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }
    ];
    const trackCount = useMemo(() => getTrackCount(fileTracks), [fileTracks]);
    const [trackHeight] = useState(20);

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
        <div className="d-flex flex-row"
            style={{
                border: "2.5px solid #f9f9fa",
                borderRadius: "10px",
                height: "100%",
                width: "100%",
            }}
        >
            {/*
            New plan:
            TOP HEADER include TRACK SETTING and TIMELINE
            1 TRACK INCLUDE HEADER AND GRID, FIX TRACK GEN
            SCROLL ONLY APPLY TO TRACK PART (HEADER + GRID), FIX HEADER CONSTANT
            */ }


            <div className="d-flex flex-column justify-content-between align-items-center"
                style={{
                    fontSize: "15px"
                }}
            >
                <div style={{
                    width: "400px",
                    height: "100%",         // pending auto
                    backgroundColor: "#2f3135",
                    borderWidth: "0px",
                    paddingTop: "5px",
                    paddingLeft: "5px",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px"
                }}>
                    {/* Track setting*/}
                    <div className="d-flex flex-row align-items-center justify-content-between"
                        style={{
                            width: "395px",
                            height: "25px",
                            backgroundColor: "inherit",
                            padding: "10px",
                            borderRight: "1px solid #70767a",
                            borderBottom: "1px solid #70767a",
                            overflow: "hidden"
                        }}>
                        {/* Left part*/}
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
                    {/* Track header
                    Width 50px normal, 60px if open file    
                    */}
                    <div className="d-flex flex-column">    {/*  Add track header here*/}
                        {fileTracks.map((track) => renderTrack(track))}
                    </div>
                </div>
            </div>
            {/* Track content part
                Clear overflow
                Extend indefinely based on track
            */}
            <div>
                {/* Timeline grid*/}
                {/* Consider redesign timeline so that it maintains weight during zooming in or out*/}
                <Track_grid
                    trackCount={trackCount}
                    timeSteps={timeSteps}
                    trackHeight={20}
                    initialTimeWidth={30}
                />


            </div>

        </div>
    );
};

export default Track;
