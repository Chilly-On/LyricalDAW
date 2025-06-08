const Play = ({ onPlay, isPlaying }) => {
    return (
        <button
            onClick={onPlay}
            style={{
                width: "40px",
                height: "30px",
                backgroundColor: isPlaying ? "#70767a" : "#a2a9ac", // set to inherit when play
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

export default Play;