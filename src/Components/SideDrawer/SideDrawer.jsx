import React, { useState } from 'react'
import Logo from '../../assets/Copy of DigitalTenant_WhiteLogo 1.png'
import sideDrawerHome from '../../assets/home.png'
import sideDrawerTags from '../../assets/tags.png'
import sideDrawerTasks from '../../assets/drawer-file-check-02.png'
import sideDrawerContact from '../../assets/drawer-user-circle.png'
import sideDrawerDocument from '../../assets/folders.png'
import sideDrawerChat from '../../assets/drawer--chat-icon.png'
import userProfile from '../../assets/user-profile-img.png'
import settingIcon from '../../assets/settings.png'
import logOutIcon from '../../assets/log-out-04.png'
import { NavLink, Link } from 'react-router-dom'
const SideDrawer = ({ landLord, property }) => {
    // States
    const [taskDropDown, settaskDropDown] = useState(false);
    const [contactDropDown, setcontactDropDown] = useState(false);
    const [documentDropDown, setdocumentDropDown] = useState(false);
    const [accountingDropDown, setaccountingDropDown] = useState(false);

    return (
        <>
            <div className="side-drawer-container drawer-bg-primary">
                <div className="side-drawer-logo text-center my-4">
                    <img src={Logo} alt="" />
                </div>
                <div className="side-drawer-invite-tenant">
                    <div className='side-drawer-invite-tenant-left'><p className='mb-0'>Invite new Tenant</p></div>
                    <div className='side-drawer-invite-tenant-right'><button>+</button></div>
                </div>
                <div className="side-drawer-menu mt-4">
                    <ul className='side-drawer-menu-list'>
                        <span className='drawer-text-grey '>MENU</span>
                        <NavLink to="/land-lord-dashboard"><li className='text-white d-flex align-items-center gap-3 mt-3 cursor list-menu'><img src={sideDrawerHome} alt="" />Dashboard</li></NavLink>
                    </ul>
                </div>
                <div className="side-drawer-app mt-4">
                    <ul className='side-drawer-app-list'>
                        <span className='drawer-text-grey'>APPS</span>
                        <NavLink to='/properties-dashboard'><li className='text-white d-flex align-items-center gap-3 mt-4 cursor list-app'><img src={sideDrawerTags} alt="" />Properties</li></NavLink>
                        <NavLink
                            to='/all-task'
                            onClick={() => {
                                settaskDropDown(!taskDropDown);
                                setcontactDropDown(false)
                                setdocumentDropDown(false)
                                setaccountingDropDown(false)
                            }}

                        >  <li className='text-white list-app mt-4'>
                                <img src={sideDrawerTasks} className='me-3 cursor' alt="" />Tasks
                            </li>
                        </NavLink>
                        <ul className={taskDropDown === true ? 'mt-3 list-app-dropdown-active ' : 'mt-3 list-app-dropdown'}>
                            <Link to='/all-work-order'> <li className='drawer-drop-down-text cursor'>Work Orders</li></Link>
                        </ul>
                        <li
                            onClick={() => {
                                setcontactDropDown(!contactDropDown);
                                settaskDropDown(false)
                                setdocumentDropDown(false)
                                setaccountingDropDown(false)
                            }}
                            className='text-white list-app mt-4'>
                            <img src={sideDrawerContact} className='me-3' alt="" />Contacts
                        </li>
                        <ul className={contactDropDown === true ? 'mt-3 list-app-dropdown-active ' : 'mt-3 list-app-dropdown'}>
                            <Link to='/all-prospect'><li className='mt-4 drawer-drop-down-text  cursor'>Prospects</li></Link>
                            <Link to='/all-tenants'><li className='mt-4 drawer-drop-down-text  cursor'>Tenants </li></Link>
                            <li className='mt-4 drawer-drop-down-text  cursor'>Vendors</li>
                        </ul>
                        <li
                            onClick={() => {
                                setdocumentDropDown(!documentDropDown);
                                setcontactDropDown(false)
                                settaskDropDown(false)
                                setaccountingDropDown(false)
                            }}
                            className='text-white list-app mt-4'>
                            <img src={sideDrawerDocument} className='me-3' alt="" />Documentation
                        </li>
                        <ul className={documentDropDown === true ? 'mt-3 list-app-dropdown-active ' : 'mt-3 list-app-dropdown'}>
                            <Link to='/all-reports'>  <li className='mt-4 drawer-drop-down-text  cursor'>Reports</li></Link>
                            <Link to='/all-files'>  <li className='mt-4 drawer-drop-down-text cursor' >Files  </li></Link>
                            <Link to='/all-lease'>  <li className='mt-4 drawer-drop-down-text  cursor'>Leases</li></Link>
                        </ul>
                        <NavLink to='/chat'><li className='text-white d-flex align-items-center gap-3 mt-3 cursor list-app'><img src={sideDrawerChat} alt="" />Chat</li></NavLink>
                        <NavLink to='/accounting'> <li
                            onClick={() => {
                                setaccountingDropDown(!accountingDropDown);
                                setcontactDropDown(false)
                                settaskDropDown(false)
                                setdocumentDropDown(false);
                            }}
                            className='text-white list-app mt-4'>
                            <img src={sideDrawerTasks} className='me-3' alt="" />Accounting
                        </li>
                        </NavLink>
                        <ul className={accountingDropDown === true ? 'mt-3 list-app-dropdown-active ' : 'mt-3 list-app-dropdown'}>
                            <Link to='/mileage'> <li className='mt-4 drawer-drop-down-text  cursor'>Mileage</li></Link>
                        </ul>
                        <NavLink to='/payable'>
                            <li className='text-white d-flex align-items-center list-app gap-3 mt-4 cursor'><img src={sideDrawerTags} alt="" />Payables</li>
                        </NavLink>
                    </ul>
                </div>
                <div className={"log-out-dashboard-container-dashboard primary-bg d-flex gap-2"}>
                    <div className="log-out-dashboard-img mt-2">
                        <img src={userProfile} alt="" />
                    </div>
                    <div className="log-out-dashboard-text mt-2">
                        <span className='text-white'>Olivia Jack</span>
                        <Link to='/settings'><p className='text-white'> <img src={settingIcon} alt="" /> Setting</p></Link>
                    </div>
                    <div className="ms-2 log-out-dashboard-button border-start d-flex justify-content-center align-items-center">
                        <span className='ms-4 cursor'>
                            <img src={logOutIcon} alt="" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideDrawer;
