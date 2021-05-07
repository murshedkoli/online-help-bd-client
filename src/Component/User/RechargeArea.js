import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import SingleRecharge from './SingleRecharge';

const RechargeArea = () => {
    document.title="Recharge History | Online Help Bd";
    return (
        <div>
          
        <div className="wrapper">
            {/* Navbar*/}
            <Header />
            {/* Side-Nav*/}
            <Sidebar  recharge='active' />
            <div className="content-wrapper">
                {/* Container-fluid starts */}
                {/* Main content starts */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="main-header">
                            <h4>Recharge Request</h4>
                        </div>
                    </div>
                    <SingleRecharge/>

                </div>
            </div>
        </div>
    </div>
    );
};

export default RechargeArea;