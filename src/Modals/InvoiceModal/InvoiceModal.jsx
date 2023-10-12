import React from 'react'
import DigitalTenantLogo from '../../assets/Copy of DigitalTenant_Logo.png'
import cancelIcon from '../../assets/x-circle.png'
const InvoiceModal = ({ onClose }) => {
    return (
        <>
            <div className="payment-modal-container">
                <div className="payment-success-modal w-50 position-relative">
                    <div className="invoice-modal-top d-flex justify-content-between border-bottom align-items-center" >
                        <div className="invoice-modal-top-img">
                            <img src={DigitalTenantLogo} alt="" />
                        </div>
                        <div className="invoice-modal-top-info d-flex gap-3">
                            <div>
                                <p className='normal-grey-text'>INVOICE NO</p>
                                <p className='text-dark fw-medium'>#TBS24301901</p>
                            </div>
                            <div>
                                <p className='normal-grey-text'>DATE</p>
                                <p className='text-dark fw-medium'>28 Mar, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="email-container mt-2">
                        <p><span className="text-dark fw-bold">Email:</span>  Johnadmas@outlook.com</p>
                        <p> <span className="text-dark fw-bold">Subject:</span>  #TBS24301901 from John Adams (IT Company)</p>
                        <p className='dark-grey-text fw-bold'> <span className="text-dark "> Dear</span> John Adams,</p>
                        <p>
                            Please find attached your rent invoice with number #TBS24301901.
                            and Due Date: 02/03/2022 If you have any questions, please
                            let us know.
                        </p>
                        <p>
                            Have a great day and thank you for your business!
                        </p>
                        <p>
                            Sincerely
                        </p>
                        <p className='fw-bold text-dark'>
                            John Adams
                        </p>
                    </div>
                    <div className="button-container text-end">
                        <button className="save-btn w-auto">Save</button>
                    </div>
                    <div onClick={onClose} className="cancel-modal-icon cursor">
                        <img src={cancelIcon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvoiceModal
