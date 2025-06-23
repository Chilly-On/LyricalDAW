interface ToStartProps {       // for input parameters
    onPlay: () => void;
}

const To_start: React.FC<ToStartProps> = ({ onPlay }) => {
    return (
        <button
            onClick={onPlay}
            style={{
                width: "40px",
                height: "30px",
                backgroundColor: "#5FC3C7", // green color
                display: "flex",
                alignItems: "inherit",
                justifyContent: "inherit",
                borderWidth: "0px",
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",       // match shape
            }}
        >
            <img
                src="Footer/to-start.png"
                alt="Play Button"
                style={{ width: "50%", height: "50%" }} // scales arrow within the square
            />
        </button>
    );
};

export default To_start;