import React, { useState } from 'react'
import { Radio, Select, Switch } from 'antd';
import { DatePicker } from 'antd';
import { Table } from 'antd';
import { usePDF } from 'react-to-pdf';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Link } from 'react-router-dom';
import InvoiceModal from '../../Modals/InvoiceModal/InvoiceModal';
const { Dragger } = Upload;
const CreatePayable = () => {
    // States
    const { toPDF, targetRef } = usePDF({ filename: 'invoice.pdf' });
    const [openModal, setOpenModal] = useState(false);
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    // Modal Functions
    const onOpenModal = () => {
        setOpenModal(true)
    }
    const onCloseModal = () => {
        setOpenModal(false)
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
            {
                openModal === true && <InvoiceModal onClose={onCloseModal} />
            }

            <div className="container-fluid bg-white p-3">
                <div className="row">
                    <div className="col-md-4">
                        <span>Invoice No</span>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-4">
                        <span>Invoice Date</span>
                        <DatePicker className='lease-date-picker' onChange={onChange} />
                    </div>
                    <div className="col-md-4">
                        <span>Due Date</span>
                        <DatePicker className='lease-date-picker' onChange={onChange} />

                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <span>Select Tenant</span>
                        <Select
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
                <div className="row mt-3">
                    <div className="col-md-12">
                        <span>Select Bank Account</span>
                        <Select
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
                <p className="normal-grey-text my-3">BILLING DETAILS</p>
                <div className="row">
                    <div className="col-md-6">
                        <span>Full Name</span>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <span>Full Name</span>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <span>Address</span>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <span>Address</span>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <span>Phone no</span>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <span>Phone no</span>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <input type="checkbox" name="" id="" /> <span>Will your Billing and Shipping address same?</span>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="table-title-container p-2 ">
                            <div className="row">
                                <div className="col-md-3">
                                    <p className='mb-0'>#</p>
                                </div>
                                <div className="col-md-3">
                                    <p className='mb-0'>DESCRIPTION</p>
                                </div>
                                <div className="col-md-3">
                                    <p className='mb-0'>CATEGORY</p>
                                </div>
                                <div className="col-md-3">
                                    <p className='mb-0'>AMOUNT</p>
                                </div>
                            </div>

                        </div>
                        <div className="table-data-container">
                            <div className="row">
                                <div className="col-md-3"><p>1</p></div>
                                <div className="col-md-3">
                                    <div className="product-field">
                                        <span>Product Name</span>
                                        <input type="text" className="form-control mb-3" />
                                        <span >Product Details</span>
                                        <textarea name="" id="" cols="10" rows="5" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="category-field">
                                        <span>Select Category</span>
                                        <Select
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
                                <div className="col-md-3">
                                    <div className="amount-field">
                                        <span>Amount</span>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 text-start">
                        <button className="save-btn-outline primary-orange-text fw-bold">+ Add Item</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click to upload or drag and drop</p>
                            <p className="ant-upload-hint"> SVG, PNG, JPG or GIF (max. 800x400px)</p>
                        </Dragger>
                        <div className="mt-2">
                            <Radio></Radio> <span> One Time Invoice </span>
                            <Radio></Radio> <span> Recurring Invoice</span>

                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 ">
                        <span>Start Date<span className="sign-up-imp-star">*</span></span>
                        <div className="lease-date-picker-container d-flex justify-content-center align-items-end">
                            <DatePicker className='lease-date-picker' onChange={onChange} />
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <span>End Date<span className="sign-up-imp-star">*</span></span>
                        <div className="lease-date-picker-container d-flex justify-content-center align-items-end">
                            <DatePicker className='lease-date-picker' onChange={onChange} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <span>Frequency<span className="sign-up-imp-star">*</span></span>
                        <Select
                            placeholder="Select Frequency"
                            style={{
                                width: '100%',
                            }}
                            options={[
                                {
                                    value: 'Once a week',
                                    label: 'Once a week',
                                },
                                {
                                    value: 'Weekly',
                                    label: 'Weekly',
                                },
                                {
                                    value: 'Monthly',
                                    label: 'Monthly',
                                },
                                {
                                    value: 'Quarterly',
                                    label: 'Quarterly',
                                },
                                {
                                    value: 'Yearly',
                                    label: 'Yearly',
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 ">
                        <span>Number of Days until due</span>
                        <input type="text" placeholder='Number of Days' className="form-control" />
                    </div>
                    <div className="col-md-4 mt-4 pt-2">
                        <Switch></Switch> <span>Repeat Forever</span>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row mt-3">
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <Link className='text-dark td'>Save Invoice</Link>
                        </div>
                        <div className="col-md-6">
                            <div className="payables-btn d-flex align-items-center justify-content-end gap-3">
                                <button className="save-btn-outline primary-orange-text ">
                                    <span className="me-2">
                                        <svg width={21} height={21} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <path d="m7 10 5 5 5-5" />
                                            <path d="M12 15V3" />
                                        </svg>
                                    </span>
                                    Download
                                </button>
                                <button
                                    onClick={onOpenModal}
                                    className="save-btn w-50">
                                    <span className="me-2">
                                        <svg width={21} height={21} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 2 11 13" />
                                            <path d="m22 2-7 20-4-9-9-4 20-7z" />
                                        </svg>
                                    </span>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePayable
