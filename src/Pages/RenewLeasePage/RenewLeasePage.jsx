import React from 'react'
import Accounting from '../../Components/Accounting/Accounting'
import TitleTopBar from '../../Helpers/TitleTopBar'
import SideDrawer from '../../Components/SideDrawer/SideDrawer'
import RenewLease from '../../Components/RenewLease/RenewLease'
const RenewLeasePage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-sm-0 position-relative drawer-bg-primary">
                        <SideDrawer />
                    </div>
                    <div className="col-md-10 mt-3">
                        <div className="container-fluid">
                            <TitleTopBar topBarTitle={'Renew Lease'} />
                        </div>
                        <RenewLease />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RenewLeasePage
