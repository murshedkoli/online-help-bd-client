import React, { useEffect, useState } from 'react';

const SingleUser = () => {
    const [users, setUsers] = useState([]);



    useEffect(() => {
        fetch('https://onlinehelpbd.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.reverse());

            })
    }, [])


    const addBalance = id => {
        const userData = {
            registeredData: new Date(),
            name: users.name,
        }

        fetch('https://api.sheba.xyz/v1/ecom-payment/initate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
                                                <td> <button onClick={addBalance}>add balance</button> </td>
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