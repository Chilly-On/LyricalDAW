const Bpm = () => {
    return (
        <div className="flex-row gap-0">
            <div style={{        // pending for dynamic
                width: "25px",
                height: "25px",
                backgroundColor: "white",
                position: "relative",
                borderRadius: "3px",
            }}>
                <img
                    src="Footer/bpm.png"
                    alt="Play Button"
                    style={{
                        position: "absolute",
                        top: 5,
                        left: 5,
                        height: "15px",
                        width: "15px"
                    }} // scales arrow within the square
                />
            </div>
            <div className="flex-row align-items-center justify-content-center"
                style={{
                    width: "80px",
                    height: "25px",
                    backgroundColor: "#004F52",
                    marginRight: "10px",
                    gap: "0px", // ensure no spacing
                    border: "3px solid #70767a",
                    borderLeft: "0px",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px"
                }}
            >
                <div className="justify-content-center text-end"
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "inherit",
                        borderWidth: "0px",
                        borderTopRightRadius: "5px",
                        borderBottomRightRadius: "5px"
                    }}
                >  130.000
                </div>
                <div className="align-item-center justify-content-center"
                    style={{
                        width: "16px",
                        height: "30px",
                        borderWidth: "0px",
                        borderTopRightRadius: "5px",
                        borderBottomRightRadius: "5px",
                        gap: "1px"
                    }}>
                    <button
                        style={{
                            height: "7px",
                            backgroundColor: "inherit",
                            borderWidth: "0px",
                            position: "relative"
                        }}
                    >
                        <img
                            src="Footer/bpm-up.png"
                            alt="Play Button"
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 3,
                                width: "7px",
                                height: "7px"
                            }} // scales arrow within the square
                        />
                    </button>
                    <button
                        style={{
                            height: "7px",
                            backgroundColor: "inherit",
                            borderWidth: "0px",
                            position: "relative"
                        }}
                    >
                        <img
                            src="Footer/bpm-down.png"
                            alt="Play Button"
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 3,
                                width: "7px",
                                height: "7px"
                            }} // scales arrow within the square
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bpm;
