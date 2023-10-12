import React from 'react'
import SignUpLeftBanner from '../SignUpLeftBanner/SignUpLeftBanner'
import facebookIcon from '../../assets/facebook 1.png'
import googleIcon from '../../assets/iconfinder_Google_1298745 1.png'
import PhoneInput from 'react-phone-input-2'
import PlayStore from '../../assets/Google Play Badge.png'
import AppStore from '../../assets/App Store Badge.png'
import 'react-phone-input-2/lib/style.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const LandLordSignUp = () => {
    // Navigation State
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <SignUpLeftBanner />
                    </div>
                    <div className="col-md-8">
                        <div className="land-lord-sign-up-heading my-5 pt-5">
                            <h1>Create an Account</h1>
                            <p>Create your account if not registered yet</p>
                        </div>
                        <div className="land-lord-sign-up">
                            <div className="row">
                                <div className="col-md-6">
                                    <span>First Name<span className='sign-up-imp-star'>*</span></span>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <span>Last Name<span className='sign-up-imp-star'>*</span></span>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col-md-12">
                                    <span>Email<span className='sign-up-imp-star'>*</span></span>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <span>Password<span className='sign-up-imp-star'>*</span></span>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <span>Phone no<span className='sign-up-imp-star'>*</span></span>
                                    {/* <input type="text" className="form-control" /> */}
                                    <PhoneInput
                                        country={'us'}
                                        value={'1'}
                                        className='w-100'
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <div className="sign-up-terms-checkbox">
                                        <input type="checkbox" name="" id="" /> <span>I agree to all the <span className="primary-orange-text">Terms</span> and <span className="primary-orange-text">Privacy policy </span></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <div className="sign-up-buttons d-flex gap-4 ">
                                        <button onClick={() => navigate('/land-lord-subscription')} className='create-accoutn-btn'>Create account</button>
                                        <button className='google-signup-btn'><img src={googleIcon} alt="" />   Sign up with google</button>
                                        <button className='facebook-signup-btn'><img src={facebookIcon} alt="" />  Sign up with facebook</button>
                                    </div>
                                </div>
                            </div>
                            <div className="already-account-text text-center mt-5">
                                <p className='fw-bold'>Already have an account? <Link className='primary-orange-text fw-medium' to='/land-lord-sign-in'>Log In</Link> </p>
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

export default LandLordSignUp
