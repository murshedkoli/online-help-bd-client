import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import UpdateOrder from './UpdateOrder';

const SingleOrders = () => {

    const [loggedInUser] = useContext(userContext)

    const [order, setOrder] = useState([]);

    const [clickUpdate, setClickUpdate] = useState(false)

    const updateOrder = id => {

        fetch(`https://onlinehelpbd.herokuapp.com/singleorder?id=` + id)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
            })
        setClickUpdate(true)
    }


    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch('https://onlinehelpbd.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data.reverse());

            })
    }, [clickUpdate, loggedInUser.email])



    return (
        <div>
            {
                clickUpdate &&
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="card">
                            <div className="card-block">
                                <UpdateOrder order={order} setClickUpdate={setClickUpdate} />
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="card">
                        <div className="card-block">
                            <div className="table-responsive">
                                <table className="table m-b-0 photo-table">
                                    <thead>
                                        <tr className="text-uppercase">
                                            <th>Order No.</th>
                                            {loggedInUser.isAdmin && <th>User Name</th>}
                                            <th>Voter N.N</th>
                                            <th>Payment Info</th>
                                            {loggedInUser.isAdmin && <th>User Email</th>}
                                            {loggedInUser.isAdmin && <th>Cost</th>}
                                            <th>Status</th>
                                            {loggedInUser.isAdmin && <th>Update</th>}
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            orders.map((order) =>
                                                <tr>
                                                    <th>
                                                        {order.orderNo}
                                                    </th>
                                                    {
                                                        loggedInUser.isAdmin && <th>
                                                            {order.name}
                                                        </th>
                                                    }
                                                    <td>{order.voterName}  {order.voterNumber}
                                                        <p><i className="icofont icofont-clock-time" />{new Date(order.OrderDate).toDateString()}</p>
                                                    </td>
                                                    <td>
                                                        {order.orderAmmount} <br />{order.trnxNumber}
                                                    </td>
                                                    {loggedInUser.isAdmin && <td>{order.email} </td>}
                                                    {loggedInUser.isAdmin && <td>{order.cost} </td>}

                                                    <td >{order.status === "complete" ? <a href={order.attachment}><button className="btn btn-success">Download</button> </a> : order.status} </td>
                                                    {loggedInUser.isAdmin && <td> <button onClick={() => updateOrder(order._id)} className="btn btn-success">Update</button> </td>}
                                                </tr>
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleOrders;