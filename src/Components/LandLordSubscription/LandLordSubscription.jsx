import React, { useState } from 'react'
import DigitalTenantLogo from '../../assets/Copy of DigitalTenant_Logo.png'
import FreeIcon from '../../assets/free-icon.png'
import ProIcon from '../../assets/pro-Icon.png'
import PremiumIcon from '../../assets/premium-icon.png'
import { Switch } from 'antd';
import LandLordPackages from '../LandLordPackages/LandLordPackages'
import ServiceProPackages from '../ServiceProPackages/ServiceProPackages'
const LandLordSubscription = () => {
    const [tab1, settab1] = useState(true);
    const [tab2, settab2] = useState(false);
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="land-lord-subscribe-heading text-center mt-3">
                            <img src={DigitalTenantLogo} className='mb-3' alt="" />
                            <h1>Select a subscription plan</h1>
                        </div>
                        <div className="land-lord-subscribe-tabs text-center mt-3">
                            <button onClick={() => {
                                settab1(true);
                                settab2(false);
                            }} className={tab1 === true ? 'landlord-package-tab-btn rounded-end-0 active-tab-btn' : 'landlord-package-tab-btn rounded-end-0'}>Landlord Package</button>
                            <button onClick={() => {
                                settab1(false);
                                settab2(true);
                            }} className={tab2 === true ? 'landlord-package-tab-btn rounded-start-0 active-tab-btn' : 'landlord-package-tab-btn rounded-start-0'}>Services Professionals</button>
                        </div>
                        <p className='text-center my-4'>The service Pro package is for, professionals such as plumbers, Realtor, Lawyers that want to sign up</p>
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4 ">
                                <span className='me-3'>Yearly </span>  <Switch defaultChecked onChange={onChange} /> <span className='ms-3'> Monthly</span>
                            </div>
                        </div>
                        <div className="row text-center mt-4">
                            {
                                tab1 === true ? <LandLordPackages /> : <ServiceProPackages />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandLordSubscription
