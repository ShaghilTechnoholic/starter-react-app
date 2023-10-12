import React, { useState } from 'react'
import SearchBar from '../../Helpers/SearchBar'
import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import settingBtn from '../../assets/more-vertical.png'
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import whiteDot from '../../assets/_white-Dot.png'
import deleteIcon from '../../assets/trash-01.png'
const Accounting = () => {
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
            title: 'Account',
            dataIndex: 'account',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'PROPERTY',
            dataIndex: 'property',
            render: (text) => <><span>{text}</span></>,
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            render: (text, status) => <>
                {status.key === '1' &&
                    <>
                        <span className=' '>Active</span>
                    </>
                }
                {status.key === '2' &&
                    <>
                        <span className=''>Not Started</span>
                    </>
                }

            </>
        },
        {
            title: '',
            dataIndex: 'button',
            render: (text, button) =>
                <>
                    <button className="connect-bank-btn">{text}</button>
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
                                        navigate('/account-details')
                                    }} className='list-style-none'> <img src={viewIcon} alt="" /> View</li>
                                    <li className='list-style-none'> <img src={editIcon} alt="" /> Edit</li>
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
            account: 'Operating Account',
            property: 'The Tree House 1100 Welker LnJersey Shore, Pennsylvania(PA), 17740',
            status: '',
            button: 'Connect to Bank',
        },
        {
            key: '2',
            account: 'Payment Test',
            property: 'The Tree House 1100 Welker LnJersey Shore, Pennsylvania(PA), 17740',
            status: '',
            button: 'Connect to Bank',
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
    const navigateBtn = () => {
        navigate("/add-account")
    }
    return (
        <>
            <div className="container-fluid bg-white p-3">
                <SearchBar onClick={navigateBtn} btnTitle="Add New Account" />
                <div className="container-fluid mt-3">
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
        </>
    )
}

export default Accounting
