import React from 'react'
import SignUpLeftBanner from '../SignUpLeftBanner/SignUpLeftBanner'
import ChevronLeft from "../../assets/chevron-left.png"
import PlayStore from '../../assets/Google Play Badge.png'
import AppStore from '../../assets/App Store Badge.png'
import { Link, useNavigate } from 'react-router-dom'
const CheckYourEmail = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <SignUpLeftBanner leftBannerHeading="Start your journey with us!" leftBannerText="Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts."/>
                    </div>
                    <div className="col-md-8">
                        <div className="check-your-email-heading my-5 pt-5 pb-5">
                            <h1>Check your email</h1>
                            <p>If you forget your password, no worries</p>
                        </div>
                        <div className="check-your-email">
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="custom-text-style">We have sent an email with password reset information to your email address olivi******@gmail.com</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <div className="sign-up-buttons d-flex gap-4">
                                        <button onClick={() => navigate('/')} className='check-your-email-btn w-100'>Resend Email</button>
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

export default CheckYourEmail