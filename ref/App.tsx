import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'; // Use Tailwind's CSS instead of App.css
import 'bootstrap/dist/css/bootstrap.min.css';
import KonvaCanvas from './components/KonvaRender';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <h1 className="upper-main" color="#46443f">
                2D Geometry
            </h1>
            <main className="outer-main">
                <div className="inner-main text-center text-gray-600 text-xl">
                    <KonvaCanvas width={window.innerWidth} height={window.innerHeight * 0.6} background_color='#ffffff' />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
