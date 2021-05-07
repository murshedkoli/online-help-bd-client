import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SingleUser from './SingleUser';

const UserList = () => {
    return (
        <div>
          
            <div className="wrapper">
                {/* Navbar*/}
                <Header />
                {/* Side-Nav*/}
                <Sidebar user='active' />
                <div className="content-wrapper">
                    {/* Container-fluid starts */}
                    {/* Main content starts */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="main-header">
                                <h4>Order Form</h4>
                            </div>
                        </div>
                        <SingleUser/>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserList;