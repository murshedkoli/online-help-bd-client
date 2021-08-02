import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const SingleUser = () => {
    const [users, setUsers] = useState([]);

    const [notification, setNotification] = useState({
        update: '',
        failed: ''
    })

    useEffect(() => {
        fetch('https://onlinehelpbd.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.reverse());

            })
    }, [notification])




    const submitBalance = (email, name, paidAmount) => {
        const newOrder = {
            rechargeDate: new Date(),
            paymentNumber: 'Admin',
            trnxId: 'Admin',
            email: email,
            name: name,
            paymentAmmount: paidAmount,
            status: 'pending',

        }


        fetch('https://onlinehelpbd.herokuapp.com/recharge-request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedCount) {
                }

            })
    }


    const addBalance = (email, name) => {
        Swal.fire({
            title: 'Enter Balance Ammount',
            html: `<input type="number" id="paidAmmount" class="swal2-input" placeholder="Paid Ammount">`,
            confirmButtonText: 'Confirm Add Balance',
            focusConfirm: true,

            preConfirm: () => {
                const ammount = Swal.getPopup().querySelector('#paidAmmount').value
                if (!ammount) {
                    Swal.showValidationMessage(`Please enter Paid Ammount`)
                }
                const paidAmount = parseInt(ammount);
                submitBalance(email, name, paidAmount)
                return { ammount: paidAmount }
            }
        }).then((result) => {

            Swal.fire(`
               Balance Added Successfully & Ammount ${result.value.ammount} Was Added Successfully;`
                .trim())
        })
    }


    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12">
                <div className="card">
                    <div className="card-block">
                        <div className="table-responsive">
                            <table className="table m-b-0 photo-table">
                                <thead>
                                    <tr className="text-uppercase">
                                        <th>Sl</th>
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Balance</th>
                                        <th>Registered Date</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        users.map((user, i) =>
                                            <tr>
                                                <th>
                                                    {i + 1}
                                                </th>
                                                <th>
                                                    <img className="img-fluid img-circle" src={user.imgUrl} alt="User" />
                                                </th>
                                                <td>{user.name}
                                                    <p><i className="icofont icofont-clock-time" />Registered {new Date(user.registeredData).toDateString()}</p>
                                                </td>
                                                <td>{user.email} </td>
                                                <td>{user.balance} </td>
                                                <td> <button onClick={() => addBalance(user.email, user.name)}>add balance</button> </td>
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
    );
};

export default SingleUser;