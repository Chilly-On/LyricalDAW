const formatBeat = (beat: number): string => {
    const index = Math.floor(beat / 4) + 1;      // first beat index is 1
    const fullBeat = Math.floor(beat % 4);
    const quarterBeat = Math.floor(beat * 4 % 4);
    const microBeat = Math.floor(beat * 1024 % 256);

    return `${index.toString()}.   ${fullBeat.toString()}.   ${quarterBeat.toString()}.
    ${microBeat.toString().padStart(3, '0')}.`;
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
interface TrackRightProps {       // for input parameters
    refs: React.RefObject<PlayerRefs>;
}

const Track_right: React.FC<TrackRightProps> = ({ refs }) => {
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
                    src="Footer/track-right.png"
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
            >  {formatBeat(refs.current.beatRightPos)}
            </div>
        </div>
    );
};

export default Track_right;
