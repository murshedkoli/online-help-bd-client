import React, { useEffect, useState } from 'react';

const VoucherList = () => {
    const [vouchers, setVouchers] = useState([]);

    

    useEffect(() => {
        fetch('https://onlinehelpbd.herokuapp.com/vouchers')
            .then(res => res.json())
            .then(data => {
                setVouchers(data.reverse());

            })
    }, [])



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
                                        
                                        <th>Email</th>
                                        <th>Rate</th>
                                        <th>Registered Date</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        vouchers.map((voucher, i) =>
                                            <tr>
                                                 <th>
                                                    {i+1}
                                                </th>
                                               
                                                <td>{voucher.email} </td>
                                                <td>{voucher.voucherAmmount} </td>
                                                <td>{new Date(voucher.createDate).toDateString()} </td>
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

export default VoucherList;