import React from 'react';
import Header from '../components/Header';
import Footer from './Footer/Footer';
import '../index.css'; // Use Tailwind's CSS instead of App.css
import 'bootstrap/dist/css/bootstrap.min.css';
function DAW() {
    return (
        <div>
            <main className="outer-main">
                <div className="inner-main text-center text-gray-600 text-xl">
                    Content here.
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default DAW;