import React, {  useState } from 'react';


const AddVoucher = () => {

    

    const [submitOrder, setSubmitOrder] = useState(false);
    

    const [orderData, setOrderData] = useState({});
    

    const handleOnBlur = (e)=>{
        const newData = {...orderData};
        newData[e.target.name] = e.target.value;
        setOrderData(newData);
    }




const completeOrder = (e)=>{
    const newOrder = {
        createDate:new Date(),
        email: orderData.voucherEmail,
        voucherAmmount : orderData.voucherAmmount,
       
        }
    
    
        fetch('http://localhost:5000/newvoucher', {
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
        submitOrder ?<h2> Successfully Add new Voucher</h2>: <form onSubmit={completeOrder}>
        <div className="form-group">
            <label htmlFor="voterName" className="form-control-label">Voucher Email</label>
            <input onBlur={handleOnBlur} type="text" className="form-control" name="voucherEmail" placeholder="Enter Voucher Name" required />
        </div>
        

        <div className="form-group">
            <label htmlFor="cost" className="form-control-label">Rate</label>
            <input onBlur={handleOnBlur} type="number" className="form-control" name="voucherAmmount"  required />
        </div>

        <button type="submit" className="btn btn-success waves-effect waves-light">Add New Rate</button>
    </form>
    );
};

export default AddVoucher;