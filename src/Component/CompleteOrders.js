import React, { useEffect, useState } from 'react';

const CompleteOrders = () => {

  const [orders, setOrders] = useState([]);



  useEffect(() => {
      fetch('http://localhost:5000/completeorders')
          .then(res => res.json())
          .then(data => {
              setOrders(data);

          })
  }, [])

    return (
        <div className="card dashboard-product">
        <span>Complete Orders</span>
        <h2 className="dashboard-total-products">{orders.length}</h2>
        <span className="label label-warning">Complete</span>Orders
        <div className="side-box">
          <i className="ti-signal text-warning-color" />
        </div>
      </div>
    );
};

export default CompleteOrders;