interface ToEndProps {       // for input parameters
    onPlay: () => void;
}

const To_end: React.FC<ToEndProps> = ({ onPlay }) => {
    return (
        <button
            onClick={onPlay}
            style={{
                width: "40px",
                height: "30px",
                backgroundColor: "#5FC3C7",
                display: "flex",
                alignItems: "inherit",
                justifyContent: "inherit",
                borderWidth: "0px"
            }}
        >
            <img
                src="Footer/to-end.png"
                alt="Play Button"
                style={{ width: "50%", height: "50%" }} // scales arrow wit
            />
            </button>
    );
};

export default To_end;