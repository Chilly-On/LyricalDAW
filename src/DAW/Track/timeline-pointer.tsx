type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
};
interface TimelinePointerProps {       // for input parameters
    refs: React.RefObject<PlayerRefs>;
    timelineHeight: number;
    timeWidth: number;
}

const Timeline_pointer: React.FC<TimelinePointerProps> = ({ refs, timelineHeight, timeWidth }) => {
    // Calculate the pointer position in the grid
    const calcPointerPos = (beat: number) => {
        return beat * timeWidth;
    }

    return (
        <div
            style={{
                width: "3px",
                height: timelineHeight,         // change to dynamic to match the number of girds (real tracks)
                backgroundColor: "black", // green color
                position: "absolute",
                top: 0,
                left: calcPointerPos(refs.current.beatPos),               // Adjust timeline pointer's position here
                alignItems: "center",
                borderWidth: "0px",
                pointerEvents: "none",           // click though
                zIndex: 2
            }}
        />
    );
};

export default Timeline_pointer;