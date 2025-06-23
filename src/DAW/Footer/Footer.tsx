import { useEffect } from "react";
import { Player } from "textalive-app-api";
import Track_left from './track-left';
import Track_right from './track-right';
import Track_pos from './track-pos';
import Time_pos from './time-pos';
import Bpm from './bpm';
import To_start from './to-start';
import To_end from './to-end';
import Prev from './prev';
import Next from './next';
import Repeat from './repeat';
import Stop from './stop';
import Play from './play';
import Record from './record';

type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
};
interface FooterProps {       // for input parameters
    player: Player,
    isPlaying: boolean,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    timePos: number,
    beatPos: number,
    beatLeftPos: number,
    setBeatLeftPos: (n: number) => void,
    beatRightPos: number,
    setBeatRightPos: (n: number) => void,
    repeat: boolean,
    setRepeat: React.Dispatch<React.SetStateAction<boolean>>,
    refs: React.RefObject<PlayerRefs>;
}


const Footer: React.FC<FooterProps> = ({ player, isPlaying, setIsPlaying, timePos, beatPos, beatLeftPos, setBeatLeftPos, beatRightPos, setBeatRightPos, repeat, setRepeat, refs }) => {
    const handleToStart = () => {
        setBeatLeftPos(0);
        setBeatRightPos(0);
        player.requestMediaSeek(0)
        console.log("To start");
    }
    const handleToEnd = () => {
        if (player) {
            const position = (player.data.song.length - 2.5) * 1000;        // hardcoded here, because real length is wrong
            const beat = player.findBeat(position);
            const finatPosition = beat.endTime;
            setBeatLeftPos(finatPosition);
            setBeatRightPos(finatPosition);
            player.requestMediaSeek(finatPosition)
        }
    }
    const handlePlay = () => {
        if (isPlaying) player.requestPause(); else player.requestPlay();
        setIsPlaying((prev: boolean) => !prev);
        console.log("Music play");
    }
    const handleStop = () => {
        setIsPlaying(false);
        player.requestPause();
        console.log("Music stop");
    }
    const handleRepeat = () => {
        setRepeat((prev: boolean) => !prev); // Toggle the state
        console.log("Repeat toggled:", !refs.current.repeat);
    };
    const handlePopup = () => {             // Click popup to hide
        const popup = document.getElementById("popup");
        if (popup) {
            popup.style.display = 'none'; // Hide if have popup
        }
    }

    const handleInstruct = () => {
        const instruct = document.getElementById("instructJP");
        const popup = document.getElementById("popup");
        if (popup) {
            popup.style.display = 'none'; // Hide if have popup
        }
        if (instruct) {
            instruct.style.display = 'flex'; // Show the instruction
        }
    }

    // Force to update value completely
    useEffect(() => {
        refs.current.timePos = timePos;
    }, [timePos]);
    useEffect(() => {
        refs.current.beatPos = beatPos;
    }, [beatPos]);
    useEffect(() => {
        refs.current.isPlaying = isPlaying;
    }, [isPlaying]);
    useEffect(() => {
        refs.current.repeat = repeat;
    }, [repeat]);
    useEffect(() => {
        refs.current.beatLeftPos = beatLeftPos;
    }, [beatLeftPos]);
    useEffect(() => {
        refs.current.beatRightPos = beatRightPos;
    }, [beatRightPos]);


    // Bottom menu in blank (track-control)
    return (
        <footer className="d-flex flex-row flex-wrap align-items-center text-center justify-content-between"
            style={{
                height: "100%"
            }}
        >
            <Track_left refs={refs} />
            <Track_right refs={refs} />
           
            <div
                style={{
                    display: "flex",
                    position: "relative",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div
                    style={{
                        height: "30px",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "10px",
                        gap: "0px", // ensure no spacing
                    }}
                >
                    <To_start onPlay={handleToStart} />
                    <To_end onPlay={handleToEnd} />
                    <Prev />
                    <Next />
                    <Repeat refs={refs} onPlay={handleRepeat} />
                    <Stop refs={refs} onPlay={ handleStop } />   {/* () =>: wait click interaction*/ }
                    <Play refs={refs} onPlay={ handlePlay } />
                    <Record />
                </div>
                <div style={{
                    position: "relative",
                    marginLeft: "10px"
                }}
                >
                    <button className="d-flex flex-row align-items-center text-center justify-content-between"
                        onClick={handleInstruct}
                        style={{
                            width: "30px",
                            height: "24px",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#5FC3C7",
                            borderWidth: "0px",
                            paddingLeft: "10px",
                            fontSize: "20px",
                            color: "white"
                        }}>
                        ?
                    </button>
                </div>


                <img id="popup"
                    onClick={handlePopup}
                    src="instructPopup.png"
                    alt="Play Button"
                    style={{
                        position: "absolute",
                        bottom: 20,
                        right: 0,
                        height: "100px",
                        cursor: "pointer"
                }} />
            </div>
            
            <Track_pos refs={refs}  />
            <Time_pos refs={refs} />
            <Bpm />
            
        </footer>
    );
};

export default Footer;
