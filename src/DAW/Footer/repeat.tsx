type PlayerRefs = {
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
};

interface RepeatProps {       // for input parameters
    refs: React.RefObject<PlayerRefs>;
    onPlay: () => void;
}

const Repeat: React.FC<RepeatProps> = ({ refs, onPlay }) => {
    return (
        <button
            onClick={onPlay}
            style={{
                width: "40px",
                height: "30px",
                backgroundColor: refs.current.repeat ? "#8f83f2" : "#5FC3C7",            // If repeat, change color
                display: "flex",
                alignItems: "inherit",
                justifyContent: "inherit",
                borderWidth: "0px"
            }}
        >
            <img
                src="Footer/return.png"
                alt="Play Button"
                style={{ width: "50%", height: "50%" }} // scales arrow wit
            />
            </button>
    );
};

export default Repeat;