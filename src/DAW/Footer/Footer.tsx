import Track_left from './track-left';
import Track_right from './track-right';
import Track_pos from './track-pos';
import Time_pos from './time-pos';
import Bpm from './bpm';
import To_start from './to-start';
import To_end from './to-end';
import Prev from './prev';
import Next from './next';
import Return from './return';
import Stop from './stop';
import Play from './play';
import Record from './record';

const Footer = () => {
    // Bottom menu in blank (track-control)
    return (
        <footer className="d-flex flex-row align-items-center text-center justify-content-between"
            style={{
                height: "5vh"
            } }
        >
            <Track_left />
            <Track_right />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "10px",
                        gap: "0px", // ensure no spacing
                    }}
                >
                    <To_start />
                    <To_end />
                    <Prev />
                    <Next />
                    <Return />
                    <Stop/>
                    <Play />
                    <Record />
                </div>
                <button
                    style={{
                        backgroundColor: "#2f3135",
                        borderWidth: "0px",
                        padding: "0px"
                    }}>
                    <img
                        src="Footer/moon.png"
                        alt="Play Button"
                        style={{ height: "25px" }} // scales arrow within the square
                    />
                </button>
            </div>


            <Track_pos />
            <Time_pos />
            <Bpm />
        </footer>
    );
};

export default Footer;
