import React, { useContext } from 'react';
import { userContext } from '../App';
import CompleteOrders from './CompleteOrders';
import PendingOrders from './PendingOrders';
import SingleOrders from './PlaceOrder/SingleOrders';
import TotalOrders from './TotalOrders';
import UserCount from './UserCount';

const HomeContent = () => {

  const [loggedInUser] = useContext(userContext);

  return (
    <div className="content-wrapper">
      {/* Container-fluid starts */}
      {/* Main content starts */}
      <div className="container-fluid">
        <div className="row">
          <div className="main-header">
            <h4>Dashboard</h4>
          </div>
        </div>
        {/* 4-blocks row start */}
        <div className="row dashboard-header">
          <div className="col-lg-3 col-md-6">
            <PendingOrders />
          </div>
          <div className="col-lg-3 col-md-6">
            <TotalOrders />
          </div>
          <div className="col-lg-3 col-md-6">
            <CompleteOrders />
          </div>
          <div className="col-lg-3 col-md-6">
            {loggedInUser.isAdmin && <UserCount />}
          </div>
        </div>

        <SingleOrders />
       

      </div>
    </div>

  );
};

export default HomeContent;