import React from 'react';
import Header from '../components/Header';
import Track from './Track/Track';
import Right_menu from './Right-menu/Right-menu';
import Footer from './Footer/Footer';
import '../index.css'; // Use Tailwind's CSS instead of App.css
import 'bootstrap/dist/css/bootstrap.min.css';
function DAW() {
    return (
        <div>
            <main className="inner-main text-center text-gray-600 text-xl d-flex flex-row justify-content-between"
                style={{
                    height: "95vh"  // hard code for weight, update later
                } }
            >
                <Track />
                <Right_menu />
            </main>
            <Footer />
        </div>
    );
}

export default DAW;