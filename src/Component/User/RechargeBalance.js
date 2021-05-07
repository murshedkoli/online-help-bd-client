import React, { useContext, useState } from 'react';
import { userContext } from '../../App';

const RechargeBalance = () => {

    const [loggedInUser] = useContext(userContext);

    const [submitOrder, setSubmitOrder] = useState(false);
 

    const [orderData, setOrderData] = useState({});
    


    const handleOnBlur = (e)=>{
        const newData = {...orderData};
        newData[e.target.name] = e.target.value;
        setOrderData(newData);
    }



const submitData = (e)=>{
    const newOrder = {
        rechargeDate:new Date(),
        paymentNumber: orderData.paymentNumber,
        trnxId :orderData.trnxId,
        email:loggedInUser.email,
        name:loggedInUser.name,
        paymentAmmount :orderData.paymentAmmount,
        status:'pending',
    
        }
    
    
        fetch('http://localhost:5000/recharge-request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
               if(data.insertedCount){
                   setSubmitOrder(true)
               }
            
            })
            e.preventDefault();
}
   
    return (
        submitOrder ?<h2>Your Recharge Request Submit Succefully</h2>: <form onSubmit={submitData}>
        <div className="form-group">
            <label htmlFor="voterName" className="form-control-label">Payment Number</label>
            <input onBlur={handleOnBlur} type="number" className="form-control" name="paymentNumber" placeholder="Enter Your Mobile Number" required />
        </div>
        <div className="form-group">
            <label htmlFor="voterNumber" className="form-control-label">Transection Id</label>
            <input onBlur={handleOnBlur} type="text" className="form-control" name="trnxId" placeholder="Payment Transection Id" required />
        </div>

        <div className="form-group">
            <label htmlFor="cost" className="form-control-label">Payment Ammount</label>
            <input onBlur={handleOnBlur} type="number" className="form-control" name="paymentAmmount"  required />
        </div>

        <button type="submit" className="btn btn-success waves-effect waves-light">Submit Request</button>
    </form>

    );
};

export default RechargeBalance;