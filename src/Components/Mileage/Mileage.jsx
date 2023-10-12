import React, { useState } from 'react'
import drive from '../../assets/lease-balance.png'
import mile from '../../assets/miles.png'
import deductions from '../../assets/deduction.png'
import settingIcon from '../../assets/three-dots.png';
import { useNavigate } from 'react-router-dom';
import { Select } from 'antd';
import { usePDF } from 'react-to-pdf';
import searchIcon from '../../assets/search.png'
import FilterIcon from '../../assets/filter.png'
import { CSVLink, CSVDownload } from "react-csv";
import settingBtn from '../../assets/more-vertical.png'
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import completeIcon from '../../assets/calendar-check-01.png'
import deleteIcon from '../../assets/trash-01.png'
import calendarIcon from '../../assets/calendar.png'
import { Table } from 'antd';
const Mileage = () => {
    // States
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    const [selectionType, setSelectionType] = useState('checkbox');
    const [exportDropdown, setExportDropdown] = useState(false)
    const [taskFilterDropdown, settaskFilterDropdown] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [key, setKey] = useState([])
    const navigate = useNavigate()

    // Data Table functions
    const data = [
        {
            key: '1',
            business: 'Lorem ipsum',
            from: "Michigan AveWayne, Michigan(MI), 48184",
            to: '701 Lindsay Hill RdQuilcene, Washington(WA), 98376',
            date: '9/9/22',
            amount: '$2300.00',
        },
        {
            key: '2',
            business: ' sit amet',
            from: "Bologna, Metropolitan City of Bologna, Italy",
            to: '2965 Johnstonville Susanville, California(CA), 96130',
            date: '10/12/23',
            amount: '$381.76',
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
            title: 'BUSINESS NAME',
            dataIndex: 'business',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'FROM',
            dataIndex: 'from',
            render: (text) => <>  <span>{text}</span></>,
        },
        {
            title: 'TO',
            dataIndex: 'to',
            render: (text, type) =>
                <>
                    <span>{text}</span>
                </>
        },
        {
            title: 'TRIP DATE',
            dataIndex: 'date',
        },
        {
            title: 'AMOUNT',
            dataIndex: 'amount',
            render: (text) => <span>{text}</span>
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
    };
    return (
        <>
            <div className="container-fluid bg-white p-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="task-overview-tab-boxes p-3 position-relative">
                            <div className="overview-box-img">
                                <img src={deductions} alt="" />
                            </div>
                            <div className="over-view-box-text">
                                <span>Total Deduction 2022</span>
                                <h3 className='error-text'>$532,00</h3>
                            </div>
                            <div className="setting-icon">
                                <img src={settingIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="task-overview-tab-boxes p-3 position-relative">
                            <div className="overview-box-img">
                                <img src={mile} alt="" />
                            </div>
                            <div className="over-view-box-text">
                                <span>Miles Driven 2022</span>
                                <p className="active-label pb-0 mb-0"></p>
                                <h2>2904</h2>
                            </div>
                            <div className="setting-icon">
                                <img src={settingIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="task-overview-tab-boxes p-3 position-relative">
                            <div className="overview-box-img">
                                <img src={drive} alt="" />
                            </div>
                            <div className="over-view-box-text">
                                <span>Drives 2022
                                </span>
                                <h2>2</h2>
                            </div>
                            <div className="setting-icon">
                                <img src={settingIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="report-type-box d-flex justify-content-between align-items-center gap-3">

                            <div className="task-search-input position-relative flex-grow-1">
                                <input type="text" placeholder='Search' className="form-control search-form-control-task" />
                                <div className="search-icon-task">
                                    <img src={searchIcon} alt="" />
                                </div>
                            </div>
                            <div className="report-date">
                                <img src={calendarIcon} alt="" />  <span className='report-date-text'>Jan 6, 2022 – Jan 13, 2022</span>
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
                                        <CSVLink className='text-dark' data={data}> <li className='list-style-none'>Excel</li></CSVLink>
                                        <li onClick={() => toPDF()} className='list-style-none cursor'>PDF</li>
                                    </ul>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    navigate("/add-mileage")
                                }}
                                className='add-new-task-btn'> <span ><svg width={21} height={21} fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5v14" />
                                    <path d="M5 12h14" />
                                </svg></span>Add Mileage</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="pdf-data-container" ref={targetRef}>
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
                </div>
            </div>
        </>
    )
}

export default Mileage
