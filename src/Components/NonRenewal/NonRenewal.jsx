import React from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import TitleTopBar from '../../Helpers/TitleTopBar'
import { DatePicker } from 'antd';
const NonRenewal = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <>
            <div className="container-fluid bg-white h-100 p-3">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <span>Non Renewal<span className="sign-up-imp-star">*</span></span>
                        <DatePicker className='lease-date-picker' onChange={onChange} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <span>Description</span>
                        <textarea name="" className='form-control' id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 ">
                        <div className="btn-box d-flex align-items-end justify-content-center gap-3">
                            <button className='cancel-btn w-50'>Back</button>
                            <button className='create-accoutn-btn w-50'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NonRenewal
