import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { userContext } from '../App';

const Header = () => {

    const history = useHistory();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);


    const handleLogOut =()=>{
        sessionStorage.clear();
        setLoggedInUser({})
        history.push('/login')
    }


    return (
        <header className="main-header-top hidden-print">
                <Link to="/deshboard">
                <h2 className="logo">Online Help Bd</h2>
                </Link>
                    <nav className="navbar navbar-static-top">
                       
                        <div className="navbar-custom-menu f-right">
                            <ul className="top-nav">
                                <li className="dropdown notification-menu">
                                    <a href="#!" data-toggle="dropdown" aria-expanded="false" className="dropdown-toggle">
                                        <i className="icon-bell" />
                                        <span className="badge badge-danger header-badge">9</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="not-head">You have <b className="text-primary">4</b> new notifications.</li>
                                        <li className="bell-notification">
                                            <a href="javascript:;" className="media">
                                                <span className="media-left media-icon">
                                                    <img className="img-circle" src="assets/images/avatar-1.png" alt="User Image" />
                                                </span>
                                                <div className="media-body"><span className="block">Lisa sent you a mail</span><span className="text-muted block-time">2min ago</span></div>
                                            </a>
                                        </li>
                                        <li className="bell-notification">
                                            <a href="javascript:;" className="media">
                                                <span className="media-left media-icon">
                                                    <img className="img-circle" src="assets/images/avatar-2.png" alt="User Image" />
                                                </span>
                                                <div className="media-body"><span className="block">Server Not Working</span><span className="text-muted block-time">20min ago</span></div>
                                            </a>
                                        </li>
                                        <li className="bell-notification">
                                            <a href="javascript:;" className="media"><span className="media-left media-icon">
                                                <img className="img-circle" src="assets/images/avatar-3.png" alt="User Image" />
                                            </span>
                                                <div className="media-body"><span className="block">Transaction xyz complete</span><span className="text-muted block-time">3 hours ago</span></div></a>
                                        </li>
                                        <li className="not-footer">
                                            <a href="#!">See all notifications.</a>
                                        </li>
                                    </ul>
                                </li>
                                

                                <li className="pc-rheader-submenu">
                                    <Link to="/recharge">
                                       Recharge Balance
                                    </Link>
                                </li>

                                <li className="pc-rheader-submenu">
                                    <a  className="drop icon-circle" >
                                       Balance:  {loggedInUser.balance}
                                    </a>
                                </li>
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