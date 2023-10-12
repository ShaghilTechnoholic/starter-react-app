import React from 'react'

const SettingLoginInfo = () => {
    return (
        <>
            <p className="heading">
                LOGIN & PASSWORD
            </p>
            <p className='mb-0'>Change Password</p>
            <p className='normal-grey-text'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="row mt-3">
                <div className="col-md-12">
                    <span>Current Password<span className="sign-up-imp-star">*</span></span>
                    <input type="password" className="form-control" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <span>New Password<span className="sign-up-imp-star">*</span></span>
                    <input type="password" className="form-control" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <span>Confirm Password<span className="sign-up-imp-star">*</span></span>
                    <input type="password" className="form-control" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <button className="cancel-btn">Cancel</button>
                </div>
                <div className="col-md-6">
                    <button className="save-btn">Save</button>
                </div>
            </div>
        </>
    )
}

export default SettingLoginInfo
