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

const Track_Volume: React.FC<TrackVolumeProps> = ({ beatPos, rowGridData, trackNo, trackVolume, setTrackVolume, refs }) => {
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
    }, [rowGridData, trackNo, beatPos, setTrackVolume, refs]);
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