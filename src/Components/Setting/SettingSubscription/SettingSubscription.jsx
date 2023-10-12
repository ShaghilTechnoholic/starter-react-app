import React, { useState } from 'react'
import blackBoxStar from '../../../assets/star.png'
import whiteBoxWallet from '../../../assets/wallet-03.png'
import masterCard from '../../../assets/master-card.png'
import masterCardSm from '../../../assets/master-card-sm.png'

import { Radio } from 'antd';
const SettingSubscription = () => {
    // States
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [cvc, setCvc] = useState('');
    const [expiry, setExpiry] = useState('');
    const [creditCardName, setcreditCardName] = useState('');
    const [editCard, setEditCard] = useState(false)
    const [upgradePlan, setupgradePlan] = useState(false)
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
            <p className="heading">
                SUBSCRIPTION
            </p>
            <div className="setting-sub-box-container d-flex align-items-center gap-5 mt-4 justify-content-between">
                <div className="setting-sub-black-box">
                    <div className="sub-black-box-upper d-flex justify-content-between align-items-start p-3">
                        <div className="sub-black-box-text">
                            <span>Current Subscription Plan</span>
                            <p>$25.00</p>
                            <button
                                onClick={() => {
                                    setupgradePlan(true)
                                }}
                                className="sub-black-box-btn mt-5">Change Plan</button>
                        </div>
                        <div className="sub-black-box-img">
                            <img src={blackBoxStar} alt="" />
                        </div>
                    </div>
                </div>
                <div className="setting-sub-white-box">
                    <div className="sub-white-box-upper d-flex justify-content-between align-items-start p-3">
                        <div className="sub-black-box-text">
                            <span>Current Subscription Plan</span>
                            <p>$15.00 <span className='primary-orange-text'>(Pros Service)</span>  </p>
                            <button className="sub-white-box-btn mt-5">Manage Payment </button>
                        </div>
                        <div className="sub-black-box-img">
                            <img src={whiteBoxWallet} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-payment-box mt-3">
                <div className="sub-payment-heading d-flex align-items-center justify-content-between">
                    <p className="heading">
                        SUBSCRIPTION
                    </p>

                    <button
                        onClick={() => {
                            setEditCard(!editCard)
                        }}
                        className="sub-payment-edit-btn">
                        Edit
                        <span className="">
                            <svg width={20} height={20} fill="none" stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </span>
                    </button>
                </div>
                {
                    editCard === false ?
                        <div className="card-info-box d-flex align-items-center gap-3">
                            <div className="card-info-img">
                                <img src={masterCard} className='img-fluid' alt="" />
                            </div>
                            <div className="card-text">
                                <p className='drawer-text-grey '>Mastercard <span className='text-dark ms-3 f-italic'>5463 6273 **** **** </span></p>
                                <p className='drawer-text-grey mb-0'>Exp. Date <span className='text-dark ms-3 f-italic'>12/24</span></p>
                            </div>
                        </div>
                        :
                        <div className="card-edit-box border p-3 mt-3">
                            <div className="card-info-box d-flex align-items-center gap-3">
                                <div className="card-info-img">
                                    <Radio></Radio>    <img src={masterCardSm} className='img-fluid' alt="" />
                                </div>
                                <div className="card-text">
                                    <p className='drawer-text-grey mb-0'>Mastercard <span className='text-dark ms-3 f-italic'>5463 6273 **** **** </span></p>
                                </div>
                            </div>
                            <div className="info-card-input-fields p-4">
                                <div className="name-field mt-3 position-relative">
                                    <input
                                        onChange={(e) => setcreditCardName(e.target.value)}
                                        type="text" className="info-custom-field border-top-0 border-end-0 border-start-0 " />
                                    <span className={creditCardName.length > 0 ? 'translate-20 custom-place-holder' : 'custom-place-holder'}>Card Holder’s Name*</span>
                                </div>
                                <div className="card-number-field mt-3 position-relative">
                                    <input
                                        id="creditCard"
                                        value={creditCardNumber}
                                        onChange={handleCreditCardChange}
                                        maxLength="19"
                                        type="text" className="info-custom-field border-top-0 border-end-0 border-start-0 " />
                                    <span className={creditCardNumber.length > 0 ? 'translate-20 custom-place-holder' : 'custom-place-holder'}>Card Number*</span>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card-number-exp-field mt-3 position-relative">
                                            <input
                                                type="text"
                                                id="expiry"
                                                value={expiry}
                                                onChange={handleExpiryChange}
                                                maxLength="5" className="info-custom-field border-top-0 border-end-0 border-start-0 " />
                                            <span className={expiry.length > 0 ? 'translate-20 custom-place-holder' : 'custom-place-holder'}>Expiration Date*</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-number-cvv-field mt-3 position-relative">
                                            <input
                                                id="cvc"
                                                value={cvc}
                                                onChange={handleCvcChange}
                                                maxLength="3"
                                                type="password" className="info-custom-field border-top-0 border-end-0 border-start-0" />
                                            <span className={cvc.length > 0 ? 'translate-20 custom-place-holder' : 'custom-place-holder'}>CVV*</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div>
                                            <input type="checkbox" name="" id="" /> <span className='ms-2'>Save this card for a faster checkout next time</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <div>
                                            <button

                                                className="save-btn-outline">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }




            </div>
            <div className="row">
                <div className="col-md-6">
                    <button className="cancel-btn">Cancel</button>
                </div>
                <div className="col-md-6">
                    <button className="save-btn">Save</button>
                </div>
            </div>
        </>
    )
}

export default SettingSubscription
