import React, { useState } from 'react'
import SignUpLeftBanner from '../SignUpLeftBanner/SignUpLeftBanner'
import visaImg from '../../assets/visa-card-method.png'
import masterImg from '../../assets/master-card-method.png'
import CheckBox from '../../assets/_Checkbox base.png'
import CheckBoxActive from '../../assets/_Checkbox active.png'
import ProIcon from '../../assets/user-check-02.png'
import PaymentSuccessModal from '../../Modals/PaymentSuccessModal/PaymentSuccessModal'
const PaymentMethodSignUp = () => {
    // States
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [cvc, setCvc] = useState('');
    const [expiry, setExpiry] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [visaMethod, setVisaMethod] = useState(false)
    const [MasterMethod, setMasterMethod] = useState(false)
    // Modal Function
    const onOpenModal = () => {
        setOpenModal(true)
    }
    const onCloseModal = () => {
        setOpenModal(false)
    }
    // Credit Card field functions
    const handleCreditCardChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 0) {
            value = value.match(/.{1,4}/g).join('-'); // Add hyphens every four digits
        }
        setCreditCardNumber(value);
    };
    const handleCvcChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setCvc(value);
    };

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 0) {
            value = value.match(/.{1,2}/g).join('/'); // Add a slash between month and year
        }
        setExpiry(value);
    };
    return (
        <>
            {
                openModal === true ? <PaymentSuccessModal paymentSuccess="Successful Payment" success="Go To Dashboard" onClose={onCloseModal} /> : ""
            }

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <SignUpLeftBanner />
                    </div>
                    <div className="col-md-8">
                        <div className="container">
                            <div className="land-lord-right-heading text-start mt-5">
                                <h1>Add a payment method</h1>
                                <p>Create your account if not registered yet</p>
                            </div>
                            <div className="payment-method-selection border-bottom pb-3">
                                <p>Select payment method</p>
                                <div className="payment-select-img d-flex align-items-center gap-3">
                                    <div onClick={() => {
                                        setVisaMethod(true)
                                        setMasterMethod(false)
                                    }} className={visaMethod === true ? "visa-method-card active-payment-method  rounded" : "visa-method-card border  rounded"}>
                                        <img src={visaImg} alt="" />
                                    </div>
                                    <div onClick={() => {
                                        setVisaMethod(false)
                                        setMasterMethod(true)
                                    }} className={MasterMethod === true ? "master-method-card active-payment-method  rounded" : "master-method-card border  rounded"}>
                                        <img src={masterImg} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="payment-select-boxes mt-4">
                                <div className="payment-select-box active-box">
                                    <div className="payment-select-box-left d-flex gap-2 ">
                                        <img src={ProIcon} className='img-fluid object-fit-contain' alt="" />
                                        <div className="onboarding-box-text ">
                                            <span className="text-grey">Service Pros </span>  <span className="ms-3">$35/month</span>
                                            <br />
                                            Includes up to 10 users, 20GB indiviual   data and access to all features.
                                        </div>
                                    </div>
                                    <div className="onboarding-select-box-check-box">
                                        <img src={CheckBoxActive} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <span>Name on the card</span>
                                    <input placeholder='Olivia Rhye' type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <span>Card number</span>
                                    <input
                                        type="text"
                                        id="creditCard"
                                        className="form-control"
                                        value={creditCardNumber}
                                        onChange={handleCreditCardChange}
                                        maxLength="19"
                                        placeholder="1234 1234 1234 1234  "
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <span>Expiry</span>
                                    <input
                                        type="text"
                                        id="expiry"
                                        className="form-control"
                                        value={expiry}
                                        onChange={handleExpiryChange}
                                        maxLength="5"
                                        placeholder="06 / 2024"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <span>CVV</span>
                                    <input
                                        type="password"
                                        id="cvc"
                                        className="form-control"
                                        value={cvc}
                                        onChange={handleCvcChange}
                                        maxLength="3"
                                        placeholder="cvc"
                                    />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <input type="checkbox" name="" id="" /> <span>Save my card details</span>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-md-12 text-center">
                                    <button onClick={() => onOpenModal()} className='create-accoutn-btn w-50'>Pay Now </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethodSignUp
