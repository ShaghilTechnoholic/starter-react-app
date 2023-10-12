import React, { useState } from 'react'
import avatar from '../../assets/Avatar.png'
import fileUpload from '../../assets/upload-cloud-02.png'
import arrowRight from '../../assets/chevron-right.png'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload, DatePicker, Select, Switch } from 'antd';
import PhoneInput from 'react-phone-input-2'
import { useNavigate, Link } from 'react-router-dom';
const { Dragger } = Upload;

const AddTenantDetails = () => {
    // States
    const [currentStep, setCurrentStep] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const navigate=useNavigate();

    // Stepper Function
    const handleNext = () => {
        setCurrentStep(currentStep + 1);
        if (currentStep === 6) {
            setCurrentStep(1)
        }
    };
    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    // Modal Function
    const onOpenModal = () => {
        setOpenModal(true)
    }
    // Step 1 Back Button
    const handleBackButton=()=>{
        if(currentStep===1){
        navigate('/all-tenants')  
        }
        else{
            handlePrev();
        }
    }
    // Drag Drop Function
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange(info) {
            const { status } = info.file;
            console.log(status)
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <>
            <div className="container-fluid bg-white p-3">
                <div className="container">
                    <div className="stepper-container">
                        <div className={currentStep === 1 || currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 ? "step-1 stepper-active" : "step-1 stepper-inactive"}>1</div>
                        <div className={currentStep === 2 || currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 ? "step-2 stepper-active" : "step-2 stepper-inactive"}>2</div>
                        <div className={currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6 ? "step-3 stepper-active" : "step-3 stepper-inactive"}>3</div>
                        <div className={currentStep === 4 || currentStep === 5 || currentStep === 6 ? "step-4 stepper-active" : "step-4 stepper-inactive"}>4</div>
                        <div className={currentStep === 5 || currentStep === 6 ? "step-5 stepper-active" : "step-5 stepper-inactive"}>5</div>
                        <div className={currentStep === 6 ? "step-6 stepper-active" : "step-6 stepper-inactive"}>6</div>
                    </div>
                    <div className="stepper-heading-container tenant-details-stepper-heading-main mt-3">
                        <div className="tenant-details-stepper-heading">Personal Details</div>
                        <div className="tenant-details-stepper-heading">Emergency Info</div>
                        <div className="tenant-details-stepper-heading">Pet Info</div>
                        <div className="tenant-details-stepper-heading">Vehicle Info</div>
                        <div className="tenant-details-stepper-heading">Dependent Info</div>
                        <div className="tenant-details-stepper-heading">Notes</div>
                    </div>
                    <div className="stepper-content-container mt-4">
                        {
                            currentStep === 1 &&
                            (
                                <>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="stepper-content d-flex justify-content-between align-items-center">
                                                    <div className="stepper-content-text-content">
                                                        <p className="tenant-personal-details-title">Your Photo<span className="input-field-imp-star">*</span></p>
                                                        <p className="tenant-personal-details-text">This will be displayed on your profile.</p>
                                                    </div>
                                                    <div className="stepper-img">
                                                        <img src={avatar} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <Dragger {...props}>
                                                    <p className="ant-upload-drag-icon">
                                                        <span role="img" aria-label="inbox" class="anticon anticon-inbox">
                                                            <img src={fileUpload} alt="" />
                                                        </span>
                                                    </p>
                                                    <p className="ant-upload-text"><span className="ant-upload-text-unique">Click to upload</span> or drag and drop</p>
                                                    <p className="ant-upload-hint"> SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                                </Dragger>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">First Name<span className="input-field-imp-star">*</span></span>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">Middle Name<span className="input-field-imp-star">*</span></span>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">Last Name<span className="input-field-imp-star">*</span></span>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Email<span className="input-field-imp-star">*</span></span>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Phone No<span className="input-field-imp-star">*</span></span>
                                                <PhoneInput
                                                    country={'us'}
                                                    value={'1'}
                                                    className='w-100'
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Date of Birth</span>
                                                <DatePicker onChange={onChange} className="lease-date-picker" />
                                            </div>
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Gender</span>
                                                <Select 
                                                    defaultValue="Male"
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    onChange={handleChange}
                                                    options={[
                                                        {
                                                            value: 'Male',
                                                            label: 'Male',
                                                        },
                                                        {
                                                            value: 'Female',
                                                            label: 'Female',
                                                        },
                                                    ]}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-3">
                                                <span className="tenant-personal-details-title">Address<span className="input-field-imp-star">*</span></span>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-3">
                                                <span className="tenant-personal-details-title">State<span className="input-field-imp-star">*</span></span>
                                                <Select
                                                    placeholder="Select State"

                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    options={[
                                                        {
                                                            value: 'Texas',
                                                            label: 'Texas',
                                                        },
                                                        {
                                                            value: 'Florida',
                                                            label: 'Florida',
                                                        }
                                                    ]}
                                                />
                                            </div>
                                            <div className="col-md-3">
                                                <span className="tenant-personal-details-title">Zip code<span className="input-field-imp-star">*</span></span>
                                                <input type="text" className="form-control" maxLength={6}/>
                                            </div>
                                            <div className="col-md-3">
                                                <span className="tenant-personal-details-title">Country<span className="input-field-imp-star">*</span></span>
                                                <Select
                                                    placeholder="Select Country"
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    options={[
                                                        {
                                                            value: 'United States',
                                                            label: 'United States',
                                                        },
                                                        {
                                                            value: 'Canada',
                                                            label: 'Canada',
                                                        }
                                                    ]}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Property<span className="input-field-imp-star">*</span></span>
                                                <Select
                                                    placeholder="Select Property"
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    options={[
                                                        {
                                                            value: 'Property One',
                                                            label: 'Property One',
                                                        },
                                                        {
                                                            value: 'Property Two',
                                                            label: 'Property Two',
                                                        }
                                                    ]}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Rent Amount<span className="input-field-imp-star">*</span></span>
                                                <div className="rent-amount-input-container position-relative">
                                                    <input type="text" className="form-control" />
                                                    <div className="dollar-sign-box">$</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">Lease Term</span>
                                                <Select
                                                    placeholder="Select Lease Term"
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    options={[
                                                        {
                                                            value: 'Fixed Term',
                                                            label: 'Fixed Term',
                                                        },
                                                        {
                                                            value: 'Month-to-Month',
                                                            label: 'Month-to-Month',
                                                        }
                                                    ]}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">Lease Term Start Date</span>
                                                <DatePicker onChange={onChange} className="lease-date-picker" placeholder="Select Start Date" />
                                            </div>
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">Lease Term End Date</span>
                                                <DatePicker onChange={onChange} className="lease-date-picker" placeholder="Select End Date" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <Switch onChange={onChange} /><span className="tenant-personal-details-switch-text">Rollover to “Month to Month” at the end of the term</span>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Upload documents</span>
                                                <Dragger {...props}>
                                                    <p className="ant-upload-drag-icon">
                                                        <span role="img" aria-label="inbox" class="anticon anticon-inbox">
                                                            <img src={fileUpload} alt="" />
                                                        </span>
                                                    </p>
                                                    <p className="ant-upload-text"><span className="ant-upload-text-unique">Click to upload</span> or drag and drop</p>
                                                    <p className="ant-upload-hint"> SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                                </Dragger>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Upload lease</span>
                                                <Dragger {...props}>
                                                    <p className="ant-upload-drag-icon">
                                                        <span role="img" aria-label="inbox" class="anticon anticon-inbox">
                                                            <img src={fileUpload} alt="" />
                                                        </span>
                                                    </p>
                                                    <p className="ant-upload-text"><span className="ant-upload-text-unique">Click to upload</span> or drag and drop</p>
                                                    <p className="ant-upload-hint"> SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                                </Dragger>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {
                            currentStep === 2 && (
                                <>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <span className="tenant-personal-details-title">First Name<span className="input-field-imp-star">*</span></span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-md-4">
                                            <span className="tenant-personal-details-title">Middle Name<span className="input-field-imp-star">*</span></span>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-md-4">
                                            <span className="tenant-personal-details-title">Last Name<span className="input-field-imp-star">*</span></span>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <span className="tenant-personal-details-title">Email<span className="input-field-imp-star">*</span></span>
                                            <input type="email" className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <span className="tenant-personal-details-title">Phone No<span className="input-field-imp-star">*</span></span>
                                            <PhoneInput
                                                country={'us'}
                                                value={'1'}
                                                className='w-100'
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <span className="tenant-personal-details-title">Relationship<span className="input-field-imp-star">*</span></span>
                                            <Select
                                                placeholder=""
                                                style={{
                                                    width: '100%',
                                                }}
                                                options={[
                                                    {
                                                        value: 'Father',
                                                        label: 'Father',
                                                    },
                                                    {
                                                        value: 'Mother',
                                                        label: 'Mother',
                                                    }
                                                ]}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <span className="tenant-personal-details-title">Description</span>
                                            <textarea name="" id="" cols="30" rows="10" className="form-control mt-3"></textarea>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                            <div className="col-md-12">
                                                <Link>
                                                    <svg width={21} height={21} fill="#EF6B3E" stroke="#EF6B3E" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 5v14" />
                                                        <path d="M5 12h14" />
                                                    </svg>
                                                    <span className="tenant-personal-details-additonal-text">Add Another Emergency Contact</span>
                                                </Link>
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
                                        <div className="row">
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Pet Type</span>
                                                <Select
                                                    placeholder="Pet Type"
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    options={[
                                                        {
                                                            value: 'Cats',
                                                            label: 'Cats',
                                                        },
                                                        {
                                                            value: 'Dogs',
                                                            label: 'Dogs',
                                                        }
                                                    ]}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Name</span>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Weight</span>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Breed</span>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <Link>
                                                    <svg width={21} height={21} fill="#EF6B3E" stroke="#EF6B3E" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 5v14" />
                                                        <path d="M5 12h14" />
                                                    </svg>
                                                    <span className="tenant-personal-details-additonal-text">Add Another Pet</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {
                            currentStep === 4 && (
                                <>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <span className="tenant-personal-details-title">Vehicles Type</span>
                                                <Select
                                                    placeholder="Automobile"
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    options={[
                                                        {
                                                            value: 'SUV',
                                                            label: 'SUV',
                                                        },
                                                        {
                                                            value: 'Sedan',
                                                            label: 'Sedan',
                                                        }
                                                    ]}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Make</span>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Model</span>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">Year</span>
                                                <DatePicker picker="year" onChange={onChange} className="lease-date-picker" placeholder="" />
                                            </div>
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">Color</span>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">License</span>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <Link>
                                                    <svg width={21} height={21} fill="#EF6B3E" stroke="#EF6B3E" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 5v14" />
                                                        <path d="M5 12h14" />
                                                    </svg>
                                                    <span className="tenant-personal-details-additonal-text">Add Another Vehicle</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {
                            currentStep === 5 && (
                                <>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">First Name<span className="input-field-imp-star">*</span></span>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">Middle Name<span className="input-field-imp-star">*</span></span>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-4">
                                                <span className="tenant-personal-details-title">Last Name<span className="input-field-imp-star">*</span></span>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Email<span className="input-field-imp-star">*</span></span>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className="col-md-6">
                                                <span className="tenant-personal-details-title">Phone No<span className="input-field-imp-star">*</span></span>
                                                <PhoneInput
                                                    country={'us'}
                                                    value={'1'}
                                                    className='w-100'
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <span className="tenant-personal-details-title">Relationship<span className="input-field-imp-star">*</span></span>
                                                <Select
                                                    placeholder=""
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    options={[
                                                        {
                                                            value: 'Father',
                                                            label: 'Father',
                                                        },
                                                        {
                                                            value: 'Mother',
                                                            label: 'Mother',
                                                        }
                                                    ]}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <span className="tenant-personal-details-title">Description</span>
                                                <textarea name="" id="" cols="30" rows="10" className="form-control mt-3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {
                            currentStep === 6 && (
                                <>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <span className="tenant-personal-details-title">Add Notes</span>
                                                <textarea name="" id="" cols="30" rows="10" className="form-control mt-3"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
                {/*<div className="stepper-btn property-details-next-btn-main d-flex justify-content-between gap-3">
                    {
                        currentStep === 1 ? <button onClick={handleNext} className="modal-save-btn next-btn-main w-100">Next<img src={arrowRight} /></button> :
                            <>
                                <button onClick={handlePrev} className="prev-btn w-50">Back</button>
                                <button onClick={currentStep === 6 ? onOpenModal : handleNext} className="modal-save-btn w-50">{currentStep === 3 ? "Finish" : "Next"}</button>
                            </>
                    }
                </div>*/}
                <div className="stepper-btn property-details-next-btn-main d-flex justify-content-between gap-3 mt-5">
                    <button onClick={handleBackButton} className="prev-btn w-50">Back</button>
                    <button onClick={currentStep === 6 ? onOpenModal : handleNext} className="modal-save-btn w-50">Next</button>
                </div>
            </div>
        </>
    )
}

export default AddTenantDetails