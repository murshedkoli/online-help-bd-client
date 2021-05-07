import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import UpdateRecharge from './UpdateRecharge';

const SingleRecharge = () => {

    const [loggedInUser] = useContext(userContext);

    const [order, setOrder] = useState([]);

    const [clickUpdate, setClickUpdate] = useState(false)

    const updateOrder = id => {

        fetch(`https://onlinehelpbd.herokuapp.com/single-recharge?id=` + id)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                setClickUpdate(true)
            })
        
    }


    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch('https://onlinehelpbd.herokuapp.com/recharge-requests?email='+loggedInUser.email)
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
                                <UpdateRecharge order={order} setClickUpdate={setClickUpdate} />
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
                                            {loggedInUser.isAdmin && <th>User Name</th>}
                                            <th>Payment Number</th>
                                            <th>Trnx Id</th>
                                            <th>Ammount</th>
                                            <th>Status</th>
                                            {loggedInUser.isAdmin && <th>Update</th>}
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            orders.map((order,i) =>
                                                <tr>
                                                   
                                                    {loggedInUser.isAdmin && <th>{order.name}</th>}
                                                    <td>{order.paymentNumber} 
                                                        <p><i className="icofont icofont-clock-time" />{new Date(order.rechargeDate).toDateString()}</p>
                                                    </td>
                                                    <td>{order.trnxId} </td>
                                                    <td>{order.paymentAmmount} </td>
                                                    <td > {order.status=== 'Complete'? <p>{order.paymentAmmount} is added in your balance</p>: order.status }</td>
                                                    {loggedInUser.isAdmin && <td> {order.status === 'Complete'? <p>Already Balance Added</p>: <button onClick={() => updateOrder(order._id)} className="btn btn-success">Update</button> } </td>}
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

export default SingleRecharge;