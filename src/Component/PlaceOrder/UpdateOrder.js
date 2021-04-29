import React, { useState } from 'react';

const UpdateOrder = ({ order }) => {

    const { name, orderNo, voterName, voterNumber, email, cost, status, _id } = order;

    const [Orderstatus, setStatus] = useState({});
console.log(Orderstatus)

const handleOnChange =(e) =>{
const newData = {...Orderstatus}
    newData[e.target.name]= e.target.value;
    setStatus(newData);
}


const updateOrderStatus=(id)=>{
    fetch(`http://localhost:5000/updatestatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Orderstatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                  alert("Order Update Successfully")
                } else {
                  alert("Failed Submit Order")
                }

            })
}

    return (

        <div className="card" >
            <div style={{padding:'10px'}}>
                <h5 className="card-title">Update Order No {orderNo}</h5>
                <h6 className="card-text">Username : {name} and User Email: {email} </h6>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Voter Name : {voterName} </li>
                <li className="list-group-item"> Voter Number : {voterNumber} </li>
                <li className="list-group-item">Order Cost : {cost} </li>
            </ul>
            <div className="card-body">
            <div className="card-block">
                <span style={{padding:'5px', fontSize:'20px'}}>Status</span>
                <select onChange={handleOnChange} name="orderStatus" style={{padding:'5px',borderRadius:'5px',width:'20%', textTransform:'uppercase'}}>
                    <option selected>{status} </option>
                    <option value="processing">Processing</option>
                    <option value="complete">Complete</option>
                    <option value="pending">Success</option>
                </select>
                </div>
                <div className="card-block">
                <span style={{padding:'5px', fontSize:'20px'}}>Attachment</span>
                <input type="file" name="" id="" />
                </div>
            </div>

            <button onClick={()=>updateOrderStatus(_id)} style={{margin:'20px'}} className="btn btn-success">Update Order</button>
        </div>


    );
};

export default UpdateOrder;