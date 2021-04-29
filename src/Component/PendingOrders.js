import React, { useEffect, useState } from 'react';

const PendingOrders = () => {

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
        <span>Pending Orders</span>
        <h2 className="dashboard-total-products">{users.length}</h2>
        <span className="label label-warning">Order In Process</span>Not Complete
        <div className="side-box">
          <i className="ti-signal text-warning-color" />
        </div>
      </div>
    );
};

export default PendingOrders;