const Play = () => {
    return (
        <button
            style={{
                width: "40px",
                height: "30px",
                backgroundColor: "#70767a", // green color
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

export default Play;