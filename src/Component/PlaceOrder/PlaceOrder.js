import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import OrderForm from './OrderForm';

const PlaceOrder = () => {
    return (


        <div>
          
            <div className="wrapper">
                {/* Navbar*/}
                <Header />
                {/* Side-Nav*/}
                <Sidebar neworder='active' />
                <div className="content-wrapper">
                    {/* Container-fluid starts */}
                    {/* Main content starts */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="main-header">
                                <h4>Order Form</h4>
                            </div>
                        </div>
                        <OrderForm />

                    </div>
                </div>
            </div>
        </div>




    );
};

export default PlaceOrder;