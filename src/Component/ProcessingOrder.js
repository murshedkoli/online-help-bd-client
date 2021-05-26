import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../App';

const ProcessingOrders = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser] = useContext(userContext);

    useEffect(() => {
        fetch('https://onlinehelpbd.herokuapp.com/processing?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data)

            })
    }, [loggedInUser.email])

    return (
        <div className="card dashboard-product">
            <span>Order in Process</span>
            <h2 className="dashboard-total-products">{orders.length}</h2>
            <span className="label label-warning">Processing Order</span>
            <div className="side-box">
                <i className="ti-signal text-warning-color" />
            </div>
        </div>
    );
};

export default ProcessingOrders;