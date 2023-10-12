import React, { useState } from 'react'
import FreeIcon from '../../assets/free-icon.png'
import ProIcon from '../../assets/pro-Icon.png'
import PremiumIcon from '../../assets/premium-icon.png'
import { useNavigate } from 'react-router-dom'
const LandLordPackages = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="col-md-4">
                <div className="land-lord-package rounded border">
                    <div className="package-name text-start border-bottom d-flex align-items-center justify-content-between">
                        <div className="package-name-and-icon-container">
                            <img src={FreeIcon} alt="" />  Free
                        </div>
                        <div className="package-select-radio-container">
                            <input type="radio" name="free" id="free" />
                        </div>
                    </div>
                    <div className="package-details text-start">
                        <span className='limited-time-text-subscription '>Limited time only</span>
                        <p className='mt-3'><span className="package-big-text text-dark">FREE</span> per month <br />
                            Includes up to 10 users, 20GB indiviual data and access to all features.
                        </p>
                        <p className="fw-bold ">Inludes:</p>
                        <p>Unlimited free viewers</p>
                        <p>Unlimited items</p>
                        <p>200+ templates</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="land-lord-package rounded border ">
                    <div className="package-name text-start border-bottom d-flex align-items-center justify-content-between">
                        <div className="package-name-and-icon-container">
                            <img src={ProIcon} alt="" />  Pro Service
                        </div>
                        <div className="package-select-radio-container">
                            <input onChange={(e) => e.target.value === "on" ? navigate("/land-lord-payment-method") : "off"} type="radio" name="pro" id="pro" />
                        </div>
                    </div>
                    <div className="package-details text-start">
                        <span className='limited-time-text-subscription'>Limited time only</span>
                        <p className='mt-3'> <span className="package-big-text text-dark">$99</span> per month <br />
                            Includes up to 10 users, 20GB indiviual data and access to all features.
                        </p>
                        <p className="fw-bold ">Inludes:</p>
                        <p>Unlimited free viewers</p>
                        <p>Unlimited items</p>
                        <p>200+ templates</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="land-lord-package rounded border">
                    <div className="package-name text-start border-bottom d-flex align-items-center justify-content-between">
                        <div className="package-name-and-icon-container">
                            <img src={PremiumIcon} alt="" />  Platinum Service
                        </div>
                        <div className="package-select-radio-container">
                            <input type="radio" name="premium" id="premium" />
                        </div>
                    </div>
                    <div className="package-details text-start">
                        <span className='limited-time-text-subscription'>Limited time only</span>
                        <p className='mt-3'><span className="package-big-text text-dark">$149</span> per month <br />
                            Includes up to 10 users, 20GB indiviual data and access to all features.
                        </p>
                        <p className="fw-bold ">Inludes:</p>
                        <p>Unlimited free viewers</p>
                        <p>Unlimited items</p>
                        <p>200+ templates</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandLordPackages
