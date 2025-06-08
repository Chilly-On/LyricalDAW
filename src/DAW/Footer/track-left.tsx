const Track_left = () => {
    return (
        <div className="flex-row align-items-center justify-content-center"
            style={{
                width: "150px",
                height: "25px",
                backgroundColor: "black",
                marginRight: "10px",
                gap: "0px", // ensure no spacing
                border: "3px solid #70767a",
                borderRadius: "10px"
            }}
        >
            <div className="justify-content-center align-items-center"
                style={{
                    width: "15px",
                    marginRight: "10px",
                    position: "relative",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px"
                }}>
                <img
                    src="Footer/track-left.png"
                    alt="Play Button"
                    style={{
                        position: "absolute",
                        left: 9,
                        height: "15px"
                    }} // scales arrow within the square
                />
            </div>
            <div className="justify-content-center text-end"
                style={{
                    width: "140px",
                    height: "100%",
                    backgroundColor: "inherit",
                    paddingRight: "10px",
                    borderWidth: "0px",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    borderLeft: "3px solid #70767a"
                }}
            >  0.   0.   0.   0.
            </div>
        </div>
    );
};

export default Track_left;
