import React from 'react'
import successIcon from '../../assets/Featured icon.png'
import { Link, useNavigate } from 'react-router-dom'
import cancelIcon from '../../assets/x-circle.png'
const PaymentSuccessModal = ({ success, onClose, message }) => {
    const navigate = useNavigate();
    const redirectPages = () => {
        if (!message) {
            navigate("/land-lord-dashboard")
        } else {
            navigate("/task-details")
        }
    }
    return (
        <>
            <div className="payment-modal-container ">
                <div className="payment-success-modal position-relative">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={successIcon} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>{message}{success}</p>
                        </div>
                    </div>
                    {
                        !message && <div className="row">
                            <div className="col-md-12 text-center">
                                <p>Your payment has been processed. Details of <br /> this transaction are available <Link className='text-dark'>here</Link> </p>
                            </div>
                        </div>
                    }
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <button onClick={() => {
                                onClose()
                                redirectPages()
                            }} className='create-accoutn-btn w-100 btn-box-shadow'>{success}</button>
                        </div>
                    </div>
                    {
                        message && <div onClick={onClose} className="cancel-modal-icon">
                            <img src={cancelIcon} alt="" />
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default PaymentSuccessModal
