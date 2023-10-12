import React from 'react'
import DigitalTenantLogo from '../../assets/Copy of DigitalTenant_Logo.png'
import signUpImg from '../../assets/analog-landscape-city-with-buildings 1.png'
const SignUpLeftBanner = () => {
    return (
        <>
            <div className="signUp-left-img position-relative mt-2">
                <div className="logo-container position-absolute">
                    <img src={DigitalTenantLogo} className='img-fluid' alt="" />
                </div>
                <img src={signUpImg} className='img-fluid' alt="" />
                <div className="sign-up-left-text">
                    <h1 className='text-white'>Simple, Adaptive and Modern </h1>
                    <p>Elevate Your Property Management Experience Today</p>
                </div>
                <div className="sign-up-left-img-overlay"></div>
            </div>
        </>
    )
}

export default SignUpLeftBanner
