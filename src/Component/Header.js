import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { userContext } from '../App';
import './Header.css';

const Header = () => {

    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [orders, setOrders] = useState([]);




    useEffect(() => {
        fetch('https://onlinehelpbd.herokuapp.com/pendingorders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data);

            })
    }, [loggedInUser.email])

    const handleLogOut = () => {
        sessionStorage.clear();
        setLoggedInUser({})
        history.push('/login')
    }


    const addbalance = () => {


        const paymentData = {
            amount: 500,
            transaction_id: 'asldkjf;laskdjf',
            success_url: 'onlinehelpbd.cf',
            fail_url: 'onlinehelpbd.cf/fail',
            customer_name: 'murshed',
            customer_mobile: '01781981486',
            purpose: 'online payment',
            payment_details: ''
        }

        fetch('https://api.sheba.xyz/v1/ecom-payment/initiate', {
            method: "POST",
            headers: {
                'client-id': '887424432',
                'client-secret': 'sLA8bbzff7IMfT69JJlHb7QmQ06AgrmnJ9pBt9UenTblQ8QC9HV4FmvQt4iDJn0qvBJvYZPEQNayGCnY5oDkkkgqMfPFbvst810zPOwTq6VD7RRAStPN6MW6',
                'Accept': 'application/json'
            },
            body: JSON.stringify(paymentData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (
        <header className="main-header-top hidden-print">
            <Link to="/deshboard">
                <h2 className="logo">Online Help Bd</h2>
            </Link>
            <a href="#!" data-toggle="dropdown" aria-expanded="false" >
                <i className="icon-menu logo" style={{ color: 'white', fontSize: '20px', backgroundColor: '#39444e' }} />

            </a>
            <ul className="dropdown-menu" style={{ width: '100%', }}>
                {/* <li className="not-head">You have <b className="text-primary">4</b> new notifications.</li> */}

                <li className="not-footer link ">
                    <a >
                        <span><img className="img-circle " src={loggedInUser.imgUrl} style={{ width: 40 }} alt="User Image" /></span>
                        <span> <b>{loggedInUser.name}</b> </span>
                    </a>
                </li>

                <li className="not-footer  ">
                    <Link className="Link" to="/">
                        <a className="waves-effect waves-dark mobilemenuli">
                            <i style={{ marginLeft: '30px' }} className="icon-speedometer" /> <span>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li className="not-footer ">
                    <Link className="Link" to="/neworder">
                        <a className="waves-effect waves-dark mobilemenuli" >
                            <i style={{ marginLeft: '30px' }} className="icon-plus" /><span> Place Order</span>
                        </a>
                    </Link>
                </li>
                {
                    loggedInUser.isAdmin && <li className="not-footer ">
                        <Link className="Link" to="/users">
                            <a className="waves-effect waves-dark mobilemenuli" >
                                <i style={{ marginLeft: '30px' }} className="icon-plus" /><span> Users</span>
                            </a>
                        </Link>
                    </li>
                }

                <li className="not-footer ">
                    <Link className="Link" to="/recharge">
                        <a className="waves-effect waves-dark mobilemenuli" >
                            <i style={{ marginLeft: '30px' }} className="icon-plus" /><span> Recharge Balance</span>
                        </a>
                    </Link>
                </li>

                <li className="not-footer ">
                    <Link className="Link" to="/update-recharge">
                        <a className="waves-effect waves-dark mobilemenuli" >
                            {
                                loggedInUser.isAdmin ? <div><i style={{ marginLeft: '30px' }} className="icon-list" /><span> Recharge Order</span></div> : <div><i className="icon-list" /><span> Recharge History</span></div>
                            }
                        </a>
                    </Link>

                </li>


                {
                    loggedInUser.isAdmin && <li className="not-footer ">
                        <Link className="Link" to="/addvoucher">
                            <a className="waves-effect waves-dark mobilemenuli" >
                                <i style={{ marginLeft: '30px' }} className="icon-list" /><span> Vouchers</span>
                            </a>

                        </Link>
                    </li>
                }
                <li className="not-footer">
                    <li onClick={handleLogOut} ><a style={{ margin: '50px' }} ><i className="icon-logout" /> Logout</a></li>
                </li>
            </ul>
            <nav className="navbar navbar-static-top ">

                <div className="navbar-custom-menu f-right">
                    <ul className="top-nav">
                        <li className=" notification-menu">
                            <a href="#!" data-toggle="dropdown" aria-expanded="false" className="dropdown-toggle">
                                <i className="icon-bell" />  Balance : {loggedInUser.balance}
                                <span className="badge badge-danger header-badge">{orders.length}</span>
                            </a>

                        </li>

                        <li><button onClick={addbalance}>Add balance</button></li>

                        <li className="pc-rheader-submenu">
                            <Link to="/recharge">
                                Recharge Balance
                                    </Link>
                        </li>

                        {/* <li className="pc-rheader-submenu">
                            <a className="drop icon-circle" >
                                Balance:  {loggedInUser.balance}
                            </a>
                        </li> */}
                        {/* User Menu*/}
                        <li className="dropdown">
                            <a href="#!" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle drop icon-circle drop-image">
                                <span><img className="img-circle " src={loggedInUser.imgUrl} style={{ width: 40 }} alt="User Image" /></span>
                                <span> <b>{loggedInUser.name}</b> <i className=" icofont icofont-simple-down" /></span>
                            </a>
                            <ul className="dropdown-menu settings-menu">
                                <li><a href="#!"><i className="icon-settings" /> Settings</a></li>
                                <Link to="/profile"><li><a ><i className="icon-user" /> Profile</a></li></Link>
                                <li><a href="#"><i className="icon-envelope-open" /> My Messages</a></li>
                                <li className="p-0">
                                    <div className="dropdown-divider m-0" />
                                </li>
                                <li><a href="#"><i className="icon-lock" /> Lock Screen</a></li>
                                <li onClick={handleLogOut} ><a ><i className="icon-logout" /> Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    );
};

export default Header;