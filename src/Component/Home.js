import React from 'react';
import Header from './Header';
import HomeContent from './HomeContent';
import Sidebar from './Sidebar';

const Home = () => {
    return (


        <div>
            
            <div className="wrapper">
                {/* Navbar*/}
                <Header/>
                {/* Side-Nav*/}
                <Sidebar deshboard='active' />
                <HomeContent/>
            </div>
        </div>

    );
};

export default Home;