import React, { useState } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import NotFound from '../../assets/not-found-img.png'
import { Table } from 'antd';
import oval from '../../assets/Oval.png'
import { NavLink, useNavigate } from 'react-router-dom'
import settingBtn from '../../assets/more-vertical.png'
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import completeIcon from '../../assets/calendar-check-01.png'
import deleteIcon from '../../assets/trash-01.png'
import convertIcon from '../../assets/drop-down-user-icon.png'
import activeDot from '../../assets/_Dot.png'
import SearchBar from '../../Helpers/SearchBar'
import TitleTopBar from '../../Helpers/TitleTopBar';
import ConvertTenantModal from '../../Modals/ConvertTenantModal/ConvertTenantModal';

const AllProspect = () => {
    // States
    const [selectionType, setSelectionType] = useState('checkbox');
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
            title: 'PROSPECT NAME',
            dataIndex: 'prospectName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'PHONE NO',
            dataIndex: 'phone',
            render: (text) => <><span>{text}</span></>,
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            render: (text) =>
                <>
                    <span >{text}</span>
                </>
        },
        {
            title: 'DATE CREATED',
            dataIndex: 'date',
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            render: (text) => <>
                <div className='prospect-active-bar'>
                    <img src={activeDot} alt="" /> <span >{text}</span>
                </div>

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
                                        navigate('/add-prospect-details')
                                    }} className='list-style-none'> <img src={viewIcon} alt="" /> View</li>
                                    <li className='list-style-none'> <img src={editIcon} alt="" /> Edit</li>
                                    <li onClick={onOpenModal} className='list-style-none'> <img src={convertIcon} alt="" /> Convert to tenant</li>
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
            prospectName: 'Olivia Emma Rhye',
            phone: "+1 (555) 098-7654",
            email: '5/4/2023',
            date: 'olivia@untitledui.com',
            status: 'Active',
        },
        {
            key: '2',
            prospectName: 'Olivia Emma Rhye',
            phone: "+1 (555) 098-7654",
            email: '5/4/2023',
            date: 'olivia@untitledui.com',
            status: 'Active',
        },
        {
            key: '3',
            prospectName: 'Olivia Emma Rhye',
            phone: "+1 (555) 098-7654",
            email: '5/4/2023',
            date: 'olivia@untitledui.com',
            status: 'Active',
        },
        {
            key: '4',
            prospectName: 'Olivia Emma Rhye',
            phone: "+1 (555) 098-7654",
            email: '5/4/2023',
            date: 'olivia@untitledui.com',
            status: 'Active',
        },
        {
            key: '5',
            prospectName: 'Olivia Emma Rhye',
            phone: "+1 (555) 098-7654",
            email: '5/4/2023',
            date: 'olivia@untitledui.com',
            status: 'Active',
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
            {openModal && <ConvertTenantModal onClose={onCloseModal} modalTitle="Create Lease" />}

            <div className="container-fluid bg-white p-3">
                <div className="row">
                    <div className="col-md-12 ">
                        <SearchBar btnTitle="Add New Prospects" />
                    </div>
                </div>
                <div className="task-table-container mt-3">
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

export default AllProspect
