const Bpm = () => {
    return (
        <div style={{ position: "relative", width: "110px" }}>
            <img
                src="Footer/bpm.png"
                alt="Track Position"
                style={{ display: "block", width: "100%" }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "35px",
                    transform: "translateY(-50%)",
                    
                    fontSize: "15px"
                }}
            >
                132.000
            </div>
        </div>
    );
};

export default Bpm;
