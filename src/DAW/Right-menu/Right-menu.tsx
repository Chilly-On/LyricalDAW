const Right_menu = () => {
    return (
        <div className="flex-column gap-2 right-menu"
            style={{
                display: "flex",
                width: "300px",
                height: "100%",         // pending auto
                backgroundColor: "#2f3238", // green color
                alignItems: "center",
                borderWidth: "0px",
                borderRadius: "20px",       // match shape
                padding: "20px"
            }}
        >
            <div className="d-flex flex-row">
                {/*Rework later*/ }
                <div style={{ position: "relative", width: "70px" }}>
                    <div
                        style={{
                            height: "20px",         // pending auto
                            backgroundColor: "black", // green color
                            alignItems: "center",
                            borderWidth: "0px",
                            borderRadius: "20px"       // match shape
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "25px",
                            transform: "translateY(-50%)",
                            fontSize: "12px"
                        }}
                    >
                        VSTi
                    </div>
                </div>
                <div style={{ position: "relative", width: "70px" }}>
                    <div
                        style={{
                            height: "20px",         // pending auto
                            backgroundColor: "black", // green color
                            alignItems: "center",
                            borderWidth: "0px",
                            borderRadius: "20px",       // match shape
                            
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "11px",
                            transform: "translateY(-50%)",
                            
                            fontSize: "12px"
                        }}
                    >
                        メディア
                    </div>
                </div>
                <div style={{ position: "relative", width: "70px" }}>
                    <div
                        style={{
                            height: "20px",         // pending auto
                            backgroundColor: "black", // green color
                            alignItems: "center",
                            borderWidth: "0px",
                            borderRadius: "20px",       // match shape
                            
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "28px",
                            transform: "translateY(-50%)",
                            
                            fontSize: "12px"
                        }}
                    >
                        CR
                    </div>
                </div>
                <div style={{ position: "relative", width: "70px" }}>
                    <div
                        style={{
                            height: "20px",         // pending auto
                            backgroundColor: "#70767a", // green color
                            alignItems: "center",
                            borderWidth: "0px",
                            borderRadius: "20px",       // match shape
                            
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "10px",
                            transform: "translateY(-50%)",
                            
                            fontSize: "12px"
                        }}
                    >
                        メーター
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center text-start"
                style={{
                    width: "260px",
                    backgroundColor: "#70767a", // green color
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderWidth: "0px",
                    borderRadius: "5px",       // match shape
                }}
            >
                <img
                    src="Right-menu/triangle.png"
                    alt="Play Button"
                    style={{
                        height: "16px",
                        marginRight: "20px"
                    }} // scales arrow within the square
                />
                    Master
            </div>
            <div className="d-flex flex-row align-items-center text-center justify-content-between"
                style={{
                    width: "260px",
                    backgroundColor: "black",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderWidth: "0px",
                    borderRadius: "5px",       // match shape
                    
                }}
            >
                <div>
                    Digital Scale
                </div>
                <div style={{ color: "#70767a" }} >
                    { // change to dynamic later
                }
                    -18 dBFS
                </div>
            </div>
            {// Bottom menu in blank (track-control)
            }
            <div
                style={{
                    width: "260px"
                } }
            >
                <img
                    src="Right-menu/foward.png"
                    alt="Play Button"
                    style={{
                        width: "120px"
                    }} // scales arrow within the square
                />
                <img
                    src="Right-menu/setting.png"
                    alt="Play Button"
                    style={{
                        width: "120px"
                    }} // scales arrow within the square
                />
            </div>
            <div className="d-flex flex-row align-items-center text-center justify-content-between gap-1"
                style={{
                    height: "100%"
                }}
            >
                {/* dynamic later */}
                <div className="d-flex flex-column"
                    style={{
                        width: "50px",
                        height: "100%",         // take all remaining height for meter
                        backgroundColor: "black", // green color
                        alignItems: "center",
                        borderWidth: "0px",
                        padding: "20px",
                        
                    }}
                />
                <div className="d-flex flex-column"
                    style={{
                        width: "50px",
                        height: "100%",         // take all remaining height for meter
                        backgroundColor: "black", // green color
                        alignItems: "center",
                        borderWidth: "0px",
                        padding: "20px",
                        
                    }}
                />
            </div>
            <div className="d-flex flex-row align-items-center text-center justify-content-between"
                style={{
                    width: "260px",
                    backgroundColor: "black",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderWidth: "0px",
                    borderRadius: "5px",       // match shape
                    
                }}
            >
                { // change to dynamic later
                }
                <div>
                    <div className="d-flex flex-column">
                        最大RMS
                    </div>
                    <div>
                        -0.4
                    </div>
                </div>
                <div>                          
                    <div className="d-flex flex-column">
                        最大ピーク
                    </div>
                    <div>
                        -0.1
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div style={{ position: "relative", width: "70px" }}>
                    <div
                        style={{
                            height: "20px",         // pending auto
                            backgroundColor: "black", // green color
                            alignItems: "center",
                            borderWidth: "0px",
                            borderRadius: "20px",       // match shape
                            
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "10px",
                            transform: "translateY(-50%)",
                            
                            fontSize: "12px"
                        }}
                    >
                        マスター
                    </div>
                </div>
                <div style={{ position: "relative", width: "80px" }}>
                    <div
                        style={{
                            height: "20px",         // pending auto
                            backgroundColor: "black", // green color
                            alignItems: "center",
                            borderWidth: "0px",
                            borderRadius: "20px",       // match shape
                            
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "10px",
                            transform: "translateY(-50%)",
                            
                            fontSize: "12px"
                        }}
                    >
                        ラウドネス
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right_menu;
