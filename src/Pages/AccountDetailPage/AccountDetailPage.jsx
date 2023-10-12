import React from 'react'
import AccountDetails from '../../Components/AccountDetails/AccountDetails'
import TitleTopBar from '../../Helpers/TitleTopBar'
import SideDrawer from '../../Components/SideDrawer/SideDrawer'

const AccountDetailPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-sm-0 position-relative drawer-bg-primary">
                        <SideDrawer />
                    </div>
                    <div className="col-md-10 mt-3">
                        <div className="container-fluid">
                            <TitleTopBar topBarTitle={'Accounting'} />
                        </div>
                        <AccountDetails />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDetailPage
