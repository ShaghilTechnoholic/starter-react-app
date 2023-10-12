import React, { useState } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import TitleTopBar from '../../Helpers/TitleTopBar';
import avatar from '../../assets/Avatar.png'
import FileUploader from '../../Components/FileUploader/FileUploader'
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Select } from 'antd';
import { DatePicker } from 'antd';
import ConvertTenantModal from '../../Modals/ConvertTenantModal/ConvertTenantModal';
import AddProspectModal from '../../Modals/AddProspectModal/AddProspectModal';
const AddProspectDetails = () => {
  // States
  const [currentStep, setCurrentStep] = useState(1);
  const [openModal, setOpenModal] = useState(false);
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
        openModal && <AddProspectModal onClose={onCloseModal} modalProspectTitle="Prospect Added Successfully" modalTitle="Go To Prospects" prospectModalText="Your prospect has been successfully added." />
      }
      <div className="container-fluid bg-white p-3">
        <div className="container">
          <div className="stepper-container">
            <div className={currentStep === 1 || currentStep === 2 || currentStep === 3 || currentStep === 4 ? "step-1 stepper-active" : "step-1 stepper-inactive"}>1</div>
            <div className={currentStep === 2 || currentStep === 3 || currentStep === 4 ? "step-2 stepper-active" : "step-2 stepper-inactive"}>2</div>
            <div className={currentStep === 3 || currentStep === 4 ? "step-3 stepper-active" : "step-3 stepper-inactive"}>3</div>
            <div className={currentStep === 4 ? "step-4 stepper-active" : "step-4 stepper-inactive"}>4</div>
          </div>
          <div className="stepper-heading-container mt-3">
            <div className="">Personal Details</div>
            <div className="">Pet Info</div>
            <div className="">Vehicle Info</div>
            <div className="">Dependent Info</div>
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
                            <p>Your Photo*</p>
                            <p>This will be displayed on your profile.</p>
                          </div>
                          <div className="stepper-img">
                            <img src={avatar} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <FileUploader />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-4">
                        <span>First Name<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-4">
                        <span>Middle Name<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-4">
                        <span>Last Name<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <span>Email<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-6">
                        <span>Phone No<span className="sign-up-imp-star">*</span></span>
                        <PhoneInput
                          country={'us'}
                          value={'1'}
                          className='w-100'
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <span>Company<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-6">
                        <span>Job Title<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-3">
                        <span>Address<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-3">
                        <span>State<span className="sign-up-imp-star">*</span></span>
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
                      <div className="col-md-3">
                        <span>Zip code<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-3">
                        <span>Country<span className="sign-up-imp-star">*</span></span>
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
                    <div className="row my-3">
                      <div className="col-md-12">
                        <span>Notes</span>
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
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6">
                        <span>Pet Type</span>
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
                      <div className="col-md-6">
                        <span>Name</span>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <span>Weight</span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-6">
                        <span>Breed</span>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Link className='primary-orange-text'>+ Add Another Pet</Link>
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
                      <div className="col-md-12">
                        <span>Vehicles Type</span>
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
                    <div className="row">
                      <div className="col-md-6">
                        <span>Make</span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-6">
                        <span>Model</span>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <span>Year</span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-4">
                        <span>Color</span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-4">
                        <span>License</span>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Link className='primary-orange-text'>+ Add Another Vehicle</Link>
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
                      <div className="col-md-4">
                        <span>First Name<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-4">
                        <span>Middle Name<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-4">
                        <span>Last Name<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <span>Date of Birth</span>
                        <DatePicker className='lease-date-picker' />
                      </div>
                      <div className="col-md-6">
                        <span>Relationship*</span>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Link className='primary-orange-text'>+ Add Another Dependents</Link>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          </div>
        </div>
        <div className="stepper-btn d-flex justify-content-between">
          {
            currentStep === 1 ? <button onClick={handleNext} className="modal-save-btn w-100">Next</button> :
              <>
                <button onClick={handlePrev} className="prev-btn">Back</button>
                <button onClick={currentStep === 4 ? onOpenModal : handleNext} className="modal-save-btn ">{currentStep === 4 ? "Save" : "Next"}</button>
              </>
          }
        </div>
      </div>
    </>
  )
}

export default AddProspectDetails
