import React from 'react';
import Header from './components/Header';
import DAW from './DAW/DAW';
import './index.css'; // Use Tailwind's CSS instead of App.css
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <div className="flex flex-col">
            <DAW />
        </div>
    );
}

export default App;