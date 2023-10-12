import React from 'react'
import { Select } from 'antd';
const SettingLeadSource = () => {
    return (
        <>
            <p className="heading">
                LEAD SOURCES
            </p>
            <p className='mb-0'>Link your leads with lead source, run reports, and keep track of your leads.</p>
            <p className='normal-grey-text'>Lorem ipsum dolor sit amet consectet.</p>
            <div className="row mt-3">
                <div className="col-md-12">
                    <span>Tag Name<span className="sign-up-imp-star">*</span></span>
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
                <div className="col-md-12">
                    <button className="save-btn-outline primary-orange-text">+ Add item</button>
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

export default SettingLeadSource
