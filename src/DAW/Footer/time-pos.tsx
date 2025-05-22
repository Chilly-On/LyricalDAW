const Time_pos = () => {
    return (
        <div style={{ position: "relative", width: "150px" }}>
            <img
                src="Footer/time-pos.png"
                alt="Track Position"
                style={{ display: "block", width: "100%" }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "60px",
                    transform: "translateY(-50%)",
                    
                    fontSize: "15px"
                }}
            >
                0:00:00.000
            </div>
        </div>
    );
};

export default Time_pos;
