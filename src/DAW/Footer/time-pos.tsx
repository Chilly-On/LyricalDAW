const formatTime = (ms: number): string => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor(ms % 1000);

    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
};
type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
};
interface TimePosProps {       // for input parameters
    refs: React.RefObject<PlayerRefs>;
}

const Time_pos: React.FC<TimePosProps> = ({ refs } ) => {
    return (
        <div className="flex-row align-items-center justify-content-center"
            style={{
                width: "150px",
                height: "25px",
                backgroundColor: "#004F52",
                marginRight: "10px",
                gap: "0px", // ensure no spacing
                border: "3px solid #70767a",
                borderRadius: "5px"
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
                    src="Footer/time-pos.png"
                    alt="Play Button"
                    style={{
                        position: "absolute",
                        left: 5,
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
            >{formatTime(refs.current.timePos)}
            </div>
        </div>
    );
};

export default Time_pos;
