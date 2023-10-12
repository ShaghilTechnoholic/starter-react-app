import React from 'react'
import { Link } from 'react-router-dom'
const AccountDetails = () => {
    return (
        <>
            <div className="container-fluid bg-white p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <span className="fw-bold">ACCOUNT info</span>
                        </div>
                        <div className="col-md-6">
                            <div className="account-info-btn d-flex align-items-center justify-content-center gap-3">
                                <button className="connect-bank-btn w-50">Connect to Bank</button>
                                <button className='add-new-task-btn w-50'> <span ><svg width={21} height={21} fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5v14" />
                                    <path d="M5 12h14" />
                                </svg></span>Add New Account</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 pt-5">
                        <div className="col-md-12">
                            <div className="task-info-lists">
                                <p><span className="task-info-list-span me-3">Account:</span>  Operating Account</p>
                                <p><span className="task-info-list-span me-3">Property:</span> The Tree House</p>
                                <p><span className="task-info-list-span me-3">Property Address:</span> 1100 Welker LnJersey Shore, Pennsylvania(PA),  17740 </p>
                                <p><span className="task-info-list-span me-3">Status:</span> Active</p>
                                <p><span className="task-info-list-span me-3">Description:</span> Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools</p>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Link className='primary-orange-text'>+ Add another property for this account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDetails
