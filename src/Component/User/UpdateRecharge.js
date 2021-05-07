import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const UpdateRecharge = ({ order, setClickUpdate }) => {

const { name,  paymentNumber, email, trnxId, _id, paymentAmmount } = order;

const [user, setUser] = useState({});

useEffect(()=>{

    fetch(`https://onlinehelpbd.herokuapp.com/single-user?email=` + email)
    .then(res => res.json())
    .then(data => {
        setUser(data);
        
    })

},[email])





const updateOrderStatus=(id)=>{
    const total = parseInt(paymentAmmount) + parseInt(user.balance)

    const updateData={
        email:email,
        paymentAmmount:total
        

    }

    fetch(`https://onlinehelpbd.herokuapp.com/update-recharge/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Congratulations!", "Balance Added Successfully!", "success");
                  setClickUpdate(false);
                } else {
                    swal("Balance Add Failed!", "Please Check the Problem and solv it!", "warning");
                }

            })
}

    return (

        <div className="card" >
            <div style={{padding:'10px'}}>
                <h6 className="card-text">Username : {name} and User Email: {email} </h6>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Transection Id : {trnxId} </li>
                <li className="list-group-item"> Recharge Number : {paymentNumber} </li>
                <li className="list-group-item">Recharge Ammount : {paymentAmmount} </li>
            </ul>
           

            <button onClick={()=>updateOrderStatus(_id)} style={{margin:'20px'}} className="btn btn-success">Confirm Recharge</button>
        </div>


    );
};

export default UpdateRecharge;