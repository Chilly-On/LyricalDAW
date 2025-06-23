import { useEffect } from "react";
import { Player } from "textalive-app-api";
import Master_volume from "./Master-volume";

type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
    masterVolume: number;
};

interface RightMenuProps {       // for input parameters
    player: Player,
    masterVolume: number,
    setMasterVolume: (n: number) => void
    refs: React.RefObject<PlayerRefs>;
}

const Right_menu: React.FC<RightMenuProps> = ({ player, masterVolume, setMasterVolume, refs }) => {
    useEffect(() => {
        refs.current.masterVolume = masterVolume;
    }, [masterVolume]);

    useEffect(() => {
        let animationId: number;

        const update = () => {
            if (player && player.isPlaying && player.timer) {
                const position = player.timer.position;
                const amp = player.getVocalAmplitude(position); // Vocal amplitude
                const max = player.getMaxVocalAmplitude();      // Max amplitude

                const normalized = (amp && max ? amp / max : 0) * 2;
                setMasterVolume(Math.min(1, normalized));
            }

            animationId = requestAnimationFrame(update);
        };

        update();
        return () => cancelAnimationFrame(animationId);
    }, [player, masterVolume]);

    return (
        <div className="flex-column gap-2 right-menu"
            style={{
                display: "flex",
                width: "300px",
                height: "100%",         // pending auto
                backgroundColor: "#2DA399",
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
                            height: "inherit",
                            width: "100%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
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
                            borderRadius: "20px"       // match shape
                        }}
                    />
                    <div
                        style={{
                            height: "inherit",
                            width: "100%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
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
                            borderRadius: "20px"       // match shape
                        }}
                    />
                    <div
                        style={{
                            height: "inherit",
                            width: "100%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
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
                            backgroundColor: "black", // green color
                            alignItems: "center",
                            borderWidth: "0px",
                            borderRadius: "20px"       // match shape
                        }}
                    />
                    <div
                        style={{
                            height: "inherit",
                            width: "100%",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
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
                    fontSize: "10px"
                }}
            >
                <img
                    src="Right-menu/triangle.png"
                    alt="Play Button"
                    style={{
                        height: "10px",
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
                    fontSize: "10px"
                }}
            >
                <div>
                    Digital Scale
                </div>
                <div style={{ color: "#70767a" 
            }} >
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
            <Master_volume refs={refs} />
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
