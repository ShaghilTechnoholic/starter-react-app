import React, { useState } from 'react'
import { Tabs } from 'antd';
import inProgressIcon from '../../assets/task-details-progress.png'
import DueDateIcon from '../../assets/task-details-due.png'
import settingIcon from '../../assets/three-dots.png';
import userImg from '../../assets/over-user-img.png';
import NotFound from '../../assets/not-found-img.png'
import FileUploader from '../FileUploader/FileUploader';
import documentIcon from '../../assets/document.png';
import { Table } from 'antd';
import oval from '../../assets/Oval.png'
import { NavLink } from 'react-router-dom'
import SearchBar from '../../Helpers/SearchBar';
const { TabPane } = Tabs;
const TaskDetails = () => {
    const [taskFilterDropdown, settaskFilterDropdown] = useState(false);
    const [selectionType, setSelectionType] = useState('checkbox');
    const columns = [
        {
            title: 'FILE NAME',
            dataIndex: 'filename',
            render: (text) => <> <img src={documentIcon} alt="" /> <a>{text}</a></>,
        },
        {
            title: 'Properties',
            dataIndex: 'property',
        },
        {
            title: 'OWNER',
            dataIndex: 'owner',
            render: (text) => <> <img src={oval} alt="" /> <span>{text}</span></>,

        },
        {
            title: 'DATE UPLOADED',
            dataIndex: 'uploadedDate',
        },
        {
            title: '',
            dataIndex: "setting",
            render: () => <img src={settingIcon} alt="" />
        },

    ];
    const data = [
        {
            key: '1',
            filename: 'Document screenshot.jpg',
            property: "354 Gladwell Street PITTSBURGH, Pennsylvania(PA), 15283",
            owner: 'Olivia Rhye',
            uploadedDate: '10/11/22',
        },
        {
            key: '2',
            filename: 'Document screenshot.jpg',
            property: "354 Gladwell Street PITTSBURGH, Pennsylvania(PA), 15283",
            owner: 'Olivia Rhye',
            uploadedDate: '10/11/22',
        },


    ];
    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    return (
        <>

            <div className="container-fluid bg-white p-3">
                <Tabs centered defaultActiveKey="1">
                    <TabPane tab="Overview" key="1">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="task-overview-tab-boxes p-3 position-relative">
                                    <div className="overview-box-img">
                                        <img src={DueDateIcon} alt="" />
                                    </div>
                                    <div className="over-view-box-text">
                                        <span>Due Date</span>
                                        <h3>10/11/22</h3>
                                    </div>
                                    <div className="setting-icon">
                                        <img src={settingIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="task-overview-tab-boxes p-3 position-relative">
                                    <div className="overview-box-img">
                                        <img src={inProgressIcon} alt="" />
                                    </div>
                                    <div className="over-view-box-text">
                                        <span>Status</span>
                                        <h2>in Progress</h2>
                                    </div>
                                    <div className="setting-icon">
                                        <img src={settingIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="task-overview-tab-boxes p-3 position-relative">
                                    <div className="overview-box-img">
                                        <img src={DueDateIcon} alt="" />
                                    </div>
                                    <div className="over-view-box-text">
                                        <span>Priority</span>
                                        <div className="priority-box mt-2">
                                            <h4>High Priority</h4>
                                        </div>
                                    </div>
                                    <div className="setting-icon">
                                        <img src={settingIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <div className="task-info-heading">
                                    <h4>TASK INFO</h4>
                                </div>
                                <div className="task-info-lists">
                                    <p><span className="task-info-list-span me-3">Title:</span>  Plumbing Issues</p>
                                    <p><span className="task-info-list-span me-3">Assigned To :</span> Joe walker</p>
                                    <p><span className="task-info-list-span me-3">Related To:</span> 4570 Griffin Street Phoenix, Arizona(AZ), 85003</p>
                                    <p><span className="task-info-list-span me-3">Unit:</span> 4570 Griffin Street Phoenix</p>
                                    <p><span className="task-info-list-span me-3">Description:</span> -</p>

                                </div>
                            </div>
                            <div className="col-md-6 text-end">
                                <img src={userImg} alt="" />
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Notes" key="2">
                        <SearchBar btnTitle="Add New Note" />
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <span className='fw-medium'>Note Name<span className="sign-up-imp-star">*</span></span>
                                <input type="text" className="form-control mt-3" />
                            </div>
                            <div className="col-md-12 mt-3">
                                <span className='fw-medium'>Write Your Note</span>
                                <textarea name="" id="" cols="30" rows="10" className="form-control mt-3"></textarea>
                            </div>
                            <div className="col-md-12 mt-3">
                                <FileUploader addNote={'add notes'} />
                            </div>
                        </div>
                        <div className="row mt-5 pt-5">
                            <div className="col-md-12">
                                <div className="notes-btn d-flex align-items-center justify-content-center gap-3">
                                    <button className="cancel-btn">Cancel</button>
                                    <button className="save-btn">Save</button>
                                </div>
                            </div>

                        </div>
                        <div className="not-found-container text-center d-none">
                            <img src={NotFound} alt="" />
                            <p><strong>No notes found</strong></p>
                            <p>No notes were found; the folder is empty. <br />
                                Please try again.</p>
                            <button className="not-found-add-task-btn primary-orange-text"><span className="plus"><svg width={21} height={21} fill="#EF6B3E" stroke="#EF6B3E" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                            </svg></span>Add Notes</button>
                        </div>
                    </TabPane>
                    <TabPane tab="Files" key="3">
                        <SearchBar btnTitle="Add New File" />
                        <div className="row">
                            <div className="col-md-12">
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={columns}
                                    dataSource={data}
                                />
                            </div>
                        </div>
                        <div className="not-found-container text-center d-none">
                            <img src={NotFound} alt="" />
                            <p><strong>No Files found</strong></p>
                            <p>No files were found; the folder is empty. <br />
                                Please try again.</p>
                            <button className="not-found-add-task-btn primary-orange-text"><span className="plus"><svg width={21} height={21} fill="#EF6B3E" stroke="#EF6B3E" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                            </svg></span>Add Files</button>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
}

export default TaskDetails
