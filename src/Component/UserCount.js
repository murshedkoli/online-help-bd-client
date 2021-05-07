import React, { useEffect, useState } from 'react';

const UserCount = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://onlinehelpbd.herokuapp.com/users')
          .then(res => res.json())
          .then(data => {
            setUsers(data)
    
          })
      },[] )

    return (
        <div className="card dashboard-product">
        <span>Users</span>
        <h2 className="dashboard-total-products">{users.length}</h2>
        <span className="label label-warning">Users</span>Total Registered
        <div className="side-box">
          <i className="ti-signal text-warning-color" />
        </div>
      </div>
    );
};

export default UserCount;