import { useRef, useEffect, useState } from "react";
import { Player } from "textalive-app-api";
import Track_gen from "./track-gen";
import Track_grid from "./track-grid";
import fileTracks from "../../Data/fileTracks";
import gridData from "../../Data/gridData";
import Timeline_pointer from "./timeline-pointer";
import Range_pointer from "./range-pointer";

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
    type: "piano" | "sample" | "fx" | "file";
    name: string;
    icon: string;
    color: string;
    borderTop?: number;
    open?: boolean;
    tracks?: TrackFile[];           // Recursive children
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
interface TrackProps {       // for input parameters
    musicOffset: number,
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


const Track: React.FC<TrackProps> = ({ musicOffset, player, isPlaying, timePos, setTimePos, beatPos, setBeatPos, beatLeftPos, setBeatLeftPos, beatRightPos, setBeatRightPos, leftTime, setLeftTime, refs }) => {
    // Initialize track grid length here
    //const timeSteps = player.data.song.length * 4;          // change 4/4 or 3/4 here
    const timeSteps = 125 * 4 + 2;          // change 4/4 or 3/4 here; grid is quarterBeat
    const initialTimeWidth = 30;
    const [timeWidth] = useState(initialTimeWidth);

    const [trackVolume, setTrackVolume] = useState(Array(125).fill(0));      // create 30 array of track volume

    let trackNo = -1;               // For add trackNo++ to become 0
    let trackID = 1;               // To automatically assign ID
    const renderTrack = (track: TrackFile, level = 0) => {
        trackNo++;                  // advance 1 layer
        let writeID = "";
        if (track.type !== "file") {
            writeID = trackID.toString();
            trackID++;
        }
        return (
            <Track_gen
                beatPos={beatPos}
                rowGridData={gridData[trackNo]}// one row only for that track }
                key={trackNo}
                id={writeID}
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
        if (!container || !refs.current.isPlaying) return;

        const targetScrollX = beatPos * timeWidth - (container.clientWidth - 300) / 2;  // Subtract the width of track headers

        console.log("targetScrollX: ", targetScrollX);

        // Smooth scroll to center the pointer
        container.scrollTo({
            left: targetScrollX,
            behavior: "instant"
        });
    }, [beatPos, isPlaying]);

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
                height: timelineHeight,         // pending auto
                backgroundColor: "inherit",
                position: "sticky",
                left: 0,
                borderWidth: "0px",
                paddingLeft: "5px",
                borderTopLeftRadius: "10px",
                    //borderBottomLeftRadius: "10px",
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
                        borderBottom: "1px solid #70767a",
                        zIndex: 3
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
                                134/134
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
                        backgroundColor: "inherit",
                        zIndex: 2
                    }}
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
                    height: timelineHeight,
                    position: "relative",
                }}
            >
                {/* Timeline grid*/}
                {/* Consider redesign timeline so that it maintains weight during zooming in or out*/}
                <Track_grid musicOffset={musicOffset}
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
                <Timeline_pointer
                //musicOffset={musicOffset}
                    refs={refs}
                    timelineHeight={timelineHeight}
                    timeWidth={timeWidth}
                />
                {/* Range pointer */}
                <Range_pointer
                    //musicOffset={musicOffset}
                    refs={refs}
                    timelineHeight={timelineHeight}
                    beatPos={beatPos}
                    timeWidth={timeWidth} />
            </div>
        </div>
    );
};

export default Track;
