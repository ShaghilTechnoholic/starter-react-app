import React, { useState } from 'react'
import avatar from '../../assets/Avatar.png'
import FileUploader from '../../Components/FileUploader/FileUploader'
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Select } from 'antd';
import { DatePicker } from 'antd';
import { Switch } from 'antd';
import AccountAddSuccessModal from '../../Modals/AccountAddSuccessModal/AccountAddSuccessModal';
const AddAccount = () => {
    // States
    const [currentStep, setCurrentStep] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    // Modal Function
    const onOpenModal = () => {
        setOpenModal(true)
    }
    const onCloseModal = () => {
        setOpenModal(false)
    }
    // Stepper Function
    const handleNext = () => {
        setCurrentStep(currentStep + 1);
        if (currentStep === 4) {
            setCurrentStep(1)
        }
    };
    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };
    return (
        <>
            {
                openModal && <AccountAddSuccessModal successAccount="Connect to Bank" onClose={onCloseModal} />
            }
            <div className="container-fluid bg-white  p-3">
                <div className="stepper-container">
                    <div className={currentStep === 1 || currentStep === 2 || currentStep === 3 ? "step-1 stepper-active" : "step-1 stepper-inactive"}>1</div>
                    <div className={currentStep === 2 || currentStep === 3 ? "step-2 stepper-active" : "step-2 stepper-inactive"}>2</div>
                    <div className={currentStep === 3 ? "step-3 stepper-active" : "step-3 stepper-inactive"}>3</div>

                </div>
                <div className="stepper-heading-container mt-3">
                    <div className="">Account Info</div>
                    <div className="">Property Info</div>
                    <div className="">Lease Options </div>
                </div>
                <div className="stepper-content-container mt-4">
                    {
                        currentStep === 1 &&
                        (
                            <>
                                <div className="container-fluid">
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <div className="stepper-content">
                                                <span>Type<span className="sign-up-imp-star">*</span></span>
                                                <Select
                                                    defaultValue="lucy"
                                                    style={{
                                                        width: '100%',
                                                    }}
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
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <span>Account Name<span className="sign-up-imp-star">*</span></span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <span>Description</span>
                                            <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    {
                        currentStep === 2 && (
                            <>
                                <div className="container-fluid mt-3">
                                    <div className="row ">
                                        <div className="col-md-12">
                                            <p className="fw-bold">Which property would you like to begin tracking your finances for with this account?</p>
                                            <p className="fw-light">Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <span>Property Title </span>
                                            <Select
                                                defaultValue="lucy"
                                                style={{
                                                    width: '100%',
                                                }}
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
                                </div>

                            </>
                        )
                    }
                    {
                        currentStep === 3 && (
                            <>
                                <div className="container-fluid">
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <p className="fw-bold">Which property would you like to begin tracking your finances for with this account?</p>
                                            <p className="fw-light">Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools</p>
                                            <Switch onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <p className="fw-bold">Uses account to make payment </p>
                                            <p className="fw-light">This will allow you to select this account when making payments. </p>
                                            <Switch onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <p className="fw-bold">Make this account primary</p>
                                            <p className="fw-light">This will allow you to select this account as primary. </p>
                                            <Switch onChange={onChange} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }

                </div>
                <div className="stepper-btn d-flex justify-content-between mt-3">
                    <button className="prev-btn">Back</button>
                    <button onClick={currentStep === 3 ? onOpenModal : handleNext} className="modal-save-btn ">{currentStep === 3 ? "Save" : "Next"}</button>

                </div>
            </div>
        </>
    )
}

export default AddAccount
