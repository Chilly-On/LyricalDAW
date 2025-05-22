const Track_right = () => {
    return (
        <div style={{ position: "relative", width: "150px" }}>
            <img
                src="Footer/track-right.png"
                alt="Track Position"
                style={{ display: "block", width: "100%" }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "75px",
                    transform: "translateY(-50%)",
                    fontSize: "15px"
                }}
            >
                0.   0.   0.   0.
            </div>
        </div>
    );
};

export default Track_right;
