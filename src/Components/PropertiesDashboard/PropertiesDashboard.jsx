import React, { useState } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import notificationIcon from '../../assets/bell-01.png'
import searchIcon from '../../assets/New icons (7).png'
import helpIcon from '../../assets/Help icon.png'
import filterIcon from '../../assets/filter.png'
import plusIcon from '../../assets/plus.png'
import plusIconOrange from '../../assets/plus-orange.png'
import CloudImg from '../../assets/Illustration.png'
import { Link, useNavigate } from 'react-router-dom'
import TitleTopBar from '../../Helpers/TitleTopBar'
import PropertiesDashboardListView from '../PropertiesDashboardListView/PropertiesDashboardListView'
const PropertiesDashboard = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <>

            <div className="container-fluid bg-white p-3 main-screen-properties-dashboard">
                <PropertiesDashboardListView />
                <div className="text-center main-screen-properties-content d-none">
                    <img src={CloudImg} alt="" />
                    <p className="property-main-text">No properties found</p>
                    <p className="property-sub-text">No properties were found; the folder is empty.<br />Please try again.</p>
                    <button className="add-property-btn-white" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src={isHovered ? plusIcon : plusIconOrange} className="add-property-icon-white" /> Add Property</button>
                </div>
            </div>
        </>
    )
}

export default PropertiesDashboard