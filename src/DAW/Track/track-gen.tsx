import React from "react";

interface TrackGenProps {       // for input parameters
    width?: string;
    widthHead?: string;
    color: string;
    icon: string;
    id?: number | string;
    name: string;
    borderTop?: number;
}

const Track_gen: React.FC<TrackGenProps> = ({ width = "380px", widthHead = "50px", color, icon, id, name, borderTop = 0 }) => { // add parameters
    const trackStyle: React.CSSProperties = {   // modify track style
        width: width,
        ...(borderTop === 1 && {border: "1px solid #737579"})       // add ... to mark that this is conditional
    };

    return (
        <div
            className="d-flex flex-row align-items-center track"
            style={trackStyle}
        >
            <div
                className="d-flex align-items-end justify-content-between track-serial"
                style={{
                    width: widthHead,
                    backgroundColor: color
                }}
            >
                <img
                    src={icon}
                    alt="Timeline"
                    className="track-icon"
                />
                <div>
                    <div
                        style={{
                            fontSize: "14px",
                            color: "black"
                        }}
                    >
                        {id}
                    </div>
                </div>
            </div>

            <div className="d-flex flex-row fw-bold">
                <button className="mute-track">m</button>
                <button className="stop-track">s</button>
            </div>

            <div
                className="d-flex"
                style={{
                    borderWidth: "0px",
                    gap: "10px"
                }}
            >
                {name}
            </div>
        </div>
    );
};

export default Track_gen;