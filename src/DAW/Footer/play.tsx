const Play = () => {
    return (
        <button
            style={{
                width: "40px",
                height: "30px",
                backgroundColor: "#69cd84", // green color
                display: "flex",
                alignItems: "inherit",
                justifyContent: "inherit",
                borderWidth: "0px"
            }}
        >
            <img
                src="Footer/play.png"
                alt="Play Button"
                style={{ width: "50%", height: "50%" }} // scales arrow within the square
            />
            </button>
    );
};

export default Play;