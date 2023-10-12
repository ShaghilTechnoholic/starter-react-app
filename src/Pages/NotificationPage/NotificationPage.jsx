import React from 'react'
import SideDrawer from '../../Components/SideDrawer/SideDrawer'
import TitleTopBar from '../../Helpers/TitleTopBar'
import Notification from '../../Components/Notification/Notification'

const NotificationPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-sm-0 position-relative drawer-bg-primary">
                        <SideDrawer />
                    </div>
                    <div className="col-md-10 mt-3">
                        <div className="container-fluid">
                            <TitleTopBar topBarTitle='Notification' />
                        </div>
                        <Notification />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationPage