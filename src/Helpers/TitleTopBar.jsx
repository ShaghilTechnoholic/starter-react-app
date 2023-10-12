import React from 'react'
import notificationIcon from '../../src/assets/bell-01.png'
import helpIcon from '../../src/assets/Help icon.png'
import { useNavigate, Link } from 'react-router-dom'
const TitleTopBar = ({ topBarTitle, topBarTitleDetail, archiveBack }) => {
    const navigate = useNavigate();
    const redirecting = () => {
        if (archiveBack) {
            navigate(`/${archiveBack}`)
        }
    }
    return (
        <>
            <div className="row">
                <div className="top-heading-container d-flex align-items-center justify-content-between">
                    <div className="top-heading-h1">
                        <h1 className='fw-bold top-bar-heading'>{topBarTitleDetail && <span onClick={redirecting} className="me-2 cursor"><svg width={30} height={30} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m15 18-6-6 6-6" />
                        </svg></span>}{topBarTitle}{topBarTitleDetail}</h1>
                    </div>
                    <div className="dashboard-right-top-header">
                        <span className="notify-icon me-3">
                            <Link to="/notification"><img src={notificationIcon} alt="" /></Link>
                        </span>
                        <span className="help-icon">
                            <img src={helpIcon} alt="" />
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TitleTopBar
