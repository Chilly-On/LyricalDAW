import React, { useState, useRef } from 'react';
import { Player } from "textalive-app-api";
import Track from './Track/Track';
import Right_menu from './Right-menu/Right-menu';
import Footer from './Footer/Footer';
import TextAlive from '../TextAlive/TextAlive';
import '../index.css'; // Use Tailwind's CSS instead of App.css
import 'bootstrap/dist/css/bootstrap.min.css';
interface DAWProps {       // for input parameters
    player: Player,
}

const DAW: React.FC<DAWProps> = ({ player }) => {
    const [isPlaying, setIsPlaying] = useState(false);      // make this global
    const [timePos, setTimePos] = useState(0);
    const [beatPos, setBeatPos] = useState(0);
    const [beatLeftPos, setBeatLeftPos] = useState(0);
    const [beatRightPos, setBeatRightPos] = useState(0);
    const [masterVolume, setMasterVolume] = useState(0);
    const [repeat, setRepeat] = useState(false);            // whether allow to repeat full songs after playing, or a small area.
    const [leftTime, setLeftTime] = useState(0);            // use to set the time for quick seeking to left for repeat
    const refs = useRef({
        timePos: 0,
        beatPos: 0,
        isPlaying: false,
        repeat: false,
        beatLeftPos: 0,
        beatRightPos: 0,
        masterVolume: 0,
        leftTime: 0,
    });

    const handleClose = () => {
        const instructJP = document.getElementById("instructJP");
        const instructEN = document.getElementById("instructEN");
        if (instructJP) {
            instructJP.style.display = 'none'; // Hide if have popup
        }
        if (instructEN) {
            instructEN.style.display = 'none'; // Hide if have popup
        }
    }
    const handleEN = () => {
        const instructJP = document.getElementById("instructJP");
        const instructEN = document.getElementById("instructEN");
        if (instructJP) {
            instructJP.style.display = 'none'; // Hide if have popup
        }
        if (instructEN) {
            instructEN.style.display = 'flex'; // Hide if have popup
        }
    }
    const handleJP = () => {
        const instructJP = document.getElementById("instructJP");
        const instructEN = document.getElementById("instructEN");
        if (instructJP) {
            instructJP.style.display = 'flex'; // Hide if have popup
        }
        if (instructEN) {
            instructEN.style.display = 'none'; // Hide if have popup
        }
    }

    return ( 
        <div className="d-flex flex-column"   // hard code for width, update later
            style={{
                width: "100vw", 
                height: "100vh",  // hard code for weight, update later,
                position: "relative"
            }}
        >
            <main className="inner-main text-center text-gray-600 d-flex flex-row justify-content-between">
                <Track player={player}
                    isPlaying={isPlaying}
                    timePos={timePos} setTimePos={setTimePos}
                    beatPos={beatPos} setBeatPos={setBeatPos}
                    beatLeftPos={beatLeftPos} setBeatLeftPos={setBeatLeftPos}
                    beatRightPos={beatRightPos} setBeatRightPos={setBeatRightPos}
                    leftTime={leftTime} setLeftTime={setLeftTime}
                    refs={refs}
                />
                <Right_menu player={player}
                    masterVolume={masterVolume} setMasterVolume={setMasterVolume}
                    refs={refs}
                />
            </main>
            <Footer player={player} isPlaying={isPlaying} setIsPlaying={setIsPlaying}
                timePos={timePos}
                beatPos={beatPos}
                beatLeftPos={beatLeftPos} setBeatLeftPos={setBeatLeftPos}
                beatRightPos={beatRightPos} setBeatRightPos={setBeatRightPos}
                refs={refs} repeat={repeat} setRepeat={setRepeat}
            />
            <div id="lyrics"
                style={{                           // set default position for lyrics
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "72px",
                    color: "white",
                    pointerEvents: "none",           // click though
                    zIndex: "2"
                }}>
            </div>
            <div className="justify-content-center align-items-center"
                id="overlay"
                style={{                           // set default position for lyrics
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#70767a80",
                    zIndex: "3"
                }}>
                <img 
                    src="logo.png"
                    alt="Logo layer"
                    style={{                           // set default position for lyrics

                    }}
                >
                </img>
            </div>
            <div
                className="justify-content-center align-items-center"
                id="instructJP"
                style={{                           // set default position for lyrics
                    display: "none",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#70767a80",
                    zIndex: "3"
                }}>
                <div
                    style={{                           // set default position for lyrics
                        position: "relative"
                    }}>
                    <img
                        src="helpJP.png"
                        alt="Logo layer"
                        style={{                           // set default position for lyrics
                            height: "700px"
                        }}
                    >
                    </img>
                    <div className="d-flex flex-row align-items-center text-center justify-content-between"
                        style={{
                            position: "absolute",
                            left: "10%",
                            bottom: "10%",
                            width: "470px",
                            height: "80px",
                            borderWidth: "0px",
                            paddingLeft: "10px",
                            fontSize: "32px",
                        }}>
                        <button
                            onClick={handleClose}
                            style={{
                                width: "200px",
                                height: "inherit",
                                position: "relative",
                                backgroundColor: "#15c18d",
                                borderWidth: "0px",
                                borderRadius: "30px",
                            }}>
                            <div className="text-center"
                                style={{                           // set default position for lyrics
                                    width: "inherit",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white"
                                }}
                            >閉じる</div>
                        </button>
                        <button
                            onClick={handleEN}
                            style={{
                                width: "200px",
                                height: "inherit",
                                position: "relative",
                                backgroundColor: "#15c173",
                                borderWidth: "0px",
                                borderRadius: "30px",
                            }}>
                            <div className="text-center"
                                style={{                           // set default position for lyrics
                                    width: "inherit",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white"
                                }}
                            >English</div>
                        </button>
                    </div>
                </div>


            </div>
            <div
                className="justify-content-center align-items-center"
                id="instructEN"
                style={{                           // set default position for lyrics
                    display: "none",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#70767a80",
                    zIndex: "3"
                }}>
                <div
                    style={{                           // set default position for lyrics
                        position: "relative"
                    }}>
                    <img
                        src="helpEN.png"
                        alt="Logo layer"
                        style={{                           // set default position for lyrics
                            height: "700px"
                        }}
                    >
                    </img>
                    <div className="d-flex flex-row align-items-center text-center justify-content-between"
                        style={{
                            position: "absolute",
                            left: "10%",
                            bottom: "10%",
                            width: "470px",
                            height: "80px",
                            borderWidth: "0px",
                            paddingLeft: "10px",
                            fontSize: "32px",
                        }}>
                        <button
                            onClick={handleClose}
                            style={{
                                width: "200px",
                                height: "inherit",
                                position: "relative",
                                backgroundColor: "#15c18d",
                                borderWidth: "0px",
                                borderRadius: "30px",
                            }}>
                            <div className="text-center"
                                style={{                           // set default position for lyrics
                                    width: "inherit",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white"
                                }}
                            >Close</div>
                        </button>
                        <button
                            onClick={handleJP}
                            style={{
                                width: "200px",
                                height: "inherit",
                                position: "relative",
                                backgroundColor: "#15c173",
                                borderWidth: "0px",
                                borderRadius: "30px",
                            }}>
                            <div className="text-center"
                                style={{                           // set default position for lyrics
                                    width: "inherit",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white"
                                }}
                            >日本語</div>
                        </button>
                    </div>
                </div>


            </div>
            <TextAlive player={player}
                timePos={timePos} setTimePos={setTimePos}
                beatPos={beatPos} setBeatPos={setBeatPos}
                refs={refs}
                masterVolume={masterVolume} setMasterVolume={setMasterVolume}
            />
            {/* Insert illustration here, in absolute position */ }
        </div>
    );
}

export default DAW;