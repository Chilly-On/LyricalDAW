import React from 'react';
import { useState } from "react";
import Track from './Track/Track';
import Right_menu from './Right-menu/Right-menu';
import Footer from './Footer/Footer';
import TextAlive from '../TextAlive/TextAlive';
import '../index.css'; // Use Tailwind's CSS instead of App.css
import 'bootstrap/dist/css/bootstrap.min.css';

function DAW({ player, p5 }) {
    const [isPlaying, setIsPlaying] = useState(false);      // make this global
    const [timePos, setTimePos] = useState(0);

    return ( 
        <div className="d-flex flex-column"   // hard code for width, update later
            style={{
                width: "100vw", 
                height: "100vh",  // hard code for weight, update later,
                position: "relative"
            }}
        >
            <main className="inner-main text-center text-gray-600 d-flex flex-row justify-content-between">
                <Track isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                <Right_menu />
            </main>
            <Footer player={player} isPlaying={isPlaying} setIsPlaying={setIsPlaying} timePos={timePos}/>
            <div id="lyrics"
                style={{                           // set default position for lyrics
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "72px",
                    color: "white",
                    pointerEvents: "none",           // click though
                    zIndex: "3"
                }}>
            </div>
            <TextAlive player={player} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setTimePos={setTimePos} />
            {/* Insert illustration here, in absolute position */ }
        </div>
    );
}

export default DAW;