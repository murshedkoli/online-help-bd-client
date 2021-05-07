import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const NotFoundPage = () => {
    return (
        <div>
          
        <div className="wrapper">
            {/* Navbar*/}
            <Header />
            {/* Side-Nav*/}
            <Sidebar />
            <div className="content-wrapper">
                {/* Container-fluid starts */}
                {/* Main content starts */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="main-header">
                            <h4>Order Form</h4>
                        </div>
                    </div>
                  

                </div>
            </div>
        </div>
    </div>

    );
};

export default NotFoundPage;