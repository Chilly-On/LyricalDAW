import React from 'react';

const Header = () => {
    return (
        // <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        // Replace Contact with option
        <header className="flex items-center">
            <div className="logo">
                <img src="image/Menu.svg" alt="Menu" className="menu-icon"/>
                <span><a href="index.php">
                    <button className="btn">
                        <div className="font-bold text-lg">SAMPLE PAGE</div>
                    </button>
                </a></span>
            </div>
            <div className="search-wrapper">
                <input type="text" id="search" placeholder="Search project..."
                    className="border border-gray-300 px-3 py-1 rounded-full w-52 text-sm focus:outline-none"/>
                <div id="results"></div>
            </div>
            <nav>
                <ul className="flex items-center">
                    <li><span><a href='index.php?page=login'>
                        <button className='btn'>Login/Signup</button>
                    </a></span></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
