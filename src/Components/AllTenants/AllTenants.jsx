import React, { useState } from 'react'
import CloudImg from '../../assets/Illustration.png'
import plusIcon from '../../assets/plus.png'
import plusIconOrange from '../../assets/plus-orange.png'
import SearchBar from '../../Helpers/SearchBar';
import activeDot from '../../assets/_Dot.png'
import inactiveDot from '../../assets/inactivedot.png'
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import loginIcon from '../../assets/file-03.png'
import deleteIcon from '../../assets/trash-01.png'
import settingIcon from '../../assets/three-dots.png';
import { Table } from 'antd'
import { useNavigate } from 'react-router-dom';

const AllTenants = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [selectionType, setSelectionType] = useState('checkbox');
    const [key, setKey] = useState([]);
    const navigate = useNavigate();

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
            title: 'NAME',
            dataIndex: 'name',
            render: (text) => <span className="tenants_table_name_text">{text}</span>,
        },
        {
            title: 'PROPERTIES',
            dataIndex: 'properties',
            render: (text) => <>
                <span className='tenants_table_properties_text'>354 Gladwell Street</span>
                <br />
                <span className='tenants_table_properties_text'>{text}</span>
            </>,
        },
        {
            title: 'EMAIL ADDRESS',
            dataIndex: 'email',
            render: (text) =>
                <>
                    <span className="tenants_table_email_text">{text}</span>
                </>
        },
        {
            title: 'PHONE NO',
            dataIndex: 'phone',
            render: (text) => <>  <span className="tenants_table_phone_text">{text}</span></>,
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            render: (text, status) => <>
                <div className={status.key === '2' ? 'prospect-inactive-bar' : 'prospect-active-bar'}>
                    <img src={status.key === '2' ? inactiveDot : activeDot} alt="" /> <span >{text}</span>
                </div>

            </>
        },
        {

            title: '',
            dataIndex: 'setting',
            render: (text, setting) =>
                <>
                    <div className='task-table-setting-container position-relative cursor'>
                        <img src={settingIcon} alt="" onClick={() => {
                            handleIconClick(setting.key)
                        }} />
                        {
                            setting.key === key &&
                            <div className='task-table-setting-dropdown-prospect bg-white box-shadow'>
                                <ul className='p-0 d-flex flex-column gap-3'>
                                    <li onClick={() => {
                                        navigate('/properties-units-view')
                                    }} className='list-style-none'> <img src={viewIcon} alt="" /> View</li>
                                    <li onClick={() => {
                                        navigate('/properties-units-edit')
                                    }}
                                    className='list-style-none'> <img src={editIcon} alt="" /> Edit</li>
                                    <li className='list-style-none'> <img src={loginIcon} alt="" /> Login</li>
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
            name: 'Olivia Rhye',
            properties: "PITTSBURGH, Pennsylvania(PA), 15283",
            email: 'olivia@untitledui.com',
            phone: '+1 (555) 543-2109',
            status: 'Active',
        },
        {
            key: '2',
            name: 'Phoenix Baker',
            properties: "Phoenix, Arizona(AZ), 85003",
            email: 'phoenix@untitledui.com',
            phone: '+1 (555) 345-6789',
            status: 'In active',
        },
        {
            key: '3',
            name: 'Lana Steiner',
            properties: "Utopia, Texas(TX), 788884",
            email: 'lana@untitledui.com',
            phone: '+1 (555) 345-6789',
            status: 'Active',
        },
        {
            key: '4',
            name: 'Demi Wilkinson',
            properties: "San Diego, California(CA), 92121",
            email: 'demi@untitledui.com',
            phone: '+1 (555) 789-0123',
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
            <div className="container-fluid bg-white p-3 main-screen-properties-dashboard">
                <SearchBar onClick={()=>{
                    navigate('/add-tenant-details')
                }}
                btnTitle='Add New Tenant' />
                <div className="text-center main-screen-properties-content d-none" style={{height: '100vh',}}>
                    <img src={CloudImg} alt="" />
                    <p className="property-main-text">No tenants found</p>
                    <p className="property-sub-text">No tenants were found; the folder is empty.<br />Please try again.</p>
                    <button className="add-property-btn-white" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><img src={isHovered ? plusIcon : plusIconOrange} className="add-property-icon-white" /> Add Tenants</button>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12" style={{height: '100vh',}}>
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

export default AllTenants