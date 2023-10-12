import React, { useState } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import notificationIcon from '../../assets/bell-01.png'
import helpIcon from '../../assets/Help icon.png'
import searchIcon from '../../assets/search.png'
import FilterIcon from '../../assets/filter.png'
import NotFound from '../../assets/not-found-img.png'
import { Divider, Radio, Table } from 'antd';
import oval from '../../assets/Oval.png'
import { NavLink, useNavigate } from 'react-router-dom'
import settingBtn from '../../assets/more-vertical.png'
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import completeIcon from '../../assets/calendar-check-01.png'
import deleteIcon from '../../assets/trash-01.png'
import AddNewTaskModal from '../../Modals/AddNewTaskModal/AddNewTaskModal'
import PaymentMethodSignUp from '../PaymentMethodSignUp/PaymentMethodSignUp'
import PaymentSuccessModal from '../../Modals/PaymentSuccessModal/PaymentSuccessModal'
import SearchBar from '../../Helpers/SearchBar'
import TitleTopBar from '../../Helpers/TitleTopBar'
const AllTasks = () => {
    // States
    const [selectionType, setSelectionType] = useState('checkbox');
    const [taskFilterDropdown, settaskFilterDropdown] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [openModalTask, setOpenModalTask] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [key, setKey] = useState([])
    const navigate = useNavigate()
    // Modal Function
    const onOpenModalTask = () => {
        setOpenModalTask(true)
    }
    const onCloseModalTask = () => {
        setOpenModalTask(false)
    }
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
            assigned: "Joe Walker",
            due: '5/4/2023',
            related: '354 Gladwell Street PITTSBURGH, Pennsylvania(PA), 15283',
            status: 'In Progress',
        },
        {
            key: '2',
            title: 'Link  is leaking',
            assigned: "Robert Clark",
            due: '6/4/2023',
            related: '4570 Griffin Street Phoenix, Arizona(AZ), 85003',
            status: 'In Progress',
            setting: ''
        },
        {
            key: '3',
            title: 'Electrical issues',
            assigned: "David John",
            due: '9/4/2023',
            related: '1908 Parrish Avenue Utopia, Texas(TX), 78884',
            status: 'In Progress',
            setting: ''
        },
        {
            key: '4',
            title: 'New flooring',
            assigned: "Peter Iza",
            due: '12/4/2023',
            related: '3183 Ashcraft Court San Diego, California(CA), 92121',
            status: 'In Progress',
            setting: ''
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
            dataIndex: 'assigned',
            render: (text) => <> <img src={oval} alt="" /> <span>{text}</span></>,
        },
        {
            title: 'DUE AT',
            dataIndex: 'due',
            render: (text) =>
                <>
                    <span className='priority-text'>High Priority</span>
                    <br />
                    <span >{text}</span>
                </>
        },
        {
            title: 'RELATED TO',
            dataIndex: 'related',
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            render: (text) => <span className='table-status-bar'>{text}</span>
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
            {
                openModalTask === true ? <AddNewTaskModal onOpen={onOpenModal} onClose={onCloseModalTask} /> : ""
            }
            {
                openModal === true ? <PaymentSuccessModal onClose={onCloseModal} message="Task details inserted successfully" success="All Tasks" /> : ""
            }
            <div className="container-fluid bg-white p-3">
                <div className="row">
                    <div className="col-md-12">
                        <SearchBar onClick={onOpenModalTask} btnTitle="Add New Task" />
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

export default AllTasks
