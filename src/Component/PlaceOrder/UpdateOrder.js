import React, { useState } from 'react';
import swal from 'sweetalert';

const UpdateOrder = ({ order, setClickUpdate }) => {

const { name, orderNo, voterName, voterNumber, email, cost, status, _id,attachment } = order;

const [formData, setFormData] = useState({});


const handleOnChange =(e) =>{
const newData = {...formData}
    newData[e.target.name]= e.target.value;
    setFormData(newData);
}



const updateOrderStatus=(id)=>{

    const updateData={
        orderStatus:formData.orderStatus || status,
        idUrl:formData.idUrl || attachment,

    }

    fetch(`https://onlinehelpbd.herokuapp.com/updatestatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Congratulations!", "Update Successfully Complete!", "success");
                  setClickUpdate(false);
                } else {
                    swal("Sorry! Update Failed", "Please Try Again!", "warning");
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
                    <option value="processing">processing</option>
                    <option value="complete">complete</option>
                    <option value="pending">pending</option>
                    <option value="refund">refund</option>
                </select>
                </div>
                <div className="card-block">
                    <input style={{width:'80%', padding:'5px', borderRadius:'20px'}} onBlur={handleOnChange} name="idUrl" defaultValue={attachment} type="text"/>
                </div>
            </div>

            <button onClick={()=>updateOrderStatus(_id)} style={{margin:'20px'}} className="btn btn-success">Update Order</button>
        </div>


    );
};

export default UpdateOrder;