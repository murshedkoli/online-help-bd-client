import React, { useContext } from 'react';
import { userContext } from '../../App';
import Header from '../Header';
import Sidebar from '../Sidebar';

const UserProfile = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);



    return (


        <div>
            <div className="loader-bg">
                <div className="loader-bar">
                </div>
            </div>
            <div className="wrapper">
                {/* Navbar*/}
                <Header />
                {/* Side-Nav*/}
                <Sidebar />

                <div className="content-wrapper">
                    {/* Container-fluid starts */}
                    {/* Main content starts */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="main-header">
                                <h4>Profile</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="user-block-2">
                                        <img className="img-fluid" src={loggedInUser.imgUrl} alt="user-header" />
                                        <h5>{loggedInUser.name} </h5>
                                        <h6>Uddokta</h6>
                                    </div>
                                    <div className="card-block">
                                        <div className="user-block-2-activities">
                                            <div className="user-block-2-active">
                                                <i className="icofont icofont-clock-time" /> Pending Order
                                         <label className="label label-primary">480</label>
                                            </div>
                                        </div>
                                        <div className="user-block-2-activities">
                                            <div className="user-block-2-active">
                                                <i className="icofont icofont-users" /> Complete Order
                                         <label className="label label-primary">390</label>
                                            </div>
                                        </div>
                                        <div className="user-block-2-activities">
                                            <div className="user-block-2-active">
                                                <i className="icofont icofont-ui-user" /> Balance
                                             <label className="label label-primary">{loggedInUser.balance} </label>
                                            </div>
                                        </div>
                                        <div className="user-block-2-activities">
                                            <div className="user-block-2-active">
                                                <i className="icofont icofont-picture" /> Pictures
                <label className="label label-primary">506</label>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-warning waves-effect waves-light text-uppercase m-r-30">
                                                Follows
              </button>
                                            <button type="button" className="btn btn-primary waves-effect waves-light text-uppercase">
                                                Message
              </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>







    );
};

export default UserProfile;