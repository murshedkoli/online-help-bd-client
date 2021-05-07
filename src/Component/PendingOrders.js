import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../App';

const PendingOrders = () => {

  const [orders, setOrders] = useState([]);
  const [loggedInUser] = useContext(userContext);



  useEffect(() => {
      fetch('https://onlinehelpbd.herokuapp.com/pendingorders?email='+loggedInUser.email)
          .then(res => res.json())
          .then(data => {
              setOrders(data);

          })
  }, [loggedInUser.email])

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