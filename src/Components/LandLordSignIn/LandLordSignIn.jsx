import React from 'react'
import SignUpLeftBanner from '../SignUpLeftBanner/SignUpLeftBanner'
import checkPassIconBase from "../../assets/pass-validation-check.png"
import facebookIcon from '../../assets/facebook 1.png'
import googleIcon from '../../assets/iconfinder_Google_1298745 1.png'
import PhoneInput from 'react-phone-input-2'
import PlayStore from '../../assets/Google Play Badge.png'
import AppStore from '../../assets/App Store Badge.png'
import { Link } from 'react-router-dom'
const LandLordSignIn = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <SignUpLeftBanner />
                    </div>
                    <div className="col-md-8 mt-5 pt-5">
                        <div className="land-lord-sign-in">
                            <div className="onboarding-right-heading text-start mb-5">
                                <h1>Sign in</h1>
                                <p>Create your account if not registered yet</p>
                            </div>
                            <div className="sign-in-fields">
                                <div className="row">
                                    <div className="col-md-12">
                                        <span>Email <span className='sign-up-imp-star'>*</span></span>
                                        <input type="text" className="form-control " />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <span>Password <span className='sign-up-imp-star'>*</span></span>
                                        <input type="password" className="form-control " />
                                        <p className='primary-orange-text text-end'>Forgot Password?</p>
                                    </div>
                                </div>
                                {/* <div className="password-validation-list">
                                    <ul className='password-validation-list-menu p-0'>
                                        <li> <img src={checkPassIconBase} alt="" /> Must be at least 8 characters.</li>
                                        <li> <img src={checkPassIconBase} alt="" /> Must contain at least 1 number</li>
                                        <li> <img src={checkPassIconBase} alt="" /> Must contain at least 1 upper letter</li>
                                        <li> <img src={checkPassIconBase} alt="" /> Must contain at least 1 special character</li>
                                    </ul>
                                </div> */}
                                <div className="remember-me-checkBox">
                                    <input type="checkbox" name="" id="" /> <span>Remember me </span>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <div className="sign-up-buttons d-flex gap-4 ">
                                            <button className='create-accoutn-btn'>Sign In</button>
                                            <button className='google-signup-btn'><img src={googleIcon} alt="" />   Sign in with google</button>
                                            <button className='facebook-signup-btn'><img src={facebookIcon} alt="" />  Sign in with facebook</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12 text-center">
                                        Don’t have an account? <Link className='primary-orange-text' to='/land-lord-signup'>Create an account</Link>
                                    </div>
                                </div>
                                <div className="get-app d-flex gap-4 justify-content-center align-items-center text-center mt-5">
                                    <img src={PlayStore} alt="" />
                                    <img src={AppStore} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LandLordSignIn
