import React from 'react'
import TitleTopBar from '../../Helpers/TitleTopBar'
import SideDrawer from '../../Components/SideDrawer/SideDrawer'
import AddPropertyDetails from '../../Components/AddPropertyDetails/AddPropertyDetails'
import AddAccount from '../../Components/AddAccount/AddAccount'

const AddAccountPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-sm-0 position-relative drawer-bg-primary">
                        <SideDrawer />
                    </div>
                    <div className="col-md-10 mt-3">
                        <div className="container-fluid">
                            <TitleTopBar topBarTitle={'Add Account'} />
                        </div>
                        <AddAccount />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAccountPage
