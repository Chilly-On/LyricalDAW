const Play = ({ onPlay, isPlaying }) => {
    return (
        <button
            onClick={onPlay}
            style={{
                width: "40px",
                height: "30px",
                backgroundColor: isPlaying ? "#69cd84" : "#70767a" , // set to #69cd84 when play
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