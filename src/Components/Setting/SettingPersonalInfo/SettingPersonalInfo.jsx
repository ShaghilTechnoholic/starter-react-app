import React, { useState } from 'react'
import avatar from "../../../assets/Avatar.png"
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import PhoneInput from 'react-phone-input-2'
import { Select } from 'antd';
const { Dragger } = Upload;
const SettingPersonalInfo = () => {

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
            <p className="heading">
                Personal info
            </p>
            <p className='mb-0'>Your Photo<span className="sign-up-imp-star">*</span></p>
            <p className='normal-grey-text'>This will be displayed on your profile.</p>
            <div className="photo-container d-flex align-items-start justify-content-between gap-4">
                <img src={avatar} alt="" />
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click to upload or drag and drop</p>
                    <p className="ant-upload-hint"> SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </Dragger>
            </div>
            <div className="row mt-3">
                <div className="col-md-4">
                    <span>First Name<span className="sign-up-imp-star">*</span></span>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                    <span>Middle Name<span className="sign-up-imp-star">*</span></span>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                    <span>Last Name<span className="sign-up-imp-star">*</span></span>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-6">
                    <span>Email<span className="sign-up-imp-star">*</span></span>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <span>Phone No<span className="sign-up-imp-star">*</span></span>
                    <PhoneInput
                        country={'us'}
                        value={'1'}
                        className='w-100'
                    />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-6">
                    <span>Address<span className="sign-up-imp-star">*</span></span>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <span>State<span className="sign-up-imp-star">*</span></span>
                    <Select
                        defaultValue="lucy"
                        style={{
                            width: '100%',
                        }}
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
                <div className="col-md-6">
                    <span>Zip code<span className="sign-up-imp-star">*</span></span>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                    <span>Country<span className="sign-up-imp-star">*</span></span>
                    <Select
                        defaultValue="lucy"
                        style={{
                            width: '100%',
                        }}
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

export default SettingPersonalInfo
