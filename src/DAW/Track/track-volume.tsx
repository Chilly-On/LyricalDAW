import React, { useEffect } from "react";

type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
};
interface TrackVolumeProps {       // for input parameters
    beatPos: number;
    rowGridData: string[];
    trackNo: number;
    trackVolume: number[];
    setTrackVolume: React.Dispatch<React.SetStateAction<number[]>>;
    refs: React.RefObject<PlayerRefs>;
}

const Track_Volume: React.FC<TrackVolumeProps> = ({ rowGridData, trackNo, trackVolume, setTrackVolume, refs }) => {
    useEffect(() => {
        // Update index i
        const updateVolume = (i: number, newValue: number) => {
            setTrackVolume(prev => {
                const newArr = [...prev];
                newArr[i] = newValue;
                return newArr;
            });
        };

        //const getVolume = (i: number) => {
        //    return trackVolume[i];
        //}

        const findClosestBeat = (pos: number, limit: number) => {
            for (let i = 1; i < limit; i++) {
                if (pos - i < 0)        // Underflow
                    return 0;
                else if (rowGridData[pos - i] !== "")        // If any of previous 8 beats are having tracks
                    return i;
            }
            return 0;
        };

        let animationId: number;

        const update = () => {
            if (refs.current.isPlaying) {
                const beat = Math.floor(refs.current.beatPos);
                if (beat < rowGridData.length && rowGridData[beat] !== "") {
                    updateVolume(trackNo, 1);   // if have track and play, make it active
                    //console.log("rowGridData[beat]: ", rowGridData[beat]);
                }
                //else if (getVolume(trackNo) > 0) {
                else {
                    const limitLengthen = 8;
                    const closestBeat = findClosestBeat(beat, limitLengthen);
                    if (closestBeat > 0) {
                        const trackVolume = 1 - (closestBeat + refs.current.beatPos - beat) / limitLengthen;     // Fake volume for demonstartion, the farther position, the lower volume
                        //console.log("trackVolume[", trackNo, "]: ", trackVolume);
                        updateVolume(trackNo, trackVolume);   // if no square, mute track
                    }
                    else {
                        updateVolume(trackNo, 0); // if no square, mute track
                    }
                }
                //else {
                //    console.log("trackNo: ", trackNo);
                //    console.log("getVolume(trackNo): ", getVolume(trackNo));
                //    updateVolume(trackNo, 0);   // if no square, mute track
                //}
            }
            else {
                updateVolume(trackNo, 0);   // if no playing, mute track
            }
            animationId = requestAnimationFrame(update);
        };

        update();
        return () => cancelAnimationFrame(animationId);
    }, [rowGridData, trackNo, setTrackVolume, refs]);
    return (
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
    );
};

export default Track_Volume;