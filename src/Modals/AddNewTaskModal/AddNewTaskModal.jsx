import React, { useState } from 'react'
import { Select, Space } from 'antd';
import oval from '../../assets/Oval.png'
import { DatePicker } from 'antd';
import FileUploader from '../../Components/FileUploader/FileUploader';
const AddNewTaskModal = ({ onClose, onOpen }) => {
    const fileTypes = '.jpg, .png, .pdf'; // Example accepted file types

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
                        <h1>Add New Taks</h1>
                        <button onClick={onClose} className='modal-cancel-btn'>
                            <svg width={18} height={18} fill="#667085" stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 text-start">
                            <span>Tenant Property/Unit/Name<span className="sign-up-imp-star">*</span></span>
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
                            <p>Assigned To </p>
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
                        <div className="col-md-12 text-start">
                            <span>Title<span className="sign-up-imp-star">*</span></span>
                            <input type="text" className="form-control" />
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
                            <FileUploader handleChange={handleChangeFile} name="file" types={fileTypes} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="modal-check-box-container d-flex align-items-center">
                                <input type="checkbox" className='me-2' name="" id="" /> <span className='ms-2'>Assignee</span>
                                <input type="checkbox" className='ms-2' name="" id="" /> <span className='ms-2'>Notify Tenant</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button
                                onClick={() => {
                                    onOpen()
                                    onClose()
                                }}
                                className="modal-save-btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewTaskModal
