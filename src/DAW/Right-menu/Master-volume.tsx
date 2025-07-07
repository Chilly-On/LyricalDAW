type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
    masterVolume: number; // Add master volume to refs
};
interface TrackRightProps {       // for input parameters
    refs: React.RefObject<PlayerRefs>;
}

const Master_volume: React.FC<TrackRightProps> = ({ refs }) => {
    return (
        <div className="d-flex flex-row align-items-center text-center justify-content-between gap-1"
            style={{
                height: "100%"
            }}
        >
            {/* Left ruler */}
            <div className="d-flex flex-column text-right justify-content-between align-items-end"
                style={{
                    height: "100%"
                }}
            >
                <div className="ruler">0  --</div>
                <div className="ruler">  -</div>
                <div className="ruler">  -</div>
                <div className="ruler">5  --</div>
                <div className="ruler">  -</div>
                <div className="ruler">  -</div>
                <div className="ruler">10  --</div>
                <div className="ruler">  -</div>
                <div className="ruler">  -</div>
                <div className="ruler">15  --</div>
                <div className="ruler">  -</div>
                <div className="ruler">  -</div>
                <div className="ruler">20  --</div>
                <div className="ruler">  -</div>
                <div className="ruler">25  --</div>
                <div className="ruler">  -</div>
                <div className="ruler">30  --</div>
                <div className="ruler">  -</div>
                <div className="ruler">35  --</div>
                <div className="ruler">  -</div>
                <div className="ruler">40  --</div>
                <div className="ruler">  </div>
                <div className="ruler">  -</div>
                <div className="ruler">50  --</div>
                <div className="ruler">  </div>
                <div className="ruler">60  --</div>
            </div>
            {/* Master meter */}
            <div className="d-flex flex-column align-items-center"
                style={{
                    position: "relative",
                    width: "50px",
                    height: "100%",         // take all remaining height for meter
                    backgroundColor: "black", // green color
                    borderWidth: "0px",
                    padding: "20px",
                }}
            >
                <div className="d-flex flex-column align-items-center"
                    style={{
                        position: "absolute",
                        bottom: 0,
                        width: "50px",
                        height: `${refs.current.isPlaying ? refs.current.masterVolume * 100 : 0}%`,         // Display progress.
                        backgroundColor: refs.current.isPlaying ? "#99f4e9" : "inherit",
                        borderWidth: "0px",
                        padding: "20px",

                    }}
                />
            </div>
            <div className="d-flex flex-column align-items-center"
                style={{
                    position: "relative",
                    width: "50px",
                    height: "100%",         // take all remaining height for meter
                    backgroundColor: "black",
                    borderWidth: "0px",
                    padding: "20px"
                }}
            >
                <div className="d-flex flex-column align-items-center"
                    style={{
                        position: "absolute",
                        bottom: 0,
                        width: "50px",
                        height: `${refs.current.isPlaying ? refs.current.masterVolume * 100 : 0}%`,         // Display progress.
                        backgroundColor: refs.current.isPlaying ? "#99f4e9" : "inherit",
                        borderWidth: "0px",
                        padding: "20px",

                    }}
                />
            </div>
            {/* Right ruler */}
            <div className="d-flex flex-column text-left justify-content-between align-items-start"
                style={{
                    height: "100%"
                }}
            >
                <div className="ruler">--  0</div>
                <div className="ruler">-  </div>
                <div className="ruler">-  </div>
                <div className="ruler">--  5</div>
                <div className="ruler">-  </div>
                <div className="ruler">-  </div>
                <div className="ruler">--  10</div>
                <div className="ruler">-  </div>
                <div className="ruler">-  </div>
                <div className="ruler">--  15</div>
                <div className="ruler">-  </div>
                <div className="ruler">-  </div>
                <div className="ruler">--  20</div>
                <div className="ruler">-  </div>
                <div className="ruler">--  25</div>
                <div className="ruler">-  </div>
                <div className="ruler">--  30</div>
                <div className="ruler">-  </div>
                <div className="ruler">--  35</div>
                <div className="ruler">-  </div>
                <div className="ruler">--  40</div>
                <div className="ruler">  </div>
                <div className="ruler">-  </div>
                <div className="ruler">--  50</div>
                <div className="ruler">  </div>
                <div className="ruler">--  60</div>
            </div>
        </div>
    );
};

export default Master_volume;
