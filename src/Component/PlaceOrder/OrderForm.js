import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { userContext } from '../../App';

const OrderForm = () => {
    document.title="Home Page | Online Help Bd";

    const [loggedInUser] = useContext(userContext);

    const [submitOrder, setSubmitOrder] = useState(false);
    

    const [orderData, setOrderData] = useState({});
    
    const [orders, setOrders] = useState([]);

    const [voucher, setVoucher] = useState([]);

    useEffect(() => {
        fetch('https://onlinehelpbd.herokuapp.com/orders')
          .then(res => res.json())
          .then(data => {
            setOrders(data)
    
          })
      },[] )



      useEffect(() => {
          fetch('https://onlinehelpbd.herokuapp.com/voucher?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setVoucher(data)
      
            })
        },[loggedInUser.email] )

    const handleOnBlur = (e)=>{
        const newData = {...orderData};
        newData[e.target.name] = e.target.value;
        setOrderData(newData);
    }

const orderCost = parseInt(voucher.voucherAmmount) || 250;




const submitData =(e)=>{
    const id =  loggedInUser._id;

    if(loggedInUser.balance<orderCost){
        swal("Low Balance!", "Please Recharge You Balance!", "warning");

    }else{
        const dataForSubmission={
            ammount:loggedInUser.balance - orderCost
        }
        fetch(`https://onlinehelpbd.herokuapp.com/confirm/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForSubmission)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    completeOrder();
                } else {
                    swal("Failed to Submit!", "Please Try Again!", "warning");
                }

            })
        
    }
    
        e.preventDefault();
}

const completeOrder = ()=>{
    const newOrder = {
        OrderDate:new Date(),
        voterName: orderData.voterName,
        voterNumber :orderData.voterNumber,
        email:loggedInUser.email,
        name:loggedInUser.name,
        cost : orderCost,
        status:'pending',
        orderNo: orders.length+1,
        attachment:'https://drive.google.com/uc?export=download&id='
    
        }
    
    
        fetch('https://onlinehelpbd.herokuapp.com/neworder', {
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
}
   
    return (
        submitOrder ?<h2>Your Order Submited Successfully</h2>: <form onSubmit={submitData}>
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
            <input onBlur={handleOnBlur} type="number" className="form-control" name="cost" value={orderCost} readOnly required />
        </div>

        <button type="submit" className="btn btn-success waves-effect waves-light">Submit Order</button>
    </form>

    );
};

export default OrderForm;