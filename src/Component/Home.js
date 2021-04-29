import React from 'react';
import Header from './Header';
import HomeContent from './HomeContent';
import Sidebar from './Sidebar';

const Home = () => {
    return (


        <div>
            <div className="loader-bg">
                <div className="loader-bar">
                </div>
            </div>
            <div className="wrapper">
                {/* Navbar*/}
                <Header/>
                {/* Side-Nav*/}
                <Sidebar/>
                <HomeContent/>
            </div>
        </div>

    );
};

export default Home;