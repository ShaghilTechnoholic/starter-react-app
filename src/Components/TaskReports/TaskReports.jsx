import React, { useState } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import TitleTopBar from '../../Helpers/TitleTopBar'
import searchIcon from '../../assets/search.png'
import FilterIcon from '../../assets/filter.png'
import { Select } from 'antd';
import calendarIcon from '../../assets/calendar.png'
import NotFound from '../../assets/not-found-img.png'
import { CSVLink, CSVDownload } from "react-csv";
import settingBtn from '../../assets/more-vertical.png'
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import completeIcon from '../../assets/calendar-check-01.png'
import deleteIcon from '../../assets/trash-01.png'
import oval from '../../assets/Oval.png'
import { useNavigate } from 'react-router-dom'
import { Divider, Radio, Table } from 'antd';
import { usePDF } from 'react-to-pdf';
import checkMark from '../../assets/check-mark.png'

const TaskReports = () => {
    // States
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    const [selectionType, setSelectionType] = useState('checkbox');
    const [exportDropdown, setExportDropdown] = useState(false)
    const [taskFilterDropdown, settaskFilterDropdown] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [key, setKey] = useState([])
    const navigate = useNavigate()
    // Modal Function
    const onOpenModal = () => {
        setOpenModal(true)
    }
    const onCloseModal = () => {
        setOpenModal(false)
    }
    // Data Table functions
    const data = [
        {
            key: '1',
            title: 'Plumbing issues',
            assign: "Joe Walker",
            due: '5/4/2023',
            related: '1500 Marilla St, TX 75201',
        },
        {
            key: '2',
            title: 'Plumbing issues',
            assign: "Joe Walker",
            due: '5/4/2023',
            related: '1500 Marilla St, TX 75201',
        },
        {
            key: '3',
            title: 'Plumbing issues',
            assign: "Joe Walker",
            due: '5/4/2023',
            related: '1500 Marilla St, TX 75201',
        },
        {
            key: '4',
            title: 'Plumbing issues',
            assign: "Joe Walker",
            due: '5/4/2023',
            related: '1500 Marilla St, TX 75201',
        },

    ];
    const handleIconClick = (result) => {
        // Toggle the dropdownOpen state
        const filterData = data.filter((item) => {
            return item.key === result
        })
        setKey(filterData[0].key)
        if (key === result) {
            setKey(null);
        } else {
            setKey(result);
        }
    };
    const columns = [
        {
            title: 'TITLE',
            dataIndex: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'ASSIGNED TO',
            dataIndex: 'assign',
            render: (text) => <>  <span>{text}</span></>,
        },
        {
            title: 'DUE AT',
            dataIndex: 'due',
            render: (text, due) =>
                <>

                    {due.key === '1' && <p className="due-label pb-0 mb-0"></p>}
                    {due.key === '2' && <p className="completed-label pb-0 mb-0"></p>}
                    {due.key === '3' && <p className="not-started-label pb-0 mb-0"></p>}
                    {due.key === '4' && <p className="not-started-label pb-0 mb-0"></p>}
                    <span>{text}</span>

                </>
        },
        {
            title: 'RELATED TO',
            dataIndex: 'related',
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            render: (text, status) =>
                <>
                    {status.key === '1' && <span className='table-status-bar '>in Progress</span>}
                    {status.key === '2' && <span className='table-complete-status-bar '>Completed</span>}
                    {status.key === '3' && <span className='table-not-started-status-bar '>Not Started</span>}
                    {status.key === '4' && <span className='table-complete-status-bar '>Completed</span>}
                </>
        },
        {

            title: '',
            dataIndex: 'setting',
            render: (text, setting) =>
                <>
                    <div className='task-table-setting-container position-relative cursor'>
                        <img src={settingBtn} alt="" onClick={() => handleIconClick(setting.key)} />
                        {
                            setting.key === key &&
                            <div className='task-table-setting-dropdown bg-white box-shadow'>
                                <ul className='p-0 d-flex flex-column gap-3'>
                                    <li onClick={() => {
                                        navigate('/task-details')
                                    }} className='list-style-none'> <img src={viewIcon} alt="" /> View</li>
                                    <li className='list-style-none'> <img src={editIcon} alt="" /> Edit</li>
                                    <li className='list-style-none'> <img src={completeIcon} alt="" /> Complete</li>
                                    <li className='list-style-none'> <img src={deleteIcon} alt="" /> Delete</li>
                                </ul>
                            </div>
                        }

                    </div>
                </>
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
    }
    const routeHandleChange = (route) => {
        navigate(`/${route}`)
    }
    return (
        <>
            <div className="container-fluid bg-white p-3 h-100">
                <div className="row">
                    <div className="col-md-12">
                        <div className="task-search-input position-relative">
                            <input type="text" placeholder='Search' className="form-control search-form-control-task" />
                            <div className="search-icon-task">
                                <img src={searchIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <div className="report-type-text-container mt-3">
                            <span className="report-type-text ">Report Type</span>
                        </div>
                    </div>
                    <div className="col-md-6 text-end">
                        <div className="report-date">
                            <img src={calendarIcon} alt="" />  <span className='report-date-text'>Jan 6, 2022 – Jan 13, 2022</span>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6">
                        <div className="report-type-box d-flex gap-3 align-items-center">
                            <Select
                                defaultValue="Task Reports"
                                style={{
                                    width: '100%',
                                }}
                                onChange={routeHandleChange}
                                options={[
                                    {
                                        label: 'GENERAL REPORTS',
                                        options: [
                                            // {
                                            //     label: 'Lease Reports',
                                            //     value: 'Lease Reports',
                                            // },
                                            {
                                                label: 'Property Reports',
                                                value: 'property-reports',
                                            },
                                            {
                                                label: 'Tenant Reports',
                                                value: 'tenant-reports',
                                            },
                                            {
                                                label: 'Invoice Reports',
                                                value: 'invoice-reports',
                                            },
                                            {
                                                label: 'Task Reports',
                                                value: 'task-reports',
                                            },
                                        ],
                                    },
                                    {
                                        label: 'FINANCIAL REPORTS',
                                        options: [
                                            {
                                                label: 'General Ledger',
                                                value: 'General Ledger',
                                            },
                                            {
                                                label: 'Balance Sheet',
                                                value: 'Balance Sheet',
                                            },
                                            {
                                                label: 'Rent Roll',
                                                value: 'Rent Roll',
                                            },
                                            {
                                                label: 'Profit and Loss ',
                                                value: 'Profit and Loss ',
                                            },
                                        ],
                                    },
                                ]}
                            />
                            <div className="position-relative">
                                <button
                                    onClick={() => {
                                        settaskFilterDropdown(!taskFilterDropdown)
                                    }}
                                    className='filter-btn d-flex align-items-center'> <img src={FilterIcon} alt="" /> Filter</button>
                                <div className={taskFilterDropdown === true ? "filter-dropdown position-absolute" : "d-none"}>
                                    <div className="filter-checkbox-container">
                                        <strong style={{ fontSize: '12px' }}>FILTER BY</strong>
                                        <p>Name</p>
                                        <p>Phone no</p>
                                        <p>Type</p>
                                        <p>Address</p>
                                        <p>Tenant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-end">
                        <div className="report-export-buttons d-flex justify-content-end align-items-center gap-3">
                            <div className="export-btn-container position-relative">
                                <button
                                    onClick={() => {
                                        setExportDropdown(!exportDropdown)
                                    }}
                                    className="export-btn">Export as <span className=""><svg width={18} height={18} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg></span></button>
                                <div className={exportDropdown === true ? "export-dropdown box-shadow export-dropdown-show" : "export-dropdown box-shadow"}>
                                    <ul className='d-flex flex-column justify-content-start text-start gap-3 p-0 mb-0'>
                                        <li className='list-style-none'>Excel</li>
                                        <li onClick={() => toPDF()} className='list-style-none cursor'>PDF</li>
                                    </ul>
                                </div>
                            </div>
                            <CSVLink data={data} className="modal-save-btn">Download</CSVLink>
                        </div>
                    </div>
                </div>
                <div className="report-table-container mt-3" ref={targetRef}>
                    <Table
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                </div>
                <div className="not-found-container text-center d-none">
                    <img src={NotFound} alt="" />
                    <p><strong>No tasks found</strong></p>
                    <p>No tasks were found; the folder is empty. <br /> Please try again.</p>
                    <button className="not-found-add-task-btn primary-orange-text"><span className="plus"><svg width={21} height={21} fill="#EF6B3E" stroke="#EF6B3E" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                    </svg></span>Add Tasks</button>
                </div>
            </div>
        </>
    )
}

export default TaskReports
