import React from 'react'
import Accounting from '../../Components/Accounting/Accounting'
import TitleTopBar from '../../Helpers/TitleTopBar'
import SideDrawer from '../../Components/SideDrawer/SideDrawer'
import LeaseDetails from '../../Components/LeaseDetails/LeaseDetails'
const LeaseDetailsPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-sm-0 position-relative drawer-bg-primary">
                        <SideDrawer />
                    </div>
                    <div className="col-md-10 mt-3">
                        <div className="container-fluid">
                            <TitleTopBar topBarTitle={'Lease Details'} />
                        </div>
                        <LeaseDetails />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeaseDetailsPage