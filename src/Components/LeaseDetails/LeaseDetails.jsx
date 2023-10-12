import React, { useState } from 'react'
import { Tabs } from 'antd';
import leaseStatusIcon from '../../assets/lease-status.png'
import leaseRentIcon from '../../assets/lease-rent.png'
import leaseBalanceIcon from '../../assets/lease-balance.png'
import settingIcon from '../../assets/three-dots.png';
import userImg from '../../assets/over-user-img.png';
import NotFound from '../../assets/not-found-img.png'
import FileUploader from '../FileUploader/FileUploader';
import { Table } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom'
import settingBtn from '../../assets/more-vertical.png'
import SearchBar from '../../Helpers/SearchBar';
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import whiteDot from '../../assets/_white-Dot.png'
import deleteIcon from '../../assets/trash-01.png'
import convertIcon from '../../assets/drop-down-user-icon.png'
const { TabPane } = Tabs;

const LeaseDetails = () => {
    const [taskFilterDropdown, settaskFilterDropdown] = useState(false);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [showPersonalInfo, setShowPersonalInfo] = useState(false)
    const [key, setKey] = useState([])
    const navigate = useNavigate()
    // Data Table Functions
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
            title: 'PROPERTY ADDRESS',
            dataIndex: 'property',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'DATE',
            dataIndex: 'date',
            render: (text) => <><span>{text}</span></>,
        },
        {
            title: 'TERM',
            dataIndex: 'term',
            render: (text, term) =>
                <>
                    <div className="table-status-bar">
                        {term.key === '1' && <><img src={whiteDot} alt="" /> <span>Fixed Term  </span></>}
                        {term.key === '2' && <><img src={whiteDot} alt="" /> <span>Month-to-Month </span></>}
                        {term.key === '3' && <><img src={whiteDot} alt="" /> <span>Month-to-Month </span></>}
                    </div>
                </>
        },
        {
            title: 'RENT',
            dataIndex: 'rent',
        },
        {
            title: 'DEPOSIT',
            dataIndex: 'deposit',
            render: (text) => <>
                <span >{text}</span>

            </>
        },
        {
            title: 'BALANCE',
            dataIndex: 'balance',
            render: (text) => <>
                <span >{text}</span>

            </>
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            render: (text, status) => <>
                {status.key === '1' &&
                    <>
                        <p className="expire-label pb-0 mb-0"></p>
                        <span className='text-dark'>About to Expire</span>
                        <br />
                        <span className='error-text '>23 days remaining</span>
                    </>
                }
                {status.key === '2' &&
                    <>
                        <p className="active-label pb-0 mb-0"></p>
                        <span className='primary-orange-text'>Active</span>
                    </>
                }
                {status.key === '3' &&
                    <>
                        <p className="expire-label pb-0 mb-0"></p>
                        <span className='text-dark'>About to Expire</span>
                        <br />
                        <span className='error-text'>8 days remaining</span>
                    </>
                }



            </>
        },
        {

            title: '',
            dataIndex: 'setting',
            render: (text, setting) =>
                <>
                    <div className='task-table-setting-container position-relative cursor'>
                        <img src={settingBtn} alt="" onClick={() => {
                            handleIconClick(setting.key)
                        }} />
                        {
                            setting.key === key &&
                            <div className='task-table-setting-dropdown-prospect bg-white box-shadow'>
                                <ul className='p-0 d-flex flex-column gap-3'>
                                    <li onClick={() => {
                                        setShowPersonalInfo(true)
                                    }} className='list-style-none'> <img src={viewIcon} alt="" /> View</li>
                                    <li className='list-style-none'> <img src={editIcon} alt="" /> Edit</li>
                                    <li className='list-style-none'> <img src={convertIcon} alt="" /> Convert to tenant</li>
                                    <li className='list-style-none'> <img src={deleteIcon} alt="" /> Delete</li>
                                </ul>
                            </div>
                        }

                    </div>
                </>
        },
    ];
    const data = [
        {
            key: '1',
            property: '295 Retton CirWilliamson',
            date: "12/11/22 -10/11/22",
            term: '',
            rent: '$875.00',
            deposit: '$1,055.00',
            balance: '$1,055.00',
            status: '',
        },
        {
            key: '2',
            property: '295 Retton CirWilliamson',
            date: "12/11/22 -10/11/22",
            term: '',
            rent: '$875.00',
            deposit: '$1,055.00',
            balance: '$1,055.00',
            status: '',
        },
        {
            key: '3',
            property: '295 Retton CirWilliamson',
            date: "12/11/22 -10/11/22",
            term: '',
            rent: '$875.00',
            deposit: '$1,055.00',
            balance: '$1,055.00',
            status: '',
        },

    ];
    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };
    return (
        <>
            <div className="container-fluid bg-white p-3 h-100">
                <Tabs centered defaultActiveKey="1">
                    <TabPane tab="Overview" key="1">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="task-overview-tab-boxes p-3 position-relative">
                                    <div className="overview-box-img">
                                        <img src={leaseBalanceIcon} alt="" />
                                    </div>
                                    <div className="over-view-box-text">
                                        <span>Balance</span>
                                        <h3>$1200</h3>
                                    </div>
                                    <div className="setting-icon">
                                        <img src={settingIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="task-overview-tab-boxes p-3 position-relative">
                                    <div className="overview-box-img">
                                        <img src={leaseStatusIcon} alt="" />
                                    </div>
                                    <div className="over-view-box-text">
                                        <span>Lease Status</span>
                                        <p className="active-label pb-0 mb-0"></p>
                                        <h2>Active</h2>
                                    </div>
                                    <div className="setting-icon">
                                        <img src={settingIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="task-overview-tab-boxes p-3 position-relative">
                                    <div className="overview-box-img">
                                        <img src={leaseRentIcon} alt="" />
                                    </div>
                                    <div className="over-view-box-text">
                                        <span>Rent
                                        </span>
                                        <h3>$4000</h3>
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
                                    <h4>LEASE INFO</h4>
                                </div>
                                <div className="task-info-lists">
                                    <p><span className="task-info-list-span me-3">LEASE info:</span> Olivia Joe Mark</p>
                                    <p><span className="task-info-list-span me-3">Property Address:</span> 4570 Griffin Street Phoenix, Arizona(AZ), 85003</p>
                                    <p><span className="task-info-list-span me-3">Unit:</span> 4570 Griffin Street </p>
                                    <p><span className="task-info-list-span me-3">Lease Term Start Date:</span> 12/12/23</p>
                                    <p><span className="task-info-list-span me-3">Deposit:</span> $1900.00</p>
                                    <p><span className="task-info-list-span me-3">Documents:</span> Lease paper-2</p>
                                    <input onChange={(e) => e.target.value === "on" ? navigate("/renew-lease") : "off"} type="radio" name="" id="" /> <span className='ms-2 me-2'>Renew Lease</span>
                                    <input onChange={(e) => e.target.value === "on" ? navigate("/non-renew-lease") : "off"} type="radio" name="" id="" /> <span className='ms-2 me-2'>Not Renewing</span>

                                </div>
                            </div>
                            <div className="col-md-6 text-end">
                                <img src={userImg} alt="" />
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Tenants" key="2">
                        <div className="row">
                            <div className="col-md-12">
                                {
                                    showPersonalInfo === true ?
                                        <>
                                            <div className="row mt-5">
                                                <div className="col-md-6">
                                                    <div className="task-info-heading">
                                                        <h4>Personal info</h4>
                                                    </div>
                                                    <div className="task-info-lists">
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <p><span className="task-info-list-span me-3">First Name:</span> olivia</p>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <p><span className="task-info-list-span me-3">Middle Name:</span> Mika</p>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <p><span className="task-info-list-span me-3">Last Name:</span> John</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p><span className="task-info-list-span me-3">Email:</span> olivia-johnn1997@gmail.com</p>
                                                            </div>

                                                            <div className="col-md-6 ">
                                                                <p><span className="task-info-list-span me-3">Phone No:</span> +1 (555) 456-7890</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <p><span className="task-info-list-span me-3">Date of Birth:</span> 12/02/1996</p>
                                                            </div>

                                                            <div className="col-md-6 text-end">
                                                                <p><span className="task-info-list-span me-3">Gender:</span> Female</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <p><span className="task-info-list-span me-3">Current Address:</span> 354 Gladwell Street, PITTSBURGH, Pennsylvania(PA), 15283</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 text-end">
                                                    <img src={userImg} alt="" />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="task-info-heading">
                                                <h4>Personal info</h4>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <p><span className="task-info-list-span me-3">First Name:</span> Illeana</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p><span className="task-info-list-span me-3">Middle Name:</span> Susen</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p><span className="task-info-list-span me-3">Last Name:</span> Walker</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <p><span className="task-info-list-span me-3">Email:</span> janesmith@gmail.com</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p><span className="task-info-list-span me-3">Phone No:</span> +1 (555) 876-5432</p>
                                                </div>
                                                <div className="col-md-4">

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <p><span className="task-info-list-span me-3">Relationship:</span> Sister</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p><span className="task-info-list-span me-3">Description:</span> -</p>
                                                </div>
                                                <div className="col-md-4">

                                                </div>
                                            </div>

                                        </>
                                        :
                                        <Table
                                            rowSelection={{
                                                type: selectionType,
                                                ...rowSelection,
                                            }}
                                            columns={columns}
                                            dataSource={data}
                                        />
                                }

                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Rent" key="3">
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
                    <TabPane tab="Deposit" key="4">
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
                    <TabPane tab="Notes" key="5">
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
                                <FileUploader />
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
                    <TabPane tab="Files" key="6">
                        <div className="row mt-3">
                            <div className="col-md-12">
                                <span className='fw-medium'>File Name<span className="sign-up-imp-star">*</span></span>
                                <input type="text" className="form-control mt-3" />
                            </div>
                            <div className="col-md-12 mt-3">
                                <FileUploader />
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

export default LeaseDetails
