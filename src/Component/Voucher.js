import React from 'react';
import AddVoucher from './AddVoucher';
import Header from './Header';
import Sidebar from './Sidebar';
import VoucherList from './VouchersList';

const Voucher = () => {
    return (
        <div>
          
        <div className="wrapper">
            {/* Navbar*/}
            <Header />
            {/* Side-Nav*/}
            <Sidebar voucher='active' />
            <div className="content-wrapper">
                {/* Container-fluid starts */}
                {/* Main content starts */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="main-header">
                            <h4>Add New Rate</h4>
                        </div>
                    </div>
                    <AddVoucher />
                    <VoucherList/>

                </div>
            </div>
        </div>
    </div>



    );
};

export default Voucher;