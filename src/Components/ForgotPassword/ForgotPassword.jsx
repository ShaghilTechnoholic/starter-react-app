import React from 'react'
import SignUpLeftBanner from '../SignUpLeftBanner/SignUpLeftBanner'
import ChevronLeft from "../../assets/chevron-left.png"
import PlayStore from '../../assets/Google Play Badge.png'
import AppStore from '../../assets/App Store Badge.png'
import { Link, useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <SignUpLeftBanner leftBannerHeading="Start your journey with us!" leftBannerText="Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts."/>
                    </div>
                    <div className="col-md-8">
                        <div className="forgot-password-heading my-5 pt-5">
                            <h1>Forgot Password</h1>
                            <p>If you forget your password, no worries</p>
                        </div>
                        <div className="forgot-password">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="fp-text-style">Enter the email you used to create your account so we can add you instructions on how to reset password</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <span>Email</span>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <div className="sign-up-buttons d-flex gap-4">
                                        <button onClick={() => navigate('/')} className='forgot-password-btn w-100'>Reset Password</button>
                                    </div>
                                </div>
                            </div>
                            <div className="already-account-text text-center mt-5">
                                <span><img src={ChevronLeft} alt="" /><Link to='/tenant-sign-in' className='custom-link-text fw-medium'>Back to log in</Link></span>
                            </div>
                            <div className="get-app d-flex gap-4 justify-content-center align-items-center text-center mt-5 pt-5">
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

export default ForgotPassword