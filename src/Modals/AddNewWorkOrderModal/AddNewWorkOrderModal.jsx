import React, { useState } from 'react'
import { Select, Space } from 'antd';
import oval from '../../assets/Oval.png'
import { DatePicker } from 'antd';
import { Switch } from 'antd';
import { useNavigate } from 'react-router-dom';
const { RangePicker } = DatePicker;

const AddNewWorkOrderModal = ({ onClose }) => {
    const navigate = useNavigate()
    const fileTypes = '.jpg, .png, .pdf'; // Example accepted file types

    const onChangeSwitch = (checked) => {
        console.log(`switch to ${checked}`);
    };
    const [file, setFile] = useState(null);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const handleChangeFile = (files) => {
        // Handle the selected files here
        console.log('Selected files:', files);
    };
    return (
        <>

            <div className="payment-modal-container">
                <div className="payment-success-modal task-modal">
                    <div className="modal-heading d-flex justify-content-between align-items-center ">
                        <h1>Add Work Order</h1>
                        <button onClick={onClose} className='modal-cancel-btn'>
                            <svg width={18} height={18} fill="#667085" stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 text-start">
                            <span>Select Property<span className="sign-up-imp-star">*</span></span>
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: '100%',
                                }}
                                onChange={handleChange}
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
                    <div className="row mt-3">
                        <div className="col-md-12 text-start">
                            <p>Select Vendor </p>
                            <div className="assigned-task-candidate d-flex justify-content-between align-items-center mt-3">
                                <div className="candidate-img">
                                    <img src={oval} alt="" /> <span className='candidate-name'>David John</span>
                                </div>
                                <div className="candidate-add-btn">
                                    <button className="not-found-add-task-btn primary-orange-text fw-medium">Add</button>
                                </div>
                            </div>
                            <div className="assigned-task-candidate d-flex justify-content-between align-items-center mt-3">
                                <div className="candidate-img">
                                    <img src={oval} alt="" /> <span className='candidate-name'>David John</span>
                                </div>
                                <div className="candidate-add-btn">
                                    <button className="not-found-add-task-btn primary-orange-text fw-medium">Add</button>
                                </div>
                            </div>
                            <div className="assigned-task-candidate d-flex justify-content-between align-items-center mt-3">
                                <div className="candidate-img">
                                    <img src={oval} alt="" /> <span className='candidate-name'>David John</span>
                                </div>
                                <div className="candidate-add-btn">
                                    <button className="not-found-add-task-btn primary-orange-text fw-medium">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-4 text-start">
                            <span>Due Date<span className="sign-up-imp-star">*</span></span>
                            <Space direction="vertical">
                                <DatePicker onChange={onChange} />
                            </Space>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>Status<span className="sign-up-imp-star">*</span></span>
                            <br />
                            <Space direction="vertical">

                                <Select
                                    placeholder="Select Status"
                                    style={{
                                        width: '100%',
                                    }}
                                    onChange={handleChange}
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
                            </Space>
                        </div>
                        <div className="col-md-4 text-start">
                            <span>Priority<span className="sign-up-imp-star">*</span></span>
                            <Space direction="vertical">
                                <Select
                                    placeholder="Select Priority"
                                    style={{
                                        width: '100%',
                                    }}
                                    onChange={handleChange}
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
                            </Space>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="radio" name="" id="" /> <span className='ms-2 me-2'>One Time Work Order</span>
                            <input type="radio" name="" id="" /> <span className='ms-2 me-2'>Recurring Work Order</span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <span>Start Date / End Date<span className="sign-up-imp-star">*</span></span>
                            <br />
                            <DatePicker.RangePicker
                                className=''
                                style={{
                                    width: '100%',
                                }}
                            />

                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <span>Number of Days until due</span>
                            <br />
                            <input type="number" name="" className='form-control' id="" />

                        </div>
                        <div className="col-md-6">
                            <span>Frequency<span className="sign-up-imp-star">*</span></span>
                            <br />
                            <select className="form-select" aria-label="Default select example">
                                <option value="" selected disabled>Select Frequency</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <Switch defaultChecked onChange={onChange} /> <span>Repeat Forever</span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="work-modal-search-field">
                                <span>Subject<span className="sign-up-imp-star">*</span></span>
                                <input type="text" className="form-control" />
                            </div>
                        </div>

                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="work-order-modal-last-inputs d-flex align-items-center justify-content-between">
                                <div className="work-modal-last-check-box">
                                    <input type="checkbox" name="" id="" /> <span className='ms-3'>notify assignee(s)</span>
                                </div>
                                <button
                                    onClick={() => {
                                        onClose()
                                        navigate("/work-order")
                                    }}
                                    className="modal-save-btn">Save</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AddNewWorkOrderModal
