import React from 'react'
import successIcon from '../../assets/Featured icon.png'
import { Link, useNavigate } from 'react-router-dom'
import cancelIcon from '../../assets/x-circle.png'
const AddProspectModal = ({ prospectModalText, modalProspectTitle, modalTitle, onClose }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="payment-modal-container">
                <div className="payment-success-modal position-relative">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={successIcon} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>{modalProspectTitle ? modalProspectTitle : ""}</p>
                        </div>
                    </div> <div className="row">
                        <div className="col-md-12 text-center">
                            <p>{prospectModalText ? prospectModalText : ""}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button
                                onClick={() => {
                                    navigate("/all-prospect")
                                }}
                                className='create-accoutn-btn w-100 btn-box-shadow'>{modalTitle}</button>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            onClose()
                        }}
                        className="cancel-modal-icon cursor">
                        <img src={cancelIcon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProspectModal
