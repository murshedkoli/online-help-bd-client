import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="main-sidebar hidden-print ">
                    <section className="sidebar" id="sidebar-scroll">
                        <ul className="sidebar-menu">
                            <li className="active treeview">
                                <Link to="/">
                                <a className="waves-effect waves-dark">
                                    <i className="icon-speedometer" /><span> Dashboard</span>
                                </a>
                                </Link>
                            </li>
                     
                            <li className="treeview">
                               <Link to="/neworder"> 
                               <a className="waves-effect waves-dark" >
                                    <i className="icon-plus" /><span> Place Order</span>
                                </a>
                                </Link>
                            </li>

                            <li className="treeview">
                                <Link>
                                <a className="waves-effect waves-dark" href="basic-table.html">
                                    <i className="icon-plus" /><span> Add User</span>
                                </a>
                                </Link>
                            </li>

                            <li className="treeview">
                                <Link>
                                <a className="waves-effect waves-dark" href="basic-table.html">
                                    <i className="icon-list" /><span> All Orders</span>
                                </a>
                                </Link>
                            </li>
                                                   
                        </ul>
                    </section>
                </aside>
    );
};

export default Sidebar;