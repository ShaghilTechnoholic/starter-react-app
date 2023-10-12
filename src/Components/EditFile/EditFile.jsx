import React from 'react'
import SideDrawer from '../SideDrawer/SideDrawer';
import TitleTopBar from '../../Helpers/TitleTopBar';
import { Select } from 'antd';
import FileUploader from '../FileUploader/FileUploader';
const EditFile = () => {
    return (
        <>
            <div className="container-fluid bg-white p-3 h-100">
                <div className="row">
                    <div className="col-md-12">
                        <span>File Name<span className="sign-up-imp-star">*</span></span>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <span>Property<span className="sign-up-imp-star">*</span></span>
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
                <div className="row mt-3 text-center">
                    <div className="col-md-12">
                        <FileUploader fileHeight="height" fileWidth="width" />
                    </div>
                </div>
                <div className="row mt-3 text-center">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <button className="prev-btn">Cancel</button>
                        <button className="modal-save-btn">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditFile;