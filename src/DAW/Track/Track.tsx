import { useRef, useEffect, useState } from "react";
import { Player } from "textalive-app-api";
import Track_gen from "./track-gen";
import Track_grid from "./track-grid";
//import fileTracks from "../../Data/fileTracks";

const getTrackCount = (tracks: TrackFile[]) => {
    let count = 0;
    const traverse = (items: TrackFile[]) => {
        for (const item of items) {
            if (item.tracks && item.open) {
                count += 1;             // count for file
                traverse(item.tracks);
            } else {
                count += 1;
            }
        }
    };
    traverse(tracks);
    return count;
};

interface TrackFile {
    id?: number;                 // Optional, since top-level tracks don't have it
    name: string;
    icon: string;
    color: string;
    borderTop?: number;
    open?: boolean;
    tracks?: TrackFile[];           // Recursive children
}

const fileTrackFunc = () => {
    const fileTracks: TrackFile[] = [
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
                            name: "A very long name track to test overflow",
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
            id: 10,
            name: "A very long name track to test overflow",
            icon: "Track/piano.png",
            color: "#41dfe2"
        },
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}, {
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //},
        //{
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}, {
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}, {
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}, {
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}, {
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}, {
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}, {
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}, {
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}, {
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}, {
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}, {
        //    id: 9,
        //    name: "Piano 2",
        //    icon: "Track/piano.png",
        //    color: "#dff155"
        //}
    ];
    return fileTracks;
};
const gridDataFunc = () => {
    const gridData = [["#dff155", "#dff155", "", "", "", "", "", "#dff155", "#dff155", "#dff155", "#dff155"], // "" means blank
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
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", ""],
    ];
    return gridData;
};

type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
};
interface TrackProps {       // for input parameters
    player: Player,
    isPlaying: boolean,
    timePos: number,
    setTimePos: (n: number) => void,
    beatPos: number,
    setBeatPos: (n: number) => void,
    beatLeftPos: number,
    setBeatLeftPos: (n: number) => void,
    beatRightPos: number,
    setBeatRightPos: (n: number) => void,
    leftTime: number,
    setLeftTime: (n: number) => void,
    refs: React.RefObject<PlayerRefs>;
}


const Track: React.FC<TrackProps> = ({ player, isPlaying, timePos, setTimePos, beatPos, setBeatPos, beatLeftPos, setBeatLeftPos, beatRightPos, setBeatRightPos, leftTime, setLeftTime, refs }) => {
    // Initialize track grid length here
    //const timeSteps = player.data.song.length * 4;          // change 4/4 or 3/4 here
    const timeSteps = 125 * 4 + 2;          // change 4/4 or 3/4 here
    const initialTimeWidth = 30;
    const [timeWidth] = useState(initialTimeWidth);

    const fileTracks = fileTrackFunc();
    const gridData = gridDataFunc();

    const [trackVolume, setTrackVolume] = useState(Array(30).fill(0));      // create 30 array of track volume

    let trackNo = -1;               // for add trackNo++ to become 0
    const renderTrack = (track: TrackFile, level = 0) => {
        trackNo++;                  // advance 1 layer
        return (
            <Track_gen
                beatPos={beatPos}
                rowGridData={gridData[trackNo]}// one row only for that track }
                key={track.id}
                id={track.id}
                name={track.name}
                color={track.color}
                icon={track.icon}
                borderTop={track.borderTop}
                level={level}
                trackNo={trackNo}
                trackVolume={trackVolume}
                setTrackVolume={setTrackVolume}
                refs={refs}
            >
                {track.tracks?.map((subTrack) => renderTrack(subTrack, level + 1))}
            </Track_gen>
        )
    };

    // const trackCount = useMemo(() => getTrackCount(fileTracks), [fileTracks]);
    
    // TODO LATER

    // For auto-scroll
    const scrollRef = useRef<HTMLDivElement>(null);

    //// Scroll effect for isPlaying

    useEffect(() => {
        const container = scrollRef.current;
        if (!container || !refs.current.isPlaying || beatPos < 12) return;

        const beatWidth = timeWidth + 1.2; // or whatever you use per beat
        const targetScrollX = beatPos * beatWidth - container.clientWidth / 2;

        // Smooth scroll to center the pointer
        container.scrollTo({
            left: targetScrollX
        });
    }, [beatPos, isPlaying]);

    // Calculate the pointer position in the grid
    const calcPointerPos = (beat: number) => {
        return beat * timeWidth;
    }
    // Calculate the width of selection range in the grid
    const calcSelectedRange = (r1: number, r2: number) => {
        return (r2 - r1) * timeWidth;
    }

    // Timeline pointer should claim all of track grid:
    const timelineHeight = 25 + 20 * getTrackCount(fileTracks);

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

    return (
        <div className="d-flex flex-row"
            ref={scrollRef}
            style={{
                backgroundColor: "#2DA399",
                border: "2.5px solid #f9f9fa",
                borderRadius: "10px",
                //height: timelineHeight,                 // change to dynamic to match the number of real tracks
                minHeight: "100%",
                width: "100%",
                overflow: "auto"
            }}
        >
            <div className="d-flex flex-column align-items-center"
                style={{
                fontSize: "15px",
                width: "300px",
                height: "100%",         // pending auto
                backgroundColor: "inherit",
                position: "sticky",
                left: 0,
                borderWidth: "0px",
                paddingLeft: "5px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                zIndex: 3
            }}>
                {/* Track setting*/}
                <div className="d-flex flex-row align-items-center justify-content-between"
                    style={{
                        position: "sticky",
                        top: 0,
                        width: "295px",
                        height: "25px",
                        backgroundColor: "inherit",
                        padding: "10px",
                        borderRight: "1px solid #70767a",
                        borderBottom: "1px solid #70767a"
                    }}>
                    {/* Left part*/}
                    <div className="d-flex flex-row"
                        style={{
                            height: "20px",
                            backgroundColor: "#5FC3C7", // match with parent color
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
                    <div className="d-flex flex-row align-items-center"
                    >
                        <div className="d-flex flex-row"
                            style={{
                                height: "20px",
                                backgroundColor: "#004F52",
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
                                backgroundColor: "#5FC3C7",
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
                <div className="d-flex flex-column"
                    style={{
                        backgroundColor: "inherit"
                    } }
                >
                    {/*  Add track header here*/}
                    {fileTracks.map((track) => renderTrack(track))}
                </div>
            </div>

            {/* Track content part
                Clear overflow
                Extend indefinely based on track
            */}
            <div
                style={{
                    height: "100%",
                    position: "relative"
                }}
            >
                {/* Timeline grid*/}
                {/* Consider redesign timeline so that it maintains weight during zooming in or out*/}
                <Track_grid
                    gridData={gridData}
                    player={player}
                    timeSteps={timeSteps}
                    trackHeight={20}
                    initialTimeWidth={initialTimeWidth}
                    timePos={timePos} setTimePos={setTimePos}
                    beatPos={beatPos} setBeatPos={setBeatPos}
                    beatLeftPos={beatLeftPos} setBeatLeftPos={setBeatLeftPos}
                    beatRightPos={beatRightPos} setBeatRightPos={setBeatRightPos}
                    leftTime={leftTime} setLeftTime={setLeftTime}
                    refs={refs}
                />
                {/* Timeline pointer*/}
                {/* Can hide this in deploy, as well as the scroll is correct (pointer should be on screen) */}
                <div
                    style={{
                        width: "3px",
                        height: timelineHeight,         // change to dynamic to match the number of girds (real tracks)
                        backgroundColor: "black", // green color
                        position: "absolute",
                        top: 0,
                        left: calcPointerPos(beatPos),               // Adjust timeline pointer's position here
                        alignItems: "center",
                        borderWidth: "0px",
                        pointerEvents: "none",           // click though
                    }}
                />
                {/* Range pointer */}
                <div
                    style={{
                        display: refs.current.beatLeftPos !== refs.current.beatRightPos ? "block" : "none",     // Only display when set range 
                        width: `${calcSelectedRange(refs.current.beatLeftPos, refs.current.beatRightPos)}px`,
                        height: timelineHeight,         // Change to dynamic to match the number of girds (real tracks)
                        backgroundColor: refs.current.repeat ? "#8f83f280" : "#70767a80", // Change color when repeat
                        position: "absolute",
                        top: 0,
                        left: calcPointerPos(refs.current.beatLeftPos),               // Adjust timeline pointer's position here
                        alignItems: "center",
                        borderWidth: "0px",
                        pointerEvents: "none",           // click though
                    }}
                />
            </div>
        </div>
    );
};

export default Track;
