import React from 'react'
import DigitalTenantLogo from '../../assets/Copy of DigitalTenant_Logo.png'
import { Table } from 'antd';
import { usePDF } from 'react-to-pdf';
const PayableOverview = () => {
    // States
    const { toPDF, targetRef } = usePDF({ filename: 'invoice.pdf' });
    // Table Data
    const columns = [
        {
            title: '#',
            dataIndex: 'index',
        },
        {
            title: 'DESCRIPTION',
            dataIndex: 'description',
        },
        {
            title: 'CATEGORY',
            dataIndex: 'category',
        },
        {
            title: 'AMOUNT',
            dataIndex: 'amount',
        },
    ];
    const data = [
        {
            key: '1',
            index: 1,
            description: 'Plumbing issues',
            category: '354 Gladwell Street PITTSBURGH, Pennsylvania(PA), 15283',
            amount: '$381.76',
        },
        {
            key: '2',
            index: 2,
            description: 'Plumbing issues',
            category: '354 Gladwell Street PITTSBURGH, Pennsylvania(PA), 15283',
            amount: '$281.76',
        },
    ];
    return (
        <>
            <div className="container-fluid bg-white p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="payable-overview-btn d-flex align-items-center gap-4">
                                <button onClick={() => toPDF()} className='modal-save-btn p-2'>
                                    <span className="">
                                        <svg width={21} height={21} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <path d="m7 10 5 5 5-5" />
                                            <path d="M12 15V3" />
                                        </svg>
                                    </span>
                                    Download
                                </button>
                                <button className='print-btn'>
                                    <span>
                                        <svg width={21} height={21} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9V2h12v7" />
                                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                            <path d="M6 14h12v8H6z" />
                                        </svg>
                                    </span>
                                    Print
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-over-view-container mt-3" ref={targetRef}>
                        <div className="invoice-heading d-flex justify-content-between align-items-baseline">
                            <div className="invoice-heading-text">
                                <p>Invoice Overview</p>
                            </div>
                            <div className="invoice-heading-img text-end">
                                <img src={DigitalTenantLogo} alt="" />
                                <p className='mb-0  normal-grey-text'>
                                    Peston Ave
                                </p>
                                <p className='mb-0  normal-grey-text'>
                                    534-1477 Non, Av. Bury St,10846
                                </p>
                                <p className='mb-0  normal-grey-text'>
                                    +(926) 317-7235
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <p className='normal-grey-text'>INVOICE NO</p>
                                <p className='text-dark fw-medium'>#TBS24301901</p>
                            </div>
                            <div className="col-md-3">
                                <p className='normal-grey-text'>DATE</p>
                                <p className='text-dark fw-medium'>28 Mar, 2023</p>
                            </div>
                            <div className="col-md-3">
                                <p className='normal-grey-text'>DUE DATE</p>
                                <p className='text-dark fw-medium'>06 Apr, 2023</p>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <p className='normal-grey-text'>BILLING DETAILS</p>
                                <p className='text-dark fw-medium'>Themesbrand</p>
                                <p className='text-dark fw-medium'>5114 Adipiscing St. Puno United States 46782</p>
                                <p className='text-dark fw-medium'>Phone: +(926) 817-7835</p>
                            </div>
                            <div className="col-md-6">
                                <p className='normal-grey-text'>COMPANY DETAILS</p>
                                <p className='text-dark fw-medium'>Quamar Payne</p>
                                <p className='text-dark fw-medium'>534-1477 Non, Av. Bury St. Edmunds France 10846</p>
                                <p className='text-dark fw-medium'>Phone: +(926) 817-7835</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <Table align="center" pagination={false} columns={columns} dataSource={data} size="middle" />
                                <hr />
                                <div className="row">
                                    <div className="col-md-12 text-end">
                                        <p className='fw-medium'> <span className='normal-grey-text'>Sub Total:</span>   $381.76</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-12 text-end">
                                        <p className='fw-medium'> <span className='normal-grey-text'>Total Amount:</span> $550</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-start">
                                        <p className='primary-orange-text fw-medium'> Thank You For your Business!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PayableOverview
