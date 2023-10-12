import React, { useState } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import notificationIcon from '../../assets/bell-01.png'
import helpIcon from '../../assets/Help icon.png'
import searchIcon from '../../assets/New icons (7).png'
import filterIcon from '../../assets/filter.png'
import plusIcon from '../../assets/plus.png'
import propertyImage from '../../assets/office-skyscrapers-business-district 2.png'
import propertyImage2 from '../../assets/office-skyscrapers-business-district 2-1.png'
import propertyImage3 from '../../assets/office-skyscrapers-business-district 2-2.png'
import successIcon from '../../assets/Path 415.png'
import actionIcon from '../../assets/three-dots.png'
import homeIcon from '../../assets/home-icon.png'
import buildingIcon from '../../assets/building-07.png'
import buildingIconTwo from '../../assets/building-05.png'
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import deleteIcon from '../../assets/trash-01.png'
import settingBtn from '../../assets/more-vertical.png'
import { Link, useNavigate } from 'react-router-dom'
import { Slider, Table } from 'antd'
import TitleTopBar from '../../Helpers/TitleTopBar'
const PropertiesDashboardListView = () => {
    const [hideFilter, setHideFilter] = useState(false);
    // States
    const [selectionType, setSelectionType] = useState('checkbox');
    const [openModal, setOpenModal] = useState(false);
    const [key, setKey] = useState([]);
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
            title: 'PROPERTY NAME',
            dataIndex: 'propertyName',
            render: (text,propertyName) => <> <img className="property-table-image mw_40 mh_40" src={propertyImage} /> <span className='tenant_table_name_text'>{text}</span></>,
        },
        {
            title: 'PHONE NO',
            dataIndex: 'phone',
            render: (text) => <><span className='tenant_table_phone_text'>{text}</span></>,
        },
        {
            title: 'TYPE',
            dataIndex: 'type',
            render: (text,status) => <>
                <div className={status.key==='2'?'prospect-inactive-bar':'prospect-active-bar'}>
                    <span >{text}</span>
                </div>

            </>
        },
        {
            title: 'ADDRESS',
            dataIndex: 'address',
            render: (text) =>
                <>
                    <span className='tenant_table_email_text'>{text}</span>
                </>
        },
        {
            title: 'RENT AMOUNT',
            dataIndex: 'rentAmount',
            render: (text) =>
                <>
                    <span className='tenant_table_email_text'>{text}</span>
                </>
        },
        {
            title: 'TENANTS',
            dataIndex: 'tenants',
            render: (text) =>
                <>
                    <span className='tenant_table_properties_main_text'>{text}</span>
                    <br />
                    <span className='tenant_table_properties_sub_text'>Current Tenant</span>
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
                                        navigate('/property-details-view')
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
            propertyName: '2418 Ellingwood...',
            phone: "+1 (555) 098-7654",
            type: 'Single family',
            address: '1500 Marilla St, TX 75201',
            rentAmount: '$381.76',
            tenants: 'Emily Durkheim',
        },
        {
            key: '2',
            propertyName: '735 Pennington...',
            phone: "+1 (555) 567-8901",
            type: 'Multi Commercial',
            address: '1500 Marilla St, TX 75201',
            rentAmount: '$359.77',
            tenants: 'Emily Durkheim',
        },
        {
            key: '3',
            propertyName: '735 Pennington...',
            phone: "+1 (555) 321-0987",
            type: 'Multi family',
            address: '1500 Marilla St, TX 75201',
            rentAmount: '$276.18',
            tenants: 'Emily Durkheim',
        },
        {
            key: '4',
            propertyName: '735 Pennington...',
            phone: "+1 (555) 432-1098",
            type: 'Single family',
            address: '1500 Marilla St, TX 75201',
            rentAmount: '$509.34',
            tenants: 'Emily Durkheim',
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
            <div className="container-fluid bg-white p-3">
                <div className="row">
                    <div className="search-bar mt-4">
                        <form>
                            <div className="input-icon">
                                <span className="input-icon-addon">
                                    <img src={searchIcon} alt="" className="icon" />
                                </span>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className={hideFilter === true ? "sub-headings mt-4" : "d-none"}>
                            <h2 className="property-sub-title">Filters</h2>
                        </div>
                    </div>
                    <div className={hideFilter === true ? "col-md-9 d-flex" : "col-md-12 d-flex"}>
                        <div className="sub-headings mt-4 d-flex gap-2 align-items-center">
                            <h2 className="property-sub-title">Property</h2>
                            <span className="badge badge-gray"><p className="badge-base-text">241</p></span>
                        </div>
                        <div className="btn-list ms-auto mt-4">
                            <button
                                onClick={() => {
                                    setHideFilter(!hideFilter)
                                }}
                                className="properties-filter-btn"><img src={filterIcon} alt="" className='properties-filter-icon' /> Filter</button>
                            <Link to='/add-property-details'><button className="add-property-btn"><img src={plusIcon} alt="" className='add-property-icon' /> Add Property</button></Link>
                        </div>
                    </div>
                </div>
                <div className={hideFilter === true ? "d-flex gap-4" : "d-block"}>
                    <div className={hideFilter === true ? "filter-main-section" : "d-none"}>
                        <div className="filter-dropdown-section">
                            <span className="filter-sub-title">Filter By</span>
                            <select className="select-box form-select mt-4" aria-label="Default select example">
                                <option selected>Portfolio</option>
                                <option value="1">Clients</option>
                                <option value="2">Client 1</option>
                                <option value="3">Client 2</option>
                            </select>
                        </div>
                        <div className="status-dropdown-section mt-4">
                            <span className="filter-sub-title">Status</span>
                            <select className="form-select mt-4" aria-label="Default select example">
                                <option selected>Active</option>
                                <option value="1">Inactive</option>
                                <option value="2">Archive</option>
                            </select>
                        </div>
                        <div className="location-dropdown-section mt-4">
                            <span className="filter-sub-title">Location</span>
                            <select className="form-select mt-4" aria-label="Default select example">
                                <option selected>Select Location</option>
                                <input type="checkbox" id="location" checked />
                                <option value="1">Los angeles</option>
                                <option value="2">New york</option>
                                <option value="2">Dallas TX</option>
                                <button className="btn btn-primary">Selected 1 location</button>
                            </select>
                        </div>
                        <div className="location-dropdown-section mt-4">
                            <span className="filter-sub-title">Property Type</span><br />
                            <span className="property-type-icons mt-4 mb-4">
                                <img className="property-type-icons-active p-2" src={homeIcon} alt="" />
                                <img className="p-2" src={buildingIcon} alt="" />
                                <img className="p-2" src={buildingIconTwo} alt="" />
                            </span>
                        </div>
                        <span className="filter-sub-title-unique mt-4">Bedroom</span>
                        <div className="location-dropdown-section d-flex gap-5 mt-4">
                            <div className="dropdown-sub-section">
                                <input type="checkbox" id="property_type1" name="property_type1" value="Select All" />
                                <label for="property_type1"> Select All</label><br />
                                <input type="checkbox" id="property_type2" name="property_type2" value="3 Bedroom" />
                                <label for="property_type2"> 3 Bedroom</label><br />
                                <input type="checkbox" id="property_type3" name="property_type3" value="5 Bedroom" checked />
                                <label for="property_type3"> 5 Bedroom</label><br /><br />
                            </div>
                            <div className="dropdown-sub-section">
                                <input type="checkbox" id="property_type4" name="property_type4" value="2 Bedroom" checked />
                                <label for="property_type4"> 2 Bedroom</label><br />
                                <input type="checkbox" id="property_type5" name="property_type5" value="4 Bedroom" />
                                <label for="property_type5"> 4 Bedroom</label><br />
                            </div>
                        </div>
                        <div className="location-dropdown-section mt-4">
                            <span className="filter-sub-title">Rent Amount Range</span>
                            <Slider
                                range={{
                                    draggableTrack: true,
                                }}
                                defaultValue={[15, 65]}
                            />
                        </div>
                        <div className="price-range-value d-flex gap-3 mb-4">
                            <input type="text" className="w-50" value="$500" />
                            <div className="range-icon">-</div>
                            <input type="text" className="w-50" value="$3800" />
                        </div>
                        <span className="filter-sub-title mt-4">Bathroom</span>
                        <div className="location-dropdown-section d-flex gap-5 mt-4">
                            <div className="dropdown-sub-section">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1"> Select All</label><br />
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                <label for="vehicle2"> 3 Bathroom</label><br />
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" checked />
                                <label for="vehicle3"> 5 Bathroom</label><br /><br />
                            </div>
                            <div className="dropdown-sub-section">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked />
                                <label for="vehicle1"> 2 Bathroom</label><br />
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                <label for="vehicle2"> 4 Bathroom</label><br />
                            </div>
                        </div>
                    </div>
                    <div className="property-main-section">
                    <Table
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                        {/*<div className="table-content table-basic">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table_class" id="table">
                                            <thead className="thead table-light">
                                                <tr>
                                                    <th className="sorting_asc">
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="all_check" />
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <th className="sorting_desc">Property Name</th>
                                                    <th className="sorting_desc">Phone No</th>
                                                    <th className="sorting_desc">Type</th>
                                                    <th className="sorting_desc">Address</th>
                                                    <th className="sorting_desc">Rent Amount</th>
                                                    <th className="sorting_desc">Tenants</th>
                                                    <th className="sorting_desc"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="tbody">
                                                <tr>
                                                    <td>
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input column_id" type="checkbox" id="column_1" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="client_box d-flex align-items-center gap-3">
                                                            <div className="thumb flex-shrink-0 mh_40 mw_40">
                                                                <img className="img-fluid rounded_6px mCS_img_loaded" src={propertyImage} />
                                                            </div>
                                                            <div className="client_content">
                                                                <Link className="client_title">2418 Ellingwood...</Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="property_table_contant_no">+1 (555) 098-7654</td>
                                                    <td>
                                                        <span className="badge badge-success"><p className="badge-success-text">Single family</p></span>
                                                    </td>
                                                    <td className="property_table_address">1500 Marilla St, TX 75201</td>
                                                    <td className="property_table_rent_amount">$381.76</td>
                                                    <td>
                                                        <div className="client_box d-flex align-items-center gap-3">
                                                            <div className="client_content">
                                                                <Link className="client_title">Emilly Durkheim</Link>
                                                                <p className="client_para_text"><span><img src={successIcon} />Current Tenant</span></p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link><img src={actionIcon} alt="" /></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input column_id" type="checkbox" id="column_1" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="client_box d-flex align-items-center gap-3">
                                                            <div className="thumb flex-shrink-0 mh_40 mw_40">
                                                                <img className="img-fluid rounded_6px mCS_img_loaded" src={propertyImage2} />
                                                            </div>
                                                            <div className="client_content">
                                                                <Link className="client_title">735 Pennington...</Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="property_table_contant_no">+1 (555) 567-8901</td>
                                                    <td>
                                                        <span className="badge badge-warning"><p className="badge-warning-text">Multi Commercial</p></span>
                                                    </td>
                                                    <td className="property_table_address">1500 Marilla St, TX 75201</td>
                                                    <td className="property_table_rent_amount">$359.77</td>
                                                    <td>
                                                        <div className="client_box d-flex align-items-center gap-3">
                                                            <div className="client_content">
                                                                <Link className="client_title">Emilly Durkheim</Link>
                                                                <p className="client_para_text"><span><img src={successIcon} />Current Tenant</span></p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link><img src={actionIcon} alt="" /></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input column_id" type="checkbox" id="column_1" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="client_box d-flex align-items-center gap-3">
                                                            <div className="thumb flex-shrink-0 mh_40 mw_40">
                                                                <img className="img-fluid rounded_6px mCS_img_loaded" src={propertyImage3} />
                                                            </div>
                                                            <div className="client_content">
                                                                <Link className="client_title">735 Pennington...</Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="property_table_contant_no">+1 (555) 321-0987</td>
                                                    <td>
                                                        <span className="badge badge-base"><p className="badge-base-text">Multi family</p></span>
                                                    </td>
                                                    <td className="property_table_address">1500 Marilla St, TX 75201</td>
                                                    <td className="property_table_rent_amount">$276.18</td>
                                                    <td>
                                                        <div className="client_box d-flex align-items-center gap-3">
                                                            <div className="client_content">
                                                                <Link className="client_title">Emilly Durkheim</Link>
                                                                <p className="client_para_text"><span><img src={successIcon} />Current Tenant</span></p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link><img src={actionIcon} alt="" /></Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="check-box">
                                                            <div className="form-check">
                                                                <input className="form-check-input column_id" type="checkbox" id="column_1" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="client_box d-flex align-items-center gap-3">
                                                            <div className="thumb flex-shrink-0 mh_40 mw_40">
                                                                <img className="img-fluid rounded_6px mCS_img_loaded" src={propertyImage} />
                                                            </div>
                                                            <div className="client_content">
                                                                <Link className="client_title">735 Pennington...</Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="property_table_contant_no">+1 (555) 432-1098</td>
                                                    <td>
                                                        <span className="badge badge-success"><p className="badge-success-text">Single family</p></span>
                                                    </td>
                                                    <td className="property_table_address">1500 Marilla St, TX 75201</td>
                                                    <td className="property_table_rent_amount">$509.34</td>
                                                    <td>
                                                        <div className="client_box d-flex align-items-center gap-3">
                                                            <div className="client_content">
                                                                <Link className="client_title">Emilly Durkheim</Link>
                                                                <p className="client_para_text"><span><img src={successIcon} />Current Tenant</span></p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link><img src={actionIcon} alt="" /></Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropertiesDashboardListView