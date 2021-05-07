import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../App';

const Sidebar = ({voucher, deshboard, neworder, user, allorders, recharge}) => {
    
    const [loggedInUser] = useContext(userContext)


    return (
        <aside className="main-sidebar hidden-print ">
                    <section className="sidebar" id="sidebar-scroll">
                        <ul className="sidebar-menu">
                            <li  className={`treeview ${deshboard}`}>
                                <Link to="/">
                                <a className="waves-effect waves-dark">
                                    <i className="icon-speedometer" /><span> Dashboard</span>
                                </a>
                                </Link>
                            </li>
                     
                            <li   className={`treeview ${neworder}`}>
                               <Link  to="/neworder"> 
                               <a  className="waves-effect waves-dark" >
                                    <i className="icon-plus" /><span> Place Order</span>
                                </a>
                                </Link>
                            </li>

                            <li className={`treeview ${user}`}>
                                <Link>
                                <a className="waves-effect waves-dark" >
                                    <i className="icon-plus" /><span> Add User</span>
                                </a>
                                </Link>
                            </li>

                            <li className={`treeview ${allorders}`}>
                                <Link>
                                <a className="waves-effect waves-dark" >
                                    <i className="icon-list" /><span> All Orders</span>
                                </a>
                                </Link>
                            </li>

                            <li className={`treeview ${recharge}`}>
                                <Link to="/update-recharge">
                                <a className="waves-effect waves-dark" >
                                    {
                                        loggedInUser.isAdmin ? <div><i className="icon-list" /><span> Recharge Order</span></div> : <div><i className="icon-list" /><span> Recharge History</span></div>
                                    }
                                </a>
                                </Link>
                            </li>
                          {
                              loggedInUser.isAdmin &&   <li className={`treeview ${voucher}`}>
                              <Link to="/addvoucher">
                              <a className="waves-effect waves-dark" >
                                  <i className="icon-list" /><span> Vouchers</span>
                                  
                              </a>
                              
                              </Link>
                          </li>
                          }
                                                   
                        </ul>
                    </section>
                </aside>
    );
};

export default Sidebar;