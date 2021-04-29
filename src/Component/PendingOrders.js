import React, { useEffect, useState } from 'react';

const PendingOrders = () => {

  const [orders, setOrders] = useState([]);



  useEffect(() => {
      fetch('http://localhost:5000/pendingorders')
          .then(res => res.json())
          .then(data => {
              setOrders(data);

          })
  }, [])

    return (
        <div className="card dashboard-product">
        <span>Pending Orders</span>
        <h2 className="dashboard-total-products">{orders.length}</h2>
        <span className="label label-warning">Order In Process</span>Not Complete
        <div className="side-box">
          <i className="ti-signal text-warning-color" />
        </div>
      </div>
    );
};

export default PendingOrders;