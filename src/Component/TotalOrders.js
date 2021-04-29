import React, { useEffect, useState } from 'react';

const TotalOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
          .then(res => res.json())
          .then(data => {
            setOrders(data)
    
          })
      },[] )

    return (
        <div className="card dashboard-product">
        <span>Total Orders</span>
        <h2 className="dashboard-total-products">{orders.length}</h2>
        <span className="label label-warning">Total Orders</span>From Start
        <div className="side-box">
          <i className="ti-signal text-warning-color" />
        </div>
      </div>
    );
};

export default TotalOrders;