import React, { useState } from 'react'
import settingIcon from '../../assets/setting-icon.png'
import SettingPersonalInfo from './SettingPersonalInfo/SettingPersonalInfo'
import folderIcon from '../../assets/folder.png'
import globeIcon from '../../assets/globe.png'
import lockIcon from '../../assets/lock.png'
import monitorIcon from '../../assets/monitor-03.png'
import tagIcon from '../../assets/tag-03.png'
import userIcon from '../../assets/user-circle.png'
import userRoleIcon from '../../assets/user-03.png'
import walletIcon from '../../assets/wallet-02.png'
import SettingLoginInfo from './SettingLoginInfo/SettingLoginInfo'
import SettingCompanyInfo from './SettingCompanyInfo/SettingCompanyInfo'
import SettingRegion from './SettingRegion/SettingRegion'
import SettingAddUserRole from './SettingAddUserRole/SettingAddUserRole'
import SettingSubscription from './SettingSubscription/SettingSubscription'
import SettingPaymentMethod from './SettingPaymentMethod/SettingPaymentMethod'
import SettingPortfolio from './SettingPortfolio/SettingPortfolio'
import SettingLeadSource from './SettingLeadSource/SettingLeadSource'
const Setting = () => {
    // States
    const [personalInfoTab, setpersonalInfoTab] = useState(true)
    const [loginInfoTab, setloginInfoTab] = useState(false)
    const [companyInfoTab, setcompanyInfoTab] = useState(false)
    const [regionInfoTab, setregionInfoTab] = useState(false)
    const [userInfoTab, setuserInfoTab] = useState(false)
    const [userRoleInfoTab, setuserRoleInfoTab] = useState(false)
    const [subInfoTab, setsubInfoTab] = useState(false)
    const [paymentInfoTab, setpaymentInfoTab] = useState(false)
    const [portfolioInfoTab, setportfolioInfoTab] = useState(false)
    const [leadInfoTab, setleadInfoTab] = useState(false)
    return (
        <>
            <div className="container-fluid bg-white ps-0 pe-3">
                <div className="setting-container d-flex align-items-start gap-3">
                    <div className="setting-navbar-main-container">
                        <div
                            onClick={() => {
                                setpersonalInfoTab(true)
                                setloginInfoTab(false)
                                setcompanyInfoTab(false)
                                setregionInfoTab(false)
                                setuserRoleInfoTab(false)
                                setsubInfoTab(false)
                                setpaymentInfoTab(false)
                                setportfolioInfoTab(false)
                                setleadInfoTab(false)
                            }}
                            className={personalInfoTab === true ? "active-setting-tab setting-navbar-container border-bottom border-end" : "setting-navbar-container border-bottom border-end"}>
                            <div className="setting-navbar d-flex gap-3 ">
                                <div className="setting-navbar-img">
                                    <img src={settingIcon} alt="" />
                                </div>
                                <div className="setting-navbar-text">
                                    <p className='mb-0 setting-nav-heading'>Personal Information </p>
                                    <p>Change your name, picture, phone, email, & mailing address. </p>
                                </div>
                            </div>
                        </div>
                        <div className={loginInfoTab === true ? "active-setting-tab setting-navbar-container border-bottom border-end" : "setting-navbar-container border-bottom border-end"}>
                            <div
                                onClick={() => {
                                    setpersonalInfoTab(false)
                                    setloginInfoTab(true)
                                    setcompanyInfoTab(false)
                                    setregionInfoTab(false)
                                    setuserRoleInfoTab(false)
                                    setsubInfoTab(false)
                                    setpaymentInfoTab(false)
                                    setportfolioInfoTab(false)
                                    setleadInfoTab(false)
                                }} className="setting-navbar d-flex gap-3 ">
                                <div className="setting-navbar-img">
                                    <img src={lockIcon} alt="" />
                                </div>
                                <div className="setting-navbar-text">
                                    <p className='mb-0 setting-nav-heading'>Login & Password </p>
                                    <p>Change your email or password, and allow technician access.</p>
                                </div>
                            </div>
                        </div>
                        <div className={companyInfoTab === true ? "active-setting-tab setting-navbar-container border-bottom border-end" : "setting-navbar-container border-bottom border-end"}>
                            <div
                                onClick={() => {
                                    setpersonalInfoTab(false)
                                    setloginInfoTab(false)
                                    setcompanyInfoTab(true)
                                    setregionInfoTab(false)
                                    setuserRoleInfoTab(false)
                                    setsubInfoTab(false)
                                    setpaymentInfoTab(false)
                                    setportfolioInfoTab(false)
                                    setleadInfoTab(false)
                                }}
                                className="setting-navbar d-flex gap-3 ">
                                <div className="setting-navbar-img">
                                    <img src={monitorIcon} alt="" />
                                </div>
                                <div className="setting-navbar-text">
                                    <p className='mb-0 setting-nav-heading'>Company Information </p>
                                    <p>Lorem Ipsum is a placeholder text used in the graphic, print, and publishing industries. </p>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                setpersonalInfoTab(false)
                                setloginInfoTab(false)
                                setcompanyInfoTab(false)
                                setregionInfoTab(true)
                                setuserRoleInfoTab(false)
                                setsubInfoTab(false)
                                setpaymentInfoTab(false)
                                setportfolioInfoTab(false)
                                setleadInfoTab(false)
                            }}
                            className={regionInfoTab === true ? "active-setting-tab setting-navbar-container border-bottom border-end" : "setting-navbar-container border-bottom border-end"}>
                            <div className="setting-navbar d-flex gap-3 ">
                                <div className="setting-navbar-img">
                                    <img src={globeIcon} alt="" />
                                </div>
                                <div className="setting-navbar-text">
                                    <p className='mb-0 setting-nav-heading'>Region & Currency </p>
                                    <p>Change your country, date formats, and currency settings.</p>
                                </div>
                            </div>
                        </div>
                        <div className={userInfoTab === true ? "active-setting-tab setting-navbar-container border-bottom border-end" : "setting-navbar-container border-bottom border-end"}>
                            <div className="setting-navbar d-flex gap-3 ">
                                <div className="setting-navbar-img">
                                    <img src={userIcon} alt="" />
                                </div>
                                <div className="setting-navbar-text">
                                    <p className='mb-0 setting-nav-heading'>User</p>
                                    <p>Add or edit users</p>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                setpersonalInfoTab(false)
                                setloginInfoTab(false)
                                setcompanyInfoTab(false)
                                setregionInfoTab(false)
                                setuserRoleInfoTab(true)
                                setsubInfoTab(false)
                                setpaymentInfoTab(false)
                                setportfolioInfoTab(false)
                                setleadInfoTab(false)
                            }}
                            className={userRoleInfoTab === true ? "active-setting-tab setting-navbar-container border-bottom border-end" : "setting-navbar-container border-bottom border-end"}>
                            <div className="setting-navbar d-flex gap-3 ">
                                <div className="setting-navbar-img">
                                    <img src={userRoleIcon} alt="" />
                                </div>
                                <div className="setting-navbar-text">
                                    <p className='mb-0 setting-nav-heading'>User Roles </p>
                                    <p>Allow or block access to features of Digital Tenant for each user.</p>
                                </div>
                            </div>
                        </div>
                        <div className={subInfoTab === true ? "active-setting-tab setting-navbar-container border-bottom border-end" : "setting-navbar-container border-bottom border-end"}>
                            <div
                                onClick={() => {
                                    setpersonalInfoTab(false)
                                    setloginInfoTab(false)
                                    setcompanyInfoTab(false)
                                    setregionInfoTab(false)
                                    setuserRoleInfoTab(false)
                                    setsubInfoTab(true)
                                    setpaymentInfoTab(false)
                                    setportfolioInfoTab(false)
                                    setleadInfoTab(false)
                                }}
                                className="setting-navbar d-flex gap-3 ">
                                <div className="setting-navbar-img">
                                    <img src={userIcon} alt="" />
                                </div>
                                <div className="setting-navbar-text">
                                    <p className='mb-0 setting-nav-heading'>Subscription </p>
                                    <p>Allow or block access to features of Digital Tenant for each user.</p>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                setpersonalInfoTab(false)
                                setloginInfoTab(false)
                                setcompanyInfoTab(false)
                                setregionInfoTab(false)
                                setuserRoleInfoTab(false)
                                setsubInfoTab(false)
                                setpaymentInfoTab(true)
                                setportfolioInfoTab(false)
                                setleadInfoTab(false)
                            }}
                            className={paymentInfoTab === true ? "active-setting-tab setting-navbar-container border-bottom border-end" : "setting-navbar-container border-bottom border-end"}>
                            <div className="setting-navbar d-flex gap-3 ">
                                <div className="setting-navbar-img">
                                    <img src={walletIcon} alt="" />
                                </div>
                                <div className="setting-navbar-text">
                                    <p className='mb-0 setting-nav-heading'>Payment Method </p>
                                    <p>Allow or block access to features of Digital Tenant for each user.</p>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                setpersonalInfoTab(false)
                                setloginInfoTab(false)
                                setcompanyInfoTab(false)
                                setregionInfoTab(false)
                                setuserRoleInfoTab(false)
                                setsubInfoTab(false)
                                setpaymentInfoTab(false)
                                setportfolioInfoTab(true)
                                setleadInfoTab(false)
                            }}
                            className={portfolioInfoTab === true ? "active-setting-tab setting-navbar-container border-bottom border-end" : "setting-navbar-container border-bottom border-end"}>
                            <div className="setting-navbar d-flex gap-3 ">
                                <div className="setting-navbar-img">
                                    <img src={folderIcon} alt="" />
                                </div>
                                <div className="setting-navbar-text">
                                    <p className='mb-0 setting-nav-heading'>Portfolios</p>
                                    <p>Allow or block access to features of Digital Tenant for each user.</p>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => {
                                setpersonalInfoTab(false)
                                setloginInfoTab(false)
                                setcompanyInfoTab(false)
                                setregionInfoTab(false)
                                setuserRoleInfoTab(false)
                                setsubInfoTab(false)
                                setpaymentInfoTab(false)
                                setportfolioInfoTab(false)
                                setleadInfoTab(true)
                            }}
                            className={leadInfoTab === true ? "active-setting-tab setting-navbar-container border-bottom border-end" : "setting-navbar-container border-bottom border-end"}>
                            <div className="setting-navbar d-flex gap-3 ">
                                <div className="setting-navbar-img">
                                    <img src={tagIcon} alt="" />
                                </div>
                                <div className="setting-navbar-text">
                                    <p className='mb-0 setting-nav-heading'>Lead Generation Channel  </p>
                                    <p>Link your leads with lead source, run reports, and keep track of your leads.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="setting-info-container flex-grow-1 mt-2">
                        {
                            personalInfoTab === true && <SettingPersonalInfo />
                        }
                        {
                            loginInfoTab === true && <SettingLoginInfo />
                        }
                        {
                            companyInfoTab === true && <SettingCompanyInfo />
                        }
                        {
                            regionInfoTab === true && <SettingRegion />
                        }
                        {
                            userRoleInfoTab === true && <SettingAddUserRole />
                        }
                        {
                            subInfoTab === true && <SettingSubscription />
                        }
                        {
                            paymentInfoTab === true && <SettingPaymentMethod />
                        }
                        {
                            portfolioInfoTab === true && <SettingPortfolio />
                        }
                        {
                            leadInfoTab === true && <SettingLeadSource />
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting
