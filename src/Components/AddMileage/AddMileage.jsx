import React, { useState } from 'react'
import { DatePicker } from 'antd';
import AccountAddSuccessModal from '../../Modals/AccountAddSuccessModal/AccountAddSuccessModal';
const AddMileage = () => {
    //States
    const [openModal, setOpenModal] = useState(false);
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    // Modal Function
    const onOpenModal = () => {
        setOpenModal(true)
    }
    const onCloseModal = () => {
        setOpenModal(false)
    }
    return (
        <>
            {
                openModal && <AccountAddSuccessModal onClose={onCloseModal} success="Success" message="Mileage added successfully" btnTitle={"Go to Mileage"} />
            }
            <div className="container-fluid bg-white p-3">
                <div className="row mt-3">
                    <div className="col-md-6">
                        <span>From<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <span>To<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <span>Business Name</span>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <span>Trip Date</span>
                        <DatePicker className='lease-date-picker' onChange={onChange} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <span>Purpose</span>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <span>Miles<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <span className='fw-medium'>Amount<span className="sign-up-imp-star">*</span></span>
                        <div className="rent-amount-input-container position-relative">
                            <input type="text" className="form-control" />
                            <div className="dollar-sign-box-2">
                                $
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-md-12">
                        <div className="notes-btn d-flex align-items-center justify-content-center gap-3">
                            <button className="cancel-btn">Back</button>
                            <button
                                onClick={onOpenModal}
                                className="save-btn">Save</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddMileage
