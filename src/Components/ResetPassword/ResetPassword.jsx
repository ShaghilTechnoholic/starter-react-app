import React from 'react'
import SignUpLeftBanner from '../SignUpLeftBanner/SignUpLeftBanner'
import checkPassIconBase from "../../assets/pass-validation-check.png"
import ChevronLeft from "../../assets/chevron-left.png"
import PlayStore from '../../assets/Google Play Badge.png'
import AppStore from '../../assets/App Store Badge.png'
import { Link, useNavigate } from 'react-router-dom'
const ResetPassword = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <SignUpLeftBanner leftBannerHeading="Start your journey with us!" leftBannerText="Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts."/>
                    </div>
                    <div className="col-md-8">
                        <div className="reset-password-heading my-5 pt-5">
                            <h1>Reset Password</h1>
                            <p>Create a new password for your account</p>
                        </div>
                        <div className="reset-password">
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <span>Create new password<span className='reset-password-imp-star'>*</span></span>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <span>Confirm Password<span className='reset-password-imp-star'>*</span></span>
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="password-validation-list mt-4">
                                <ul className='password-validation-list-menu p-0'>
                                    <li> <img src={checkPassIconBase} alt="" /> Must be at least 8 characters.</li>
                                    <li> <img src={checkPassIconBase} alt="" /> Must contain at least 1 number</li>
                                    <li> <img src={checkPassIconBase} alt="" /> Must contain at least 1 upper letter</li>
                                    <li> <img src={checkPassIconBase} alt="" /> Must contain at least 1 special character</li>
                                </ul>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <div className="reset-password-checkbox">
                                        <input type="checkbox" name="" id="" /> <span>Remember me</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <div className="reset-password-buttons d-flex gap-4 ">
                                        <button onClick={() => navigate('/')} className='reset-password-btn w-100'>Reset Password</button>
                                    </div>
                                </div>
                            </div>
                            <div className="already-account-text text-center mt-5">
                                <span><img src={ChevronLeft} alt="" /><Link to='/tenant-sign-in' className='custom-link-text fw-medium'>Back to log in</Link></span>
                            </div>
                            <div className="get-app d-flex gap-4 justify-content-center align-items-center text-center mt-5">
                                <img src={PlayStore} alt="" />
                                <img src={AppStore} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword