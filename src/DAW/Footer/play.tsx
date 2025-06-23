type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
};

interface PlayProps {       // for input parameters
    refs: React.RefObject<PlayerRefs>;
    onPlay: () => void;
}

const Play: React.FC<PlayProps> = ({ refs, onPlay }) => {
    return (
        <button
            onClick={onPlay}
            style={{
                width: "40px",
                height: "30px",
                backgroundColor: refs.current.isPlaying ? "#69cd84" : "#5FC3C7" , // set to #69cd84 when play
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: "0px"
            }}
        >
            <img
                src="Footer/play.png"
                alt="Play Button"
                style={{ width: "50%", height: "50%" }}
            />
        </button>
    );
};

export default Play;