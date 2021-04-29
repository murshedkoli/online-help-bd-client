import React from 'react';

const Users = () => {
    return (
        <div>
            <div className="col-xl-4 col-lg-12 grid-item">
                <div className="card">
                    <div className="card-block horizontal-card-img d-flex">
                        <img className="media-object img-circle" src="assets/images/avatar-3.png" alt="Generic placeholder image" />
                        <div className="d-inlineblock  p-l-20">
                            <h6>Josephin Doe</h6>
                            <a href="#">contact@admin.com</a>
                        </div>
                        {/* <h6 className="txt-warning rotate-txt">Designer</h6> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;