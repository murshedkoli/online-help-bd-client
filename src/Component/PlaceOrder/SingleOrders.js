import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { userContext } from '../../App';
import UpdateOrder from './UpdateOrder';
import Swal from 'sweetalert2'


const SingleOrders = () => {

    const [loggedInUser] = useContext(userContext)

    const [order, setOrder] = useState([]);

    const [clickUpdate, setClickUpdate] = useState(false)
    const [deletes, setDeletes] = useState(false)

    const updateOrder = id => {

        fetch(`https://onlinehelpbd.herokuapp.com/singleorder?id=` + id)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
            })
        setClickUpdate(true)
    }


    const deleteConfirm = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteOrder(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }

    const deleteOrder = id => {
        fetch(`https://onlinehelpbd.herokuapp.com/deleteorder?id=` + id)
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDeletes(!deletes)
                } else {
                }
            })
    }


    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch('https://onlinehelpbd.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data.reverse());

            })
    }, [clickUpdate, loggedInUser.email, deletes])



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
                                            <th>No.</th>
                                            {loggedInUser.isAdmin && <th>User Name</th>}
                                            <th>Voter N.N</th>
                                            <th>Payment </th>
                                            {/* {loggedInUser.isAdmin && <th>User Email</th>} */}
                                            {loggedInUser.isAdmin && <th>Cost</th>}
                                            <th>Status</th>
                                            {loggedInUser.isAdmin && <th>Update</th>}
                                            {loggedInUser.isAdmin && <th>Delete</th>}
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
                                                    <td>{order.voterName} <br /> {order.voterNumber}

                                                    </td>
                                                    <td>
                                                        Cost : {order.orderAmmount} <br />Trnx : {order.trnxNumber}
                                                    </td>
                                                    {/* {loggedInUser.isAdmin && <td>{order.email} </td>} */}
                                                    {loggedInUser.isAdmin && <td>{order.cost} </td>}

                                                    <td >{order.status === "complete" ? <a href={order.attachment}><button className="btn btn-success">Download</button> </a> : <button className="btn btn-outline-danger">{order.status}</button>} </td>
                                                    {loggedInUser.isAdmin && <td> <button onClick={() => updateOrder(order._id)} className="btn btn-success">Update</button> </td>}
                                                    {loggedInUser.isAdmin && order.status === "pending" && <td> <button onClick={() => deleteConfirm(order._id)} className="btn btn-danger">Delete</button> </td>}

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