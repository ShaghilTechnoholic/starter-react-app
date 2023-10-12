import React, { useState } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import TitleTopBar from '../../Helpers/TitleTopBar';
import residentialIcon from '../../assets/country-house 1.png'
import commercialIcon from '../../assets/commercial-house.png'
import vacantLandIcon from '../../assets/vacant-land.png'
import singleFamilyIcon from '../../assets/country-house 2.png'
import multiFamilyIcon from '../../assets/country-house 3.png'
import condoIcon from '../../assets/country-house 3 (1).png'
import townHouseIcon from '../../assets/country-house 4.png'
import otherIcon from '../../assets/country-house 1 (1).png'
import officeIcon from '../../assets/country-house 2 (1).png'
import shoppingCenterIcon from '../../assets/country-house 3 (2).png'
import storageIcon from '../../assets/country-house 3 (3).png'
import parkingIcon from '../../assets/country-house 4 (1).png'
import unoccupiedLandIcon from '../../assets/country-house 2 (2).png'
import landUsePurposesIcon from '../../assets/country-house 1 (2).png'
import arrowRight from '../../assets/chevron-right.png'
import { Select } from 'antd';
import Multiselect from 'multiselect-react-dropdown';
import PropertyDetailsFileUploader from '../PropertyDetailsFileUploader/PropertyDetailsFileUploader';

const AddPropertyDetails = () => {
    // Choose Property Type states
    const [choosePropertyTypeResidential, setChoosePropertyTypeResidential] = useState(false);
    const [choosePropertyTypeCommercial, setChoosePropertyTypeCommercial] = useState(false);
    const [choosePropertyTypeVacantLand, setChoosePropertyTypeVacantLand] = useState(false);

    const [residentialSingleFamily, setResidentialSingleFamily] = useState(false);
    const [residentialMultiFamily, setResidentialMultiFamily] = useState(false);
    const [residentialCondo, setResidentialCondo] = useState(false);
    const [residentialTownHouse, setResidentialTownHouse] = useState(false);
    const [residentialOther, setResidentialOther] = useState(false);

    const [commercialOffice, setCommercialOffice] = useState(false);
    const [commercialShoppingCenter, setCommercialShoppingCenter] = useState(false);
    const [commercialStorage, setCommercialStorage] = useState(false);
    const [commercialParking, setCommercialParking] = useState(false);
    const [commercialOther, setCommercialOther] = useState(false);

    const [unoccupiedLand, setUnoccupiedLand] = useState(false);
    const [landUsePurposes, setLandUsePurposes] = useState(false);

    const [options, setOptions] = useState([]);

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
            <div className="container-fluid bg-white p-3">
                <div className="container">
                    <div className="stepper-container">
                        <div className={currentStep === 1 || currentStep === 2 || currentStep === 3 ? "step-1 stepper-active" : "step-1 stepper-inactive"}>1</div>
                        <div className={currentStep === 2 || currentStep === 3 ? "step-2 stepper-active" : "step-2 stepper-inactive"}>2</div>
                        <div className={currentStep === 3 ? "step-3 stepper-active" : "step-3 stepper-inactive"}>3</div>
                    </div>
                    <div className="stepper-heading-container property-details-stepper-heading-main mt-3">
                        <div className="property-details-stepper-heading">Property Type</div>
                        <div className="property-details-stepper-heading">Property Details</div>
                        <div className="property-details-stepper-heading">Unit Information</div>
                    </div>
                    <div className="stepper-content-container mt-4">
                        {
                            currentStep === 1 && (
                                <>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="stepper-content d-flex justify-content-between align-items-center">
                                                    <div className="stepper-content-text-content">
                                                        <div className="add-property-details-form">
                                                            <div className="add-property-details-form-title">
                                                                <p className="add-property-details-form-title-heading">Choose Property Type</p>
                                                            </div>
                                                            <div className="add-property-details-form-content">
                                                                <div
                                                                    onClick={() => {
                                                                        setChoosePropertyTypeResidential(true)
                                                                        setChoosePropertyTypeCommercial(false)
                                                                        setChoosePropertyTypeVacantLand(false)
                                                                    }}
                                                                    className={choosePropertyTypeResidential === true ? "add-property-details-form-content-residential mb-4 mt-4 property-active-form cursor " : " cursor add-property-details-form-content-residential mb-4 mt-4"}>
                                                                    <div className={choosePropertyTypeResidential === true ? "add-property-details-form-content-residential-icon property-form-icon-active-border" : "add-property-details-form-content-residential-icon"}>
                                                                        <img src={residentialIcon} className="add-property-details-icon" />
                                                                        <p className="add-property-details-text">Residential</p>
                                                                    </div>
                                                                    <div className="add-property-details-form-content-residential-text ms-3">
                                                                        <p className="add-property-details-form-content-residential-sub-text">The property itself can be a single-family home, townhouse, apartment, condominium unit, duplex, mobile home or even a boat.</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    onClick={() => {
                                                                        setChoosePropertyTypeResidential(false)
                                                                        setChoosePropertyTypeCommercial(true)
                                                                        setChoosePropertyTypeVacantLand(false)
                                                                    }}
                                                                    className={choosePropertyTypeCommercial === true ? "add-property-details-form-content-commercial mb-4 mt-4 property-active-form cursor " : " cursor add-property-details-form-content-commercial mb-4 mt-4"}>
                                                                    <div className={choosePropertyTypeCommercial === true ? "add-property-details-form-content-commercial-icon property-form-icon-active-border" : "add-property-details-form-content-commercial-icon"}>
                                                                        <img src={commercialIcon} className="add-property-details-icon" />
                                                                        <p className="add-property-details-text">Commercial</p>
                                                                    </div>
                                                                    <div className="add-property-details-form-content-commercial-text ms-3">
                                                                        <p>Commercial real estate differs from residential real estate because it has the potential to generate profit for the property owner through capital gain or rental income.</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    onClick={() => {
                                                                        setChoosePropertyTypeResidential(false)
                                                                        setChoosePropertyTypeCommercial(false)
                                                                        setChoosePropertyTypeVacantLand(true)
                                                                    }}
                                                                    className={choosePropertyTypeVacantLand === true ? "add-property-details-form-content-vacant-land mb-4 mt-4 property-active-form cursor " : " cursor add-property-details-form-content-vacant-land mb-4 mt-4"}>
                                                                    <div className={choosePropertyTypeVacantLand === true ? "add-property-details-form-content-vacant-land-icon property-form-icon-active-border" : "add-property-details-form-content-vacant-land-icon"}>
                                                                        <img src={vacantLandIcon} className="add-property-details-icon" />
                                                                        <p className="add-property-details-text">Vacant Land</p>
                                                                    </div>
                                                                    <div className="add-property-details-form-content-vacant-land-text ms-3">
                                                                        <p>Vacant land can vary depending on how it’s been classified with residential, commercial, industrial, and agricultural being most common.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {
                                                            choosePropertyTypeResidential === true && <div className="choose-property-type-residential-options text-center">
                                                                <div className="choose-property-type-residential-options-title">
                                                                    <p>Which Type Describes Your Property?</p>
                                                                </div>

                                                                <div className="choose-property-type-residential-options-icon">
                                                                    <div className="choose-property-type-residential-options-icon-list">
                                                                        <ul className="d-flex justify-content-between gap-3">
                                                                            <li
                                                                                onClick={() => {
                                                                                    setResidentialSingleFamily(true)
                                                                                    setResidentialMultiFamily(false)
                                                                                    setResidentialCondo(false)
                                                                                    setResidentialTownHouse(false)
                                                                                    setResidentialOther(false)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={singleFamilyIcon} alt="" /><p className={residentialSingleFamily === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>Single Family</p></li>
                                                                            <li
                                                                                onClick={() => {
                                                                                    setResidentialSingleFamily(false)
                                                                                    setResidentialMultiFamily(true)
                                                                                    setResidentialCondo(false)
                                                                                    setResidentialTownHouse(false)
                                                                                    setResidentialOther(false)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={multiFamilyIcon} alt="" /><p className={residentialMultiFamily === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>Multi Family</p></li>
                                                                            <li
                                                                                onClick={() => {
                                                                                    setResidentialSingleFamily(false)
                                                                                    setResidentialMultiFamily(false)
                                                                                    setResidentialCondo(true)
                                                                                    setResidentialTownHouse(false)
                                                                                    setResidentialOther(false)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={condoIcon} alt="" /><p className={residentialCondo === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>Condo</p></li>
                                                                            <li
                                                                                onClick={() => {
                                                                                    setResidentialSingleFamily(false)
                                                                                    setResidentialMultiFamily(false)
                                                                                    setResidentialCondo(false)
                                                                                    setResidentialTownHouse(true)
                                                                                    setResidentialOther(false)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={townHouseIcon} alt="" /><p className={residentialTownHouse === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>Townhouse</p></li>
                                                                            <li
                                                                                onClick={() => {
                                                                                    setResidentialSingleFamily(false)
                                                                                    setResidentialMultiFamily(false)
                                                                                    setResidentialCondo(false)
                                                                                    setResidentialTownHouse(false)
                                                                                    setResidentialOther(true)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={otherIcon} alt="" /><p className={residentialOther === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>Other</p></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                        {
                                                            choosePropertyTypeCommercial === true && <div className="choose-property-type-residential-options text-center">
                                                                <div className="choose-property-type-residential-options-title">
                                                                    <p>Which Type Describes Your Property?</p>
                                                                </div>

                                                                <div className="choose-property-type-residential-options-icon">
                                                                    <div className="choose-property-type-residential-options-icon-list">
                                                                        <ul className="d-flex justify-content-between gap-3">
                                                                            <li
                                                                                onClick={() => {
                                                                                    setCommercialOffice(true)
                                                                                    setCommercialShoppingCenter(false)
                                                                                    setCommercialStorage(false)
                                                                                    setCommercialParking(false)
                                                                                    setCommercialOther(false)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={officeIcon} alt="" /><p className={commercialOffice === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>Office</p></li>
                                                                            <li
                                                                                onClick={() => {
                                                                                    setCommercialOffice(false)
                                                                                    setCommercialShoppingCenter(true)
                                                                                    setCommercialStorage(false)
                                                                                    setCommercialParking(false)
                                                                                    setCommercialOther(false)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={shoppingCenterIcon} alt="" /><p className={commercialShoppingCenter === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>Shopping Center</p></li>
                                                                            <li
                                                                                onClick={() => {
                                                                                    setCommercialOffice(false)
                                                                                    setCommercialShoppingCenter(false)
                                                                                    setCommercialStorage(true)
                                                                                    setCommercialParking(false)
                                                                                    setCommercialOther(false)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={storageIcon} alt="" /><p className={commercialStorage === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>Storage</p></li>
                                                                            <li
                                                                                onClick={() => {
                                                                                    setCommercialOffice(false)
                                                                                    setCommercialShoppingCenter(false)
                                                                                    setCommercialStorage(false)
                                                                                    setCommercialParking(true)
                                                                                    setCommercialOther(false)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={parkingIcon} alt="" /><p className={commercialParking === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>Parking</p></li>
                                                                            <li
                                                                                onClick={() => {
                                                                                    setCommercialOffice(false)
                                                                                    setCommercialShoppingCenter(false)
                                                                                    setCommercialStorage(false)
                                                                                    setCommercialParking(false)
                                                                                    setCommercialOther(true)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={otherIcon} alt="" /><p className={commercialOther === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>Other</p></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                        {
                                                            choosePropertyTypeVacantLand === true && <div className="choose-property-type-residential-options text-center">
                                                                <div className="choose-property-type-residential-options-title">
                                                                    <p>Which Type Describes Your Property?</p>
                                                                </div>

                                                                <div className="choose-property-type-residential-options-icon">
                                                                    <div className="choose-property-type-residential-options-icon-list">
                                                                        <ul className="d-flex justify-content-evenly gap-3">
                                                                            <li
                                                                                onClick={() => {
                                                                                    setUnoccupiedLand(true)
                                                                                    setLandUsePurposes(false)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={unoccupiedLandIcon} alt="" /><p className={unoccupiedLand === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>Unoccupied land awaiting development</p></li>
                                                                            <li
                                                                                onClick={() => {
                                                                                    setUnoccupiedLand(false)
                                                                                    setLandUsePurposes(true)
                                                                                }}
                                                                                className="list-style-none cursor"><img src={landUsePurposesIcon} alt="" /><p className={landUsePurposes === true ? "property-description-type-text property-description-type-text-active" : "property-description-type-text"}>land use purposes</p></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {
                            currentStep === 2 && (
                                <>
                                    <div className="container-fluid mt-4 mb-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <span className="property-details-input-title-main">Properties Information<span className="sign-up-imp-star">*</span></span>
                                                <PropertyDetailsFileUploader />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-12">
                                                <span className="property-details-input-title">Property Title<span className="sign-up-imp-star">*</span></span>
                                                <input type="text" className="form-control mt-3" required="required" />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-12">
                                                <span className="property-details-input-title">Property Status<span className="sign-up-imp-star">*</span></span>
                                                <Select
                                                    className="mt-3"
                                                    defaultValue=""
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    options={[
                                                        {
                                                            value: 'Active',
                                                            label: 'Active',
                                                        },
                                                        {
                                                            value: 'Not Active',
                                                            label: 'Not Active',
                                                        }
                                                    ]}
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-12">
                                                <span className="property-details-input-title">Select Amenities</span>
                                                <Multiselect
                                                    className="mt-3"
                                                    displayValue="key"
                                                    onKeyPressFn={function noRefCheck() { }}
                                                    onRemove={function noRefCheck() { }}
                                                    onSearch={function noRefCheck() { }}
                                                    onSelect={function noRefCheck() { }}
                                                    style={{
                                                        chips: { background: 'lightgray' },
                                                        //multiselectContainer: { width: '300px'},
                                                        optionContainer: {
                                                            maxHeight: '355px',
                                                        }
                                                    }}
                                                    options={[
                                                        {
                                                            cat: 'Column 1',
                                                            key: 'Club House'
                                                        },
                                                        {
                                                            cat: 'Column 1',
                                                            key: 'Door attendant'
                                                        },
                                                        {
                                                            cat: 'Column 1',
                                                            key: 'Fitness Center'
                                                        },
                                                        {
                                                            cat: 'Column 1',
                                                            key: 'Furnished Available'
                                                        },
                                                        {
                                                            cat: 'Column 1',
                                                            key: 'Garage - Detached'
                                                        },
                                                        {
                                                            cat: 'Column 1',
                                                            key: 'Grocery Service'
                                                        },
                                                        {
                                                            cat: 'Column 1',
                                                            key: 'High Speed'
                                                        },
                                                        {
                                                            cat: 'Column 1',
                                                            key: 'Jogging/Walking Trails'
                                                        },
                                                    ]}
                                                    showCheckbox
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-6">
                                                <span className="property-details-input-title">Bedroom<span className="sign-up-imp-star">*</span></span>
                                                <input type="number" className="form-control mt-3" />
                                            </div>
                                            <div className="col-md-6">
                                                <span className="property-details-input-title">Bathroom<span className="sign-up-imp-star">*</span></span>
                                                <input type="number" className="form-control mt-3" />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-6">
                                                <span className="property-details-input-title">SQFT<span className="sign-up-imp-star">*</span></span>
                                                <input type="number" className="form-control mt-3" />
                                            </div>
                                            <div className="col-md-6">
                                                <span className="property-details-input-title">Rent Amount<span className="sign-up-imp-star">*</span></span>
                                                <div className="rent-amount-input-container position-relative">
                                                    <input type="text" className="form-control mt-3" />
                                                    <div className="dollar-sign-box">$</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-3">
                                                <span className="property-details-input-title">Address<span className="sign-up-imp-star">*</span></span>
                                                <input type="text" className="form-control mt-3" />
                                            </div>
                                            <div className="col-md-3">
                                                <span className="property-details-input-title">Country<span className="sign-up-imp-star">*</span></span>
                                                <Select
                                                    className="mt-3"
                                                    placeholder="Select Country"

                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    options={[
                                                        {
                                                            value: 'USA',
                                                            label: 'USA',
                                                        },
                                                        {
                                                            value: 'Canada',
                                                            label: 'Canada',
                                                        }
                                                    ]}
                                                />
                                            </div>
                                            <div className="col-md-3">
                                                <span className="property-details-input-title">State<span className="sign-up-imp-star">*</span></span>
                                                <Select
                                                    className="mt-3"
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
                                                <span className="property-details-input-title">Zip code<span className="sign-up-imp-star">*</span></span>
                                                <input type="text" className="form-control mt-3" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {
                            currentStep === 3 && (
                                <>
                                    <div className="container-fluid mt-4 mb-4">
                                        <div className="row mt-4">
                                            <div className="col-md-12">
                                                <span className="property-details-input-title">Unit Information<span className="sign-up-imp-star">*</span></span>
                                                <input type="number" className="form-control mt-3" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="stepper-btn property-details-next-btn-main d-flex justify-content-between gap-3">
                    {
                        currentStep === 1 ? <button onClick={handleNext} className="modal-save-btn next-btn-main w-100">Next<img src={arrowRight} /></button> :
                            <>
                                <button onClick={handlePrev} className="prev-btn w-50">Back</button>
                                <button onClick={currentStep === 3 ? onOpenModal : handleNext} className="modal-save-btn w-50">{currentStep === 3 ? "Finish" : "Next"}</button>
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default AddPropertyDetails