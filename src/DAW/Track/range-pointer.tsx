type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
};
interface RangePointerProps {       // for input parameters
    refs: React.RefObject<PlayerRefs>;
    timelineHeight: number;
    beatPos: number;
    timeWidth: number;
}

const Range_pointer: React.FC<RangePointerProps> = ({ refs, timelineHeight, timeWidth }) => {
    // Calculate the pointer position in the grid
    const calcPointerPos = (beat: number) => {
        return beat * timeWidth;
    }

    // Calculate the width of selection range in the grid
    const calcSelectedRange = (r1: number, r2: number) => {
        return (r2 - r1) * timeWidth;
    }

    return (
        <div
            style={{
                display: refs.current.beatLeftPos !== refs.current.beatRightPos ? "block" : "none",     // Only display when set range 
                width: `${calcSelectedRange(refs.current.beatLeftPos, refs.current.beatRightPos)}px`,
                height: timelineHeight,         // Change to dynamic to match the number of girds (real tracks)
                backgroundColor: refs.current.repeat ? "#8f83f280" : "#70767a80", // Change color when repeat
                position: "absolute",
                top: 0,
                left: calcPointerPos(refs.current.beatLeftPos),               // Adjust timeline pointer's position here
                alignItems: "center",
                borderWidth: "0px",
                pointerEvents: "none",           // click though
                zIndex: 2
            }}
        />
    );
};

export default Range_pointer;