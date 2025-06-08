import React from 'react';
import { useState } from "react";
import Track from './Track/Track';
import Right_menu from './Right-menu/Right-menu';
import Footer from './Footer/Footer';
import TextAlive from '../TextAlive/TextAlive';
import '../index.css'; // Use Tailwind's CSS instead of App.css
import 'bootstrap/dist/css/bootstrap.min.css';
function DAW() {
    const [isPlaying, setIsPlaying] = useState(false);      // make this global
    return ( 
        <div className="d-flex flex-column"   // hard code for width, update later
            style={{
                width: "100vw", 
                height: "100vh"  // hard code for weight, update later
            }}
        >
            <main className="inner-main text-center text-gray-600 d-flex flex-row justify-content-between">
                <Track isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                <Right_menu />
            </main>
            <Footer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            {/*<TextAlive isPlaying={isPlaying} setIsPlaying={setIsPlaying} />*/}
        </div>
    );
}

export default DAW;