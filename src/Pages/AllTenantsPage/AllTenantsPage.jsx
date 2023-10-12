import React from 'react'
import SideDrawer from '../../Components/SideDrawer/SideDrawer'
import TitleTopBar from '../../Helpers/TitleTopBar'
import AllTenants from '../../Components/AllTenants/AllTenants'

const AllTenantsPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-sm-0 position-relative drawer-bg-primary">
                        <SideDrawer />
                    </div>
                    <div className="col-md-10 mt-3">
                        <div className="container-fluid">
                            <TitleTopBar topBarTitle='All Tenants' />
                        </div>
                        <AllTenants />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllTenantsPage