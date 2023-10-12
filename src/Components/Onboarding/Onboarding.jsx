import React, { useState } from 'react'
import TenantBoxIcon from '../../assets/user-03.png'
import LandLordBoxIcon from '../../assets/home-03.svg'
import ServiceProBoxIcon from '../../assets/tool-02.svg'
import CheckBox from '../../assets/_Checkbox base.png'
import CheckBoxActive from '../../assets/_Checkbox active.png'
import SignUpLeftBanner from '../SignUpLeftBanner/SignUpLeftBanner'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react'
const Onboarding = () => {
    // Navigate State
    const navigate = useNavigate()
    const location = useLocation()
    // States
    const [tenantBox, setTenantBox] = useState(false);
    const [LandLordBox, setLandLordBox] = useState(false);
    const [ServiceProBox, setServiceProBox] = useState(false);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <SignUpLeftBanner />
                    </div>
                    <div className="col-md-8">
                        <div className="container mt-5 pt-5">
                            <div className="onboarding-right-heading text-center mb-5">
                                <h1>Welcome to Digital Tenant</h1>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                            <div className="onboarding-right mt-3">
                                <div className="onboarding-select-boxes ">
                                    <div onClick={() => {
                                        setTenantBox(true);
                                        setLandLordBox(false);
                                        setServiceProBox(false);
                                        setTimeout(() => {
                                            navigate("/tenant-sign-up");
                                        }, 500)
                                    }} className={tenantBox === true ? "onboarding-select-box active-box" : "onboarding-select-box"}>
                                        <div className="onboarding-select-box-left d-flex gap-2">
                                            <img src={TenantBoxIcon} className='img-fluid object-fit-contain' alt="" />
                                            <div className="onboarding-box-text">
                                                I am a Tenant
                                                <br />
                                                Lorem ipsum dolor sit amet consectetur.
                                            </div>
                                        </div>
                                        <div className="onboarding-select-box-check-box">
                                            <img src={tenantBox === true ? CheckBoxActive : CheckBox} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="onboarding-right mt-3">
                                <div onClick={() => {
                                    setTenantBox(false);
                                    setLandLordBox(true);
                                    setServiceProBox(false);
                                    setTimeout(() => {
                                        navigate("/land-lord-signup");
                                    }, 500)
                                }} className="onboarding-select-boxes">
                                    <div className={LandLordBox === true ? "onboarding-select-box active-box" : "onboarding-select-box"}>
                                        <div className="onboarding-select-box-left d-flex gap-2">
                                            <img src={LandLordBoxIcon} className='img-fluid object-fit-contain' alt="" />
                                            <div className="onboarding-box-text">
                                                I am a Landlord
                                                <br />
                                                Lorem ipsum dolor sit amet consectetur.
                                            </div>
                                        </div>
                                        <div className="onboarding-select-box-check-box">
                                            <img src={LandLordBox === true ? CheckBoxActive : CheckBox} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="onboarding-right mt-3">
                                <div onClick={() => {
                                    setTenantBox(false);
                                    setLandLordBox(false);
                                    setServiceProBox(true);
                                }} className="onboarding-select-boxes">
                                    <div className={ServiceProBox === true ? "onboarding-select-box active-box" : "onboarding-select-box"}>
                                        <div className="onboarding-select-box-left d-flex gap-2">
                                            <img src={ServiceProBoxIcon} className='img-fluid object-fit-contain' alt="" />
                                            <div className="onboarding-box-text">
                                                I am a Service Professional
                                                <br />
                                                Lorem ipsum dolor sit amet consectetur.
                                            </div>
                                        </div>
                                        <div className="onboarding-select-box-check-box">
                                            <img src={ServiceProBox === true ? CheckBoxActive : CheckBox} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="already-account-text text-center mt-5">
                                <p>Already have an account?  <Link className='primary-orange-text' to='/land-lord-sign-in'>Log In</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Onboarding
