type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
};

interface StopProps {       // for input parameters
    refs: React.RefObject<PlayerRefs>;
    onPlay: () => void;
}


const Stop: React.FC<StopProps> = ({ refs, onPlay }) => {
    return (
        <button
            onClick={onPlay}
            style={{
                width: "40px",
                height: "30px",
                backgroundColor: refs.current.isPlaying ? "#5FC3C7" : "#45F8E8", // set to inherit when play
                display: "flex",
                alignItems: "inherit",
                justifyContent: "inherit",
                borderWidth: "0px"
            }}
        >
            <img
                src="Footer/stop.png"
                alt="Play Button"
                style={{ width: "50%", height: "50%" }} // scales arrow wit
            />
            </button>
    );
};

export default Stop;