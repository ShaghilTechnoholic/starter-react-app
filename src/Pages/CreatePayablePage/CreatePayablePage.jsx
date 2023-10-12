import React from 'react'
import TitleTopBar from '../../Helpers/TitleTopBar'
import SideDrawer from '../../Components/SideDrawer/SideDrawer'
import CreatePayable from '../../Components/CreatePayable/CreatePayable'

const CreatePayablePage = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-sm-0 position-relative drawer-bg-primary">
                        <SideDrawer />
                    </div>
                    <div className="col-md-10 mt-3">
                        <div className="container-fluid">
                            <TitleTopBar topBarTitle='Create Payable' />
                        </div>
                        <CreatePayable />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePayablePage
