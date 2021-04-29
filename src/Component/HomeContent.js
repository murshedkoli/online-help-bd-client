import React from 'react';
import CompleteOrders from './CompleteOrders';
import PendingOrders from './PendingOrders';
import SingleUser from './SingleUser';
import TotalOrders from './TotalOrders';
import UserCount from './UserCount';
import Users from './Users';

const HomeContent = () => {
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
      <PendingOrders/>
      </div>
      <div className="col-lg-3 col-md-6">
      <TotalOrders/>
      </div>
      <div className="col-lg-3 col-md-6">
        <CompleteOrders/>
      </div>
      <div className="col-lg-3 col-md-6">
        <UserCount/>
      </div>
    </div>
    {/* 4-blocks row end */}
    {/* 1-3-block row start */}
    <SingleUser/>
    
  </div>
</div>

    );
};

export default HomeContent;