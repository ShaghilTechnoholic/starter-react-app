import React from 'react'
import { Select } from 'antd';
const SettingRegion = () => {
    return (
        <>
            <p className="heading">
                REGION & CURRENCY
            </p>
            <p className='mb-0'>Select Region & Currency</p>
            <p className='normal-grey-text'>Lorem ipsum dolor sit amet consectet.</p>
            <div className="row mt-3">
                <div className="col-md-12">
                    <span>Region<span className="sign-up-imp-star">*</span></span>
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
                    <span>Currency<span className="sign-up-imp-star">*</span></span>
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

export default SettingRegion
