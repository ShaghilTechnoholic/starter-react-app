import React, { useState } from 'react'
import TitleTopBar from '../../Helpers/TitleTopBar'
import SideDrawer from '../SideDrawer/SideDrawer'
import { Select } from 'antd';
import { DatePicker } from 'antd';
import FileUploader from '../FileUploader/FileUploader';
import ConvertTenantModal from '../../Modals/ConvertTenantModal/ConvertTenantModal';

const NewLease = () => {
    //States
    const [openModal, setOpenModal] = useState(false);
    // Modal Function
    const onOpenModal = () => {
        setOpenModal(true)
    }
    const onCloseModal = () => {
        setOpenModal(false)
    }
    // Form Input OnChanges
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <>
            {
                openModal && <ConvertTenantModal onClose={onCloseModal} modalTitle="Send Invite" leasePara="Invite your Tenant to the Tenant Portal" inviteLink="https://digitalcrm.teqdeft.in/contacs/" />
            }
            <div className="container-fluid bg-white p-3">
                <div className="row">
                    <div className="col-md-12">
                        <span className='fw-medium'>Select Property<span className="sign-up-imp-star">*</span></span>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: '100%',
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                {
                                    value: 'disabled',
                                    label: 'Disabled',
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <span className='fw-medium'>Select Unit<span className="sign-up-imp-star">*</span></span>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: '100%',
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                {
                                    value: 'disabled',
                                    label: 'Disabled',
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <span className='fw-medium'>Select Tenant<span className="sign-up-imp-star">*</span></span>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: '100%',
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                {
                                    value: 'disabled',
                                    label: 'Disabled',
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <span className='fw-medium'>Select Tenant<span className="sign-up-imp-star">*</span></span>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: '100%',
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                {
                                    value: 'disabled',
                                    label: 'Disabled',
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                    <div className="col-md-4 ">
                        <span>Lease Term Start Date</span>
                        <div className="lease-date-picker-container d-flex justify-content-center align-items-end">
                            <DatePicker className='lease-date-picker' onChange={onChange} />
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <span>Lease Term End Date</span>
                        <div className="lease-date-picker-container d-flex justify-content-center align-items-end">
                            <DatePicker className='lease-date-picker' onChange={onChange} />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4 ">
                        <span>First Rent Date</span>
                        <div className="lease-date-picker-container d-flex justify-content-center align-items-end">
                            <DatePicker className='lease-date-picker' onChange={onChange} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <span>Frequency</span>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: '100%',
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                {
                                    value: 'disabled',
                                    label: 'Disabled',
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                    <div className="col-md-4">
                        <span className='fw-medium'>Rent Amount<span className="sign-up-imp-star">*</span></span>
                        <div className="rent-amount-input-container position-relative">
                            <input type="text" className="form-control" />
                            <div className="dollar-sign-box">
                                $
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <span>Frequency</span>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: '100%',
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                {
                                    value: 'disabled',
                                    label: 'Disabled',
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                    <div className="col-md-6">
                        <span className='fw-medium'>Amount</span>
                        <div className="rent-amount-input-container position-relative">
                            <input type="text" className="form-control" />
                            <div className="dollar-sign-box-2">
                                $
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <span>Late Fees</span>
                        <Select
                            defaultValue="lucy"
                            style={{
                                width: '100%',
                            }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                                {
                                    value: 'disabled',
                                    label: 'Disabled',
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                    <div className="col-md-6">
                        <span className='fw-medium'>Amount</span>
                        <div className="rent-amount-input-container position-relative">
                            <input type="text" className="form-control" />
                            <div className="dollar-sign-box-2">
                                $
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 d-flex justify-content-center">
                        <FileUploader />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 ">
                        <button onClick={onOpenModal} className='create-accoutn-btn w-100'>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewLease
