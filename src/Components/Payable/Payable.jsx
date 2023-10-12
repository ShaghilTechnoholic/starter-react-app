import React, { useState } from 'react'
import leaseStatusIcon from '../../assets/lease-status.png'
import leaseRentIcon from '../../assets/lease-rent.png'
import leaseBalanceIcon from '../../assets/lease-balance.png'
import settingIcon from '../../assets/three-dots.png';
import SearchBar from '../../Helpers/SearchBar';
import { Table } from 'antd';
import settingBtn from '../../assets/more-vertical.png'
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import completeIcon from '../../assets/calendar-check-01.png'
import deleteIcon from '../../assets/trash-01.png'
import { useNavigate } from 'react-router-dom';
import dot from '../../assets/_Dot.png'
import dueDot from '../../assets/_red-Dot.png'
const Payable = () => {
    // States
    const [selectionType, setSelectionType] = useState('checkbox');
    const [key, setKey] = useState([])
    const navigate = useNavigate();
    // Data Table functions
    const data = [
        {
            key: '1',
            invoice: 'INV-24301901',
            name: "Olivia Rhye",
            phone: '+1 (555) 543-2109',
            task: 'Plumbing issues',
            amount: '$381.76',
            date: '12/3/22',
            status: '',
        },
        {
            key: '2',
            invoice: 'INV-24301901',
            name: "Olivia Rhye",
            phone: '+1 (555) 543-2109',
            task: 'Plumbing issues',
            amount: '$381.76',
            date: '12/3/22',
            status: '',
        },
        {
            key: '3',
            invoice: 'INV-24301901',
            name: "Olivia Rhye",
            phone: '+1 (555) 543-2109',
            task: 'Plumbing issues',
            amount: '$381.76',
            date: '12/3/22',
            status: '',
        },
        {
            key: '4',
            invoice: 'INV-24301901',
            name: "Olivia Rhye",
            phone: '+1 (555) 543-2109',
            task: 'Plumbing issues',
            amount: '$381.76',
            date: '12/3/22',
            status: '',
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
            title: 'INVOICE NO',
            dataIndex: 'invoice',
        },
        {
            title: 'NAME',
            dataIndex: 'name',
            render: (text) => <span>{text}</span>
        },
        {
            title: 'phone no',
            dataIndex: 'phone',
            render: (text) =>
                <>
                    <span>{text}</span>
                </>
        },
        {
            title: 'TASK',
            dataIndex: 'task',
            render: (text) => <>
                <span>{text}</span>
            </>
        },
        {
            title: 'AMOUNT',
            dataIndex: 'amount',
            render: (text) => <>
                <span>{text}</span>
            </>
        },
        {
            title: 'INVOICE DATE',
            dataIndex: 'date',
            render: (text) => <>
                <span>{text}</span>
                <br />
                <span>Due Date:3/12/-22</span>
            </>
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            render: (text, status) => <>
                <span className={status.key === '2' ? 'tenant-report-due-bar' : 'tenant-report-active-bar'}><img src={status.key === '2' ? dueDot : dot} alt="" className='me-1' />{status.key === '2' ? 'Overdue' : "Paid"}</span>
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
                                        navigate('/payable-overview')
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
    return (
        <>
            <div className="container-fluid bg-white p-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="task-overview-tab-boxes p-3 position-relative">
                            <div className="overview-box-img">
                                <img src={leaseBalanceIcon} alt="" />
                            </div>
                            <div className="over-view-box-text">
                                <span>Total Invoices</span>
                                <h3>8,945</h3>
                            </div>
                            <div className="setting-icon">
                                <img src={settingIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="task-overview-tab-boxes p-3 position-relative">
                            <div className="overview-box-img">
                                <img src={leaseStatusIcon} alt="" />
                            </div>
                            <div className="over-view-box-text">
                                <span>Paid Invoices</span>
                                <h2>4,519</h2>
                            </div>
                            <div className="setting-icon">
                                <img src={settingIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="task-overview-tab-boxes p-3 position-relative">
                            <div className="overview-box-img">
                                <img src={leaseRentIcon} alt="" />
                            </div>
                            <div className="over-view-box-text">
                                <span>Pending Invoice
                                </span>
                                <h3>2654</h3>
                            </div>
                            <div className="setting-icon">
                                <img src={settingIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="task-overview-tab-boxes p-3 position-relative">
                            <div className="overview-box-img">
                                <img src={leaseRentIcon} alt="" />
                            </div>
                            <div className="over-view-box-text">
                                <span>Overdue Invoice
                                </span>
                                <h3>54</h3>
                            </div>
                            <div className="setting-icon">
                                <img src={settingIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <SearchBar CreateLease="create-payable" btnTitle='Create New Invoice' />
                    </div>
                </div>
                <div className="row mt-3">
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
            </div>
        </>
    )
}

export default Payable
