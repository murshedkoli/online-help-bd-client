import React, { useEffect, useState } from 'react';

const UpdateRecharge = ({ order, setClickUpdate }) => {

const { name,  paymentNumber, email, trnxId, _id, paymentAmmount } = order;

const [user, setUser] = useState({});

useEffect(()=>{

    fetch(`http://localhost:5000/single-user?email=` + email)
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

    fetch(`http://localhost:5000/update-recharge/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                  alert("Order Update Successfully")
                  setClickUpdate(false);
                } else {
                  alert("Failed Submit Order")
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