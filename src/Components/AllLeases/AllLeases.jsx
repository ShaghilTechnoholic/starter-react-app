import React, { useState } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import TitleTopBar from '../../Helpers/TitleTopBar'
import SearchBar from '../../Helpers/SearchBar'
import { Table } from 'antd';
import settingBtn from '../../assets/more-vertical.png'
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import whiteDot from '../../assets/_white-Dot.png'
import deleteIcon from '../../assets/trash-01.png'
import completeIcon from '../../assets/calendar-check-01.png'
import { NavLink, useNavigate } from 'react-router-dom'
import convertIcon from '../../assets/drop-down-user-icon.png'
const AllLeases = () => {
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
                                        navigate('/lease-detail')
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
            <div className="container-fluid bg-white p-3 ">
                <div className="row">
                    <div className="col-md-12">
                        <SearchBar btnTitle="Add New Lease" CreateLease="new-lease" />
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

export default AllLeases
