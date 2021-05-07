import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import RechargeBalance from './RechargeBalance';

const Recharge = () => {

    document.title="Recharge You Balance | Online Help Bd";

    return (
        <div>
          
        <div className="wrapper">
            {/* Navbar*/}
            <Header color='active' />
            {/* Side-Nav*/}
            <Sidebar />
            <div className="content-wrapper">
                {/* Container-fluid starts */}
                {/* Main content starts */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="main-header">
                            <h4>Recharge Request</h4>
                        </div>
                    </div>
                    <RechargeBalance/>

                </div>
            </div>
        </div>
    </div>
    );
};

export default Recharge;