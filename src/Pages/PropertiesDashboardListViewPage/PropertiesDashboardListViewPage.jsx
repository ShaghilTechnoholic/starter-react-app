import React from 'react'
import Accounting from '../../Components/Accounting/Accounting'
import TitleTopBar from '../../Helpers/TitleTopBar'
import SideDrawer from '../../Components/SideDrawer/SideDrawer'
import PropertiesDashboardListView from '../../Components/PropertiesDashboardListView/PropertiesDashboardListView'

const PropertiesDashboardListViewPage = () => {
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
                        <PropertiesDashboardListView />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertiesDashboardListViewPage
