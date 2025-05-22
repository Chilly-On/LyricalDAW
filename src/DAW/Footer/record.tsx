const Record = () => {
    return (
        <button
            style={{
                width: "40px",
                height: "30px",
                backgroundColor: "#dc3030", // green color
                display: "flex",
                alignItems: "inherit",
                justifyContent: "inherit",
                borderWidth: "0px",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",       // match shape
            }}
        >
            <img
                src="Footer/record.png"
                alt="Play Button"
                style={{ width: "50%", height: "50%" }} // scales arrow wit
            />
            </button>
    );
};

export default Record;