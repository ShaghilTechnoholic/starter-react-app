import React from 'react'
import SideDrawer from '../../Components/SideDrawer/SideDrawer'
import TitleTopBar from '../../Helpers/TitleTopBar'
import PropertiesUnitsView from '../../Components/PropertiesUnitsView/PropertiesUnitsView'

const PropertiesUnitsViewPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 p-sm-0 position-relative drawer-bg-primary">
                        <SideDrawer />
                    </div>
                    <div className="col-md-10 mt-3">
                        <div className="container-fluid">
                            <TitleTopBar topBarTitle={'Unit Details'} />
                        </div>
                        <PropertiesUnitsView />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertiesUnitsViewPage