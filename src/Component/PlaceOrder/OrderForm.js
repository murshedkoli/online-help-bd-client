import React, { useContext, useState } from 'react';
import { userContext } from '../../App';

const OrderForm = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [orderData, setOrderData] = useState({});
    console.log(orderData)

    const handleOnBlur = (e)=>{
        const newData = {...orderData};
        newData[e.target.name] = e.target.value;
        setOrderData(newData);
    }


const submitData =(e)=>{
     
    const newOrder = {
        
    voterName: orderData.voterName,
    voterNumber :orderData.voterNumber,
    email:loggedInUser.email,
    cost : 250

    }


    fetch('http://localhost:5000/neworder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrder)
    })
        .then(res => res.json())
        .then(data => {
           
        
        })
        e.preventDefault();
}

   
    return (
        <form onSubmit={submitData}>
            <div className="form-group">
                <label htmlFor="voterName" className="form-control-label">Voter Name</label>
                <input onBlur={handleOnBlur} type="text" className="form-control" name="voterName" placeholder="Enter Voter Name" required />
            </div>
            <div className="form-group">
                <label htmlFor="voterNumber" className="form-control-label">Voter Number/ Slip Number/ NID Number</label>
                <input onBlur={handleOnBlur} type="number" className="form-control" name="voterNumber" placeholder="Voter Number" required />
            </div>

            <div className="form-group">
                <label htmlFor="cost" className="form-control-label">Order Cost</label>
                <input onBlur={handleOnBlur} type="number" className="form-control" name="cost" value="250" readOnly required />
            </div>

            <button type="submit" className="btn btn-success waves-effect waves-light">Submit Order</button>
        </form>

    );
};

export default OrderForm;