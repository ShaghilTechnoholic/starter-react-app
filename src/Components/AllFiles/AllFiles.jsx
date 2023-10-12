import React, { useState } from 'react'
import TitleTopBar from '../../Helpers/TitleTopBar'
import SideDrawer from '../SideDrawer/SideDrawer'
import searchIcon from '../../assets/search.png'
import FilterIcon from '../../assets/filter.png'
import { Table } from 'antd';
import { CSVLink, CSVDownload } from "react-csv";
import settingBtn from '../../assets/more-vertical.png'
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import completeIcon from '../../assets/calendar-check-01.png'
import deleteIcon from '../../assets/trash-01.png'
import checkMark from '../../assets/check-mark.png'
import { Link, useNavigate } from 'react-router-dom'
import documentIcon from '../../assets/document.png'
import oval from '../../assets/Oval.png'
import downloadIcon from '../../assets/download.png'
import FileDeleteModal from '../../Modals/FileDeleteModal/FileDeleteModal'
const AllFiles = () => {
    const [taskFilterDropdown, settaskFilterDropdown] = useState(false);
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
    // Data Table functions
    const data = [
        {
            key: '1',
            fileName: 'Document screenshot.jpg',
            property: "354 Gladwell Street",
            owner: 'Olivia Rhye',
            date: '10/12/22',
        },
        {
            key: '2',
            fileName: 'Document screenshot.jpg',
            property: "354 Gladwell Street",
            owner: 'Olivia Rhye',
            date: '10/12/22',
        },
        {
            key: '3',
            fileName: 'Document screenshot.jpg',
            property: "354 Gladwell Street",
            owner: 'Olivia Rhye',
            date: '10/12/22',
        },
        {
            key: '4',
            fileName: 'Document screenshot.jpg',
            property: "354 Gladwell Street",
            owner: 'Olivia Rhye',
            date: '10/12/22',
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
            title: 'FILE NAME',
            dataIndex: 'fileName',
            render: (text) =>
                <>
                    <div className="table-file-container d-flex align-items-center gap-3">
                        <div className="table-file-img">
                            <img src={documentIcon} alt="" />
                        </div>
                        <div className="table-file-text">
                            <p className='mb-0'>{text}</p>
                            <p>720 KB</p>
                        </div>
                    </div>
                </>
        },
        {
            title: 'Properties',
            dataIndex: 'property',
            render: (text) => <>  <span>{text}</span> <br /> <span>PITTSBURGH, Pennsylvania(PA), 15283</span></>,
        },
        {
            title: 'OWNER',
            dataIndex: 'owner',
            render: (text, type) =>
                <>
                    <img src={oval} alt="" />   <span>{text}</span>

                </>
        },
        {
            title: 'DATE UPLOADED',
            dataIndex: 'date',
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
                                    <Link className='text-dark' to='/edit-file'> <li className='list-style-none'> <img src={editIcon} alt="" /> Edit</li></Link>
                                    <li className='list-style-none'> <img src={downloadIcon} alt="" /> Download</li>
                                    <li
                                        onClick={onOpenModal}
                                        className='list-style-none'> <img src={deleteIcon} alt="" /> Delete</li>
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
                openModal && <FileDeleteModal onClose={onCloseModal} />
            }
            <div className="container-fluid bg-white p-3 ">
                <div className="files-search-bar d-flex justify-content-between align-items-center gap-5">
                    <div className="task-search-input position-relative flex-grow-1">
                        <input type="text" placeholder='Search' className="form-control search-form-control-task" />
                        <div className="search-icon-task">
                            <img src={searchIcon} alt="" />
                        </div>
                    </div>
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

export default AllFiles
