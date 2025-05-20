import React from 'react';

const Track_pos = () => {
    return (
        <div style={{ position: "relative", width: "200px" }}>
            <img
                src="Footer/track-pos.png"
                width="200px"
                alt="Track Position"
                style={{ display: "block", width: "100%" }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "40px", // left margin
                    transform: "translateY(-50%)",
                    color: "white" // adjust as needed for contrast
                }}
            >
                Track Position
            </div>
        </div>
    );
};

export default Track_pos;
