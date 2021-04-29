import React, { useEffect, useState } from 'react';

const CompleteOrders = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
          .then(res => res.json())
          .then(data => {
            setUsers(data)
    
          })
      },[] )

    return (
        <div className="card dashboard-product">
        <span>Complete Orders</span>
        <h2 className="dashboard-total-products">{users.length}</h2>
        <span className="label label-warning">Complete</span>Orders
        <div className="side-box">
          <i className="ti-signal text-warning-color" />
        </div>
      </div>
    );
};

export default CompleteOrders;