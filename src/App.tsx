import React from 'react';
import Header from './components/Header';
import DAW from './DAW/DAW';
import './index.css'; // Use Tailwind's CSS instead of App.css
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <h1 className="upper-main" color="#46443f">
                Title
            </h1>
            <DAW />
        </div>
    );
}

export default App;