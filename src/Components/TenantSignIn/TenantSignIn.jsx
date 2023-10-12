import React from 'react'
import SignUpLeftBanner from '../SignUpLeftBanner/SignUpLeftBanner'
import checkPassIconBase from "../../assets/pass-validation-check.png"
import facebookIcon from '../../assets/facebook 1.png'
import googleIcon from '../../assets/iconfinder_Google_1298745 1.png'
import PlayStore from '../../assets/Google Play Badge.png'
import AppStore from '../../assets/App Store Badge.png'
import { Link, useNavigate } from 'react-router-dom'
const TenantSignIn = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <SignUpLeftBanner leftBannerHeading="Start your journey with us!" leftBannerText="Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts."/>
                    </div>
                    <div className="col-md-8">
                        <div className="tenant-sign-in-heading my-5 pt-5">
                            <h1>Sign in</h1>
                            <p>Create your account if not registered yet</p>
                        </div>
                        <div className="tenant-sign-in">
                            <div className="row">
                                <div className="col-md-12">
                                    <span>Email<span className='sign-in-imp-star'>*</span></span>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <span>Password<span className='sign-in-imp-star'>*</span></span>
                                    <input type="password" className="form-control" />
                                    <p className='text-end'><Link to='/forgot-password' className="sign-in-style-text">Forgot Password?</Link></p>
                                </div>
                            </div>
                            <div className="password-validation-list">
                                <ul className='password-validation-list-menu p-0'>
                                    <li> <img src={checkPassIconBase} alt="" /> Must be at least 8 characters.</li>
                                    <li> <img src={checkPassIconBase} alt="" /> Must contain at least 1 number</li>
                                    <li> <img src={checkPassIconBase} alt="" /> Must contain at least 1 upper letter</li>
                                    <li> <img src={checkPassIconBase} alt="" /> Must contain at least 1 special character</li>
                                </ul>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <div className="sign-up-terms-checkbox">
                                        <input type="checkbox" name="" id="" /> <span>Remember me</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <div className="sign-up-buttons d-flex gap-4">
                                        <button onClick={() => navigate('/')} className='tenant-sign-in-btn'>Sign In</button>
                                        <button className='google-signin-btn'><img src={googleIcon} alt="" />   Sign in with google</button>
                                        <button className='facebook-signin-btn'><img src={facebookIcon} alt="" />  Sign in with facebook</button>
                                    </div>
                                </div>
                            </div>
                            <div className="already-account-text text-center mt-5">
                                <p className='fw-bold'>Don't have an account? <Link to='/tenant-sign-up' className='primary-orange-text fw-medium'>Create an account</Link></p>
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

export default TenantSignIn