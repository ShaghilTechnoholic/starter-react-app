import React, { useState } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import notificationIcon from '../../assets/bell-01.png'
import helpIcon from '../../assets/Help icon.png'
import sliderMainImage from '../../assets/Rectangle 30.png'
import carouselImageOne from '../../assets/Rectangle 23840.png'
import locationIcon from '../../assets/location.png'
import publishIcon from '../../assets/publish.png'
import bedroomIcon from '../../assets/list-icon-1.png'
import bathroomIcon from '../../assets/list-icon-2.png'
import sizeIcon from '../../assets/list-icon-3.png'
import rentAmountIcon from '../../assets/list-icon-4.png'
import leaseIcon from '../../assets/list-icon-5.png'
import homeIcon from '../../assets/icon_house.png'
import buildingIcon from '../../assets/icon_building.png'
import tickIcon from '../../assets/icon_tick_circle.png'
import settingBtn from '../../assets/more-vertical.png'
import viewIcon from '../../assets/Icon.png'
import editIcon from '../../assets/edit-05.png'
import editIconOrange from '../../assets/edit 05 Orange.png'
import deleteIcon from '../../assets/trash-01.png'
import deleteIconOrange from '../../assets/trash-01 - Orange.png'
import loginIcon from '../../assets/file-03.png'
import convertIcon from '../../assets/drop-down-user-icon.png'
import activeDot from '../../assets/_Dot.png'
import inactiveDot from '../../assets/inactivedot.png'
import tenantUser1 from '../../assets/tenant_table_image-01.png'
import tenantUser2 from '../../assets/tenant_table_image -02.png'
import bedIcon from '../../assets/bed-icon.png'
import bathIcon from '../../assets/bath icon.png'
import sqftIcon from '../../assets/sqft-icon.png'
import parkingIcon from '../../assets/P.png'
import wifiIcon from '../../assets/wifi.png'
import swimmingIcon from '../../assets/waves.png'
import availableHoursIcon from '../../assets/clock.png'
import fitnessCenterIcon from '../../assets/activity-heart.png'
import onsiteMaintenanceIcon from '../../assets/tool.png'
import carWashIcon from '../../assets/car-01.png'
import highSpeedIcon from '../../assets/lightning-01.png'
import groceryServiceIcon from '../../assets/shopping-cart.png'
import depositsHeldIcon from '../../assets/lease-balance.png'
import depositHeldSecondIcon from '../../assets/Deposit Held icon second.png'
import settingBtnIcon from '../../assets/more-vertical.png'
import monthlyRentIcon from '../../assets/lease-rent.png'
import tenantUserImage from '../../assets/Ellipse 7.png'
import oval from '../../assets/Oval.png'
import completeIcon from '../../assets/calendar-check-01.png'
import searchIcon from '../../assets/search.png'
import checkMark from '../../assets/check-mark.png'
import NotFound from '../../assets/not-found-img.png'
import documentIcon from '../../assets/document.png';
import settingIcon from '../../assets/three-dots.png';
import propertyImage from '../../assets/office-skyscrapers-business-district 2.png'
import FileUploader from '../FileUploader/FileUploader';
import ownerImage from '../../assets/tenant_table_image-01.png'
import { usePDF } from 'react-to-pdf';
import { CSVLink, CSVDownload } from "react-csv";
import { Tabs, Table, Select } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import TitleTopBar from '../../Helpers/TitleTopBar';
import SearchBar from '../../Helpers/SearchBar';
import { useNavigate } from 'react-router-dom'
import AddNewTaskModal from '../../Modals/AddNewTaskModal/AddNewTaskModal'

const PropertyDetailsView = () => {
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    const [exportDropdown, setExportDropdown] = useState(false);
    const routeHandleChange = (route) => {
        navigate(`/${route}`)
    }
    const [openModalTask, setOpenModalTask] = useState(false);
    // Modal Function
    const onOpenModalTask = () => {
        setOpenModalTask(true)
    }
    const onCloseModalTask = () => {
        setOpenModalTask(false)
    }
    const [showTenantDetails, setShowTenantDetails] = useState(false);
    const [showTaskDetails, setShowTaskDetails] = useState(false);

    const [isHoveredEdit, setIsHoveredEdit] = useState(false);
    const handleMouseEnterEdit = () => {
        setIsHoveredEdit(true);
    };

    const handleMouseLeaveEdit = () => {
        setIsHoveredEdit(false);
    };

    const [isHoveredDelete, setIsHoveredDelete] = useState(false);
    const handleMouseEnterDelete = () => {
        setIsHoveredDelete(true);
    };

    const handleMouseLeaveDelete = () => {
        setIsHoveredDelete(false);
    };

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { TabPane } = Tabs;

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
            title: 'UNIT NAME',
            dataIndex: 'unitName',
            render: (text) => <span className="unit_table_name_text">{text}</span>,
        },
        {
            title: 'UNIT DETAILS',
            dataIndex: 'unitDetails',
            //render: (text) => <><span>{text}</span></>,
            render: (text, details) =>
                <>
                    <ul className="p-0 d-flex gap-3">
                        <li class="list-style-none"><img src={bedIcon} alt="" /><span className="unit_table_details_text">3 Beds</span></li>
                        <li class="list-style-none"><img src={bathIcon} alt="" /><span className="unit_table_details_text">3 Bath</span></li>
                        <li class="list-style-none"><img src={sqftIcon} alt="" /><span className="unit_table_details_text">200 sqft</span></li>
                    </ul>
                </>
        },
        {
            title: 'RENT AMOUNT',
            dataIndex: 'rentAmount',
            render: (text) =>
                <>
                    <span className="unit_table_amount_text">{text}</span>
                </>
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
            title: 'FUTURE STATUS',
            dataIndex: 'futureStatus',
            render: (text) => <><span className="unit_table_fstatus_text">{text}</span></>,
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
                                        navigate('/properties-units-view')
                                    }} className='list-style-none'> <img src={viewIcon} alt="" /> View</li>
                                    <li onClick={() => {
                                        navigate('/properties-units-edit')
                                    }}
                                    className='list-style-none'> <img src={editIcon} alt="" /> Edit</li>
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
            unitName: 'Unit101',
            unitDetails: "+1 (555) 098-7654",
            rentAmount: '$2100',
            status: 'Month-to-Month',
            futureStatus: 'Not Rented',
        },
        {
            key: '2',
            unitName: 'Unit768',
            unitDetails: "+1 (555) 098-7654",
            rentAmount: '$3100',
            status: 'Vacant',
            futureStatus: 'Not Rented',
        },

    ];
    const tenantColumns = [
        {
            title: 'NAME',
            dataIndex: 'name',
            render: (text, name) => <> <img src={name.key === '2' ? tenantUser2 : tenantUser1} alt="" /> <span className='tenant_table_name_text'>{text}</span></>,
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
            title: 'PHONE NO',
            dataIndex: 'phone',
            render: (text) => <><span className='tenant_table_phone_text'>{text}</span></>,
        },
        {
            title: 'EMAIL ADDRESS',
            dataIndex: 'email',
            render: (text) =>
                <>
                    <span className='tenant_table_email_text'>{text}</span>
                </>
        },
        {
            title: 'PROPERTIES',
            dataIndex: 'properties',
            render: (text) =>
                <>
                    <span className='tenant_table_properties_main_text'>354 Gladwell Street</span>
                    <br />
                    <span className='tenant_table_properties_sub_text'>{text}</span>
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
                                        setShowTenantDetails(true)
                                    }} className='list-style-none'> <img src={viewIcon} alt="" /> View</li>
                                    <li className='list-style-none'> <img src={editIcon} alt="" /> Edit</li>
                                    <li className='list-style-none'> <img src={loginIcon} alt="" /> Login</li>
                                    <li className='list-style-none'> <img src={deleteIcon} alt="" /> Delete</li>
                                </ul>
                            </div>
                        }

                    </div>
                </>
        },
    ];
    const tenantData = [
        {
            key: '1',
            name: 'Olivia Rhye',
            status: 'Active',
            phone: "+1 (555) 543-2109",
            email: 'olivia@untitledui.com',
            properties: 'PITTSBURGH, Pennsylvania(PA), 15283',
        },
        {
            key: '2',
            name: 'Phoenix Baker',
            status: 'In Active',
            phone: "+1 (555) 345-6789",
            email: 'phoenix@untitledui.com',
            properties: 'Phoenix, Arizona(AZ), 85003',
        },

    ];
    const accountColumns = [
        {
            title: 'ACCOUNT',
            dataIndex: 'account',
            render: (text, name) => <> <span className='account_table_name_text'>{text}</span></>,
        },
        {
            title: 'PROPERTY',
            dataIndex: 'property',
            render: (text) =>
                <>
                    <span className='account_table_property_main_text'>The Tree House</span>
                    <br />
                    <span className='account_table_property_sub_text'>{text}</span>
                </>
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            render: (text) => <><span className='account_table_status_text'>{text}</span></>,
        },
        {
            title: '',
            dataIndex: 'connectAccountButtons',
            render: (text) =>
                <>
                    <div className="position-relative cursor">
                        <button className="connect-to-bank-btn-white"> Connect to Bank</button>
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
                            <div className='account-table-setting-dropdown-prospect bg-white box-shadow'>
                                <ul className='p-0 d-flex flex-column gap-3'>
                                    <li onClick={() => {
                                        navigate('/')
                                    }} className='list-style-none'> <img src={viewIcon} alt="" /> View</li>
                                    <li className='list-style-none' onMouseEnter={handleMouseEnterEdit} onMouseLeave={handleMouseLeaveEdit}> <img src={isHoveredEdit ? editIconOrange : editIcon} alt="" /> Edit</li>
                                    <li className='list-style-none' onMouseEnter={handleMouseEnterDelete} onMouseLeave={handleMouseLeaveDelete}> <img src={isHoveredDelete ? deleteIconOrange : deleteIcon} alt="" /> Delete</li>
                                </ul>
                            </div>
                        }

                    </div>
                </>
        },
    ];
    const accountData = [
        {
            key: '1',
            account: 'Operating Account',
            property: '1100 Welker LnJersey Shore, Pennsylvania(PA), 17740',
            status: 'Active',
        },
        {
            key: '2',
            account: 'Payment Test',
            property: '1100 Welker LnJersey Shore, Pennsylvania(PA), 17740',
            status: 'Not Started',
        },

    ];
    const tasksColumns = [
        {
            title: 'TASK',
            dataIndex: 'task',
            render: (text) => <> <span className='account_table_name_text'>{text}</span></>,
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
            render: (text) =>
                <>
                    <span className='account_table_property_sub_text'>354 Gladwell Street PITTSBURGH,<br />Pennsylvania(PA), 15283</span>
                </>
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            render: (text) => <span className='table-status-bar'>{text}</span>,
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
                            <div className='account-table-setting-dropdown-prospect bg-white box-shadow'>
                                <ul className='p-0 d-flex flex-column gap-3'>
                                    <li onClick={() => {
                                        setShowTaskDetails(true)
                                    }} className='list-style-none'> <img src={viewIcon} alt="" /> View</li>
                                    <li className='list-style-none' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <img src={isHovered ? editIconOrange : editIcon} alt="" /> Edit</li>
                                    <li className='list-style-none'> <img src={completeIcon} alt="" /> Complete</li>
                                    <li className='list-style-none' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> <img src={isHovered ? deleteIconOrange : deleteIcon} alt="" /> Delete</li>
                                </ul>
                            </div>
                        }

                    </div>
                </>
        },
    ];
    const tasksData = [
        {
            key: '1',
            task: 'Plumbing issues',
            assigned: 'Joe Walker',
            status: 'In Progress',
            due: '5/4/2023'
        },
        {
            key: '2',
            task: 'Plumbing issues',
            assigned: 'Joe Walker',
            status: 'In Progress',
            due: '5/4/2023'
        },

    ];

    // Data Table functions
    const reportsData = [
        {
            key: '1',
            propertyName: '2418 Ellingwood....',
            phone: "+1 (555) 098-7654",
            type: '5/4/2023',
            address: '1500 Marilla St, TX 75201',
            rent: '$381.76',
            tenant: 'Emilly Durkheim',
        },
        {
            key: '2',
            propertyName: '2418 Ellingwood....',
            phone: "+1 (555) 098-7654",
            type: '5/4/2023',
            address: '1500 Marilla St, TX 75201',
            rent: '$381.76',
            tenant: 'Emilly Durkheim',
        },
        {
            key: '3',
            propertyName: '2418 Ellingwood....',
            phone: "+1 (555) 098-7654",
            type: '5/4/2023',
            address: '1500 Marilla St, TX 75201',
            rent: '$381.76',
            tenant: 'Emilly Durkheim',
        },
        {
            key: '4',
            propertyName: '2418 Ellingwood....',
            phone: "+1 (555) 098-7654",
            type: '5/4/2023',
            address: '1500 Marilla St, TX 75201',
            rent: '$381.76',
            tenant: 'Emilly Durkheim',
        },

    ];
    const reportsColumns = [
        {
            title: 'PROPERTY NAME',
            dataIndex: 'propertyName',
            render: (text) => <span><img src={propertyImage} alt="" className="mh_40 mw_40" />{text}</span>,
        },
        {
            title: 'PHONE NO',
            dataIndex: 'phone',
            render: (text) => <>  <span>{text}</span></>,
        },
        {
            title: 'TYPE',
            dataIndex: 'type',
            render: (text, type) =>
                <>
                    {type.key === '1' && <span className='type-text-single-family rounded-4'>Single family</span>}
                    {type.key === '2' && <span className='type-text-multi-commercial rounded-4'>Multi Commercial</span>}
                    {type.key === '3' && <span className='type-text-multi-family rounded-4'>Multi Commercial</span>}
                    {type.key === '4' && <span className='type-text-single-family rounded-4'>Single family</span>}

                </>
        },
        {
            title: 'ADDRESS',
            dataIndex: 'address',
        },
        {
            title: 'RENT AMOUNT',
            dataIndex: 'rent',
            render: (text) => <span>{text}</span>
        },
        {
            title: 'TENANTS',
            dataIndex: 'tenant',
            render: (text) => <>
                <span>{text}</span>
                <br />
                <img src={checkMark} alt="" /> <span className="current-tenant-text">Current Tenant</span>
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
                                        navigate('')
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

    const filesColumns = [
        {
            title: 'FILE NAME',
            dataIndex: 'filename',
            render: (text) => <> <img src={documentIcon} alt="" /> <a>{text}</a></>,
        },
        {
            title: 'Properties',
            dataIndex: 'properties',
            render: (text) => <> 
                <span className='tenant_table_properties_main_text'>354 Gladwell Street</span>
                <br />
                <span className='tenant_table_properties_sub_text'>{text}</span>
            </>,
        },
        {
            title: 'OWNER',
            dataIndex: 'owner',
            render: (text) => <> <img src={ownerImage} alt="" /> <span>{text}</span></>,

        },
        {
            title: 'DATE UPLOADED',
            dataIndex: 'uploadedDate',
        },
        {
            title: '',
            dataIndex: "setting",
            render: (text, setting) =>
                <>
                    <div className='task-table-setting-container position-relative cursor'>
                        <img src={settingIcon} alt="" onClick={() => handleIconClick(setting.key)} />
                        {
                            setting.key === key &&
                            <div className='task-table-setting-dropdown bg-white box-shadow'>
                                <ul className='p-0 d-flex flex-column gap-3'>
                                    <li className='list-style-none'> <img src={editIcon} alt="" /> Edit</li>
                                    <li className='list-style-none'> <img src={deleteIcon} alt="" /> Delete</li>
                                </ul>
                            </div>
                        }

                    </div>
                </>
        },

    ];
    const filesData = [
        {
            key: '1',
            filename: 'Document screenshot.jpg',
            properties: 'PITTSBURGH, Pennsylvania(PA), 15283',
            owner: 'Olivia Rhye',
            uploadedDate: '10/11/22',
        },
        {
            key: '2',
            filename: 'Document screenshot.jpg',
            properties: 'Phoenix, Arizona(AZ), 85003',
            owner: 'Olivia Rhye',
            uploadedDate: '10/11/22',
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
            {
                openModalTask === true ? <AddNewTaskModal onOpen={onOpenModal} onClose={onCloseModalTask} /> : ""
            }
            <div className="container-fluid bg-white p-3">
                <Tabs defaultActiveKey="1" className="property_details_view_tabs">
                    <TabPane tab="Overview" key="1">
                        <div className="row d-flex justify-left-center mt-4">
                            <div className="col-md-6">
                                <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff', }} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">
                                    <SwiperSlide>
                                        <img src={sliderMainImage} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={sliderMainImage} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={sliderMainImage} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={sliderMainImage} />
                                    </SwiperSlide>
                                </Swiper>
                                <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper">
                                    <SwiperSlide>
                                        <img src={carouselImageOne} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={carouselImageOne} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={carouselImageOne} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={carouselImageOne} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="col-md-6">
                                <div className="property-details-heading mt-3">
                                    <p className="property-details-heading-title">The Tree House</p>
                                </div>
                                <div class="property-details-view-title-content mt-5">
                                    <span className="property-details-view-title-para"><img src={locationIcon} />&nbsp;Guardamar del Segura, Spain</span><br />
                                    <span className="property-details-view-title-para"><img src={publishIcon} />&nbsp;Published on December 10, 2017</span>
                                </div>
                            </div>
                        </div>
                        <Tabs defaultActiveKey="2" className="property_details_view_sub_tabs">
                            <TabPane tab="Description" key="2">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="properties_details_view_description_content">Youthful, adventurous and fun, treehouses hold a special place in our hearts – and those of architects. They have drawn on the ‘treetop playhouse’ to create unique, nature-filled homes that inspire and make us feel good.</p>
                                        <p className="properties_details_view_description_content">These calming dwellings sit above the ground while tree boughs and branches unfurl around them. Their living spaces glow with dappled light and peer out onto foliage and nature. And they are often made entirely from wood and feature organic forms to blend into their natural surroundings.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="d-flex icons-list-main">
                                            <ul class="list-group">
                                                <li class="list-group-item icons-list"><img src={bedroomIcon} className="icons-list-image" />4 bedrooms</li>
                                                <li class="list-group-item icons-list"><img src={rentAmountIcon} className="icons-list-image" />$2000 Rent</li>
                                            </ul>
                                            <ul class="list-group">
                                                <li class="list-group-item icons-list"><img src={bathroomIcon} className="icons-list-image" />3 bathrooms</li>
                                                <li class="list-group-item icons-list"><img src={leaseIcon} className="icons-list-image" />Month-to-Month</li>
                                            </ul>
                                            <ul class="list-group">
                                                <li class="list-group-item icons-list"><img src={sizeIcon} className="icons-list-image" />250 sqft</li>
                                                <li class="list-group-item icons-list"><img src={leaseIcon} className="icons-list-image" />$180.00</li>
                                            </ul>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col">
                                                <div className="counter">
                                                    <img src={homeIcon} className="fa-2x" />
                                                    <h2 className="timer count-title count-number">Property Type</h2>
                                                    <p className="count-text ">Single Family</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="counter">
                                                    <img src={buildingIcon} className="fa-2x" />
                                                    <h2 className="timer count-title count-number">Active Units</h2>
                                                    <p className="count-text ">2</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="counter">
                                                    <img src={tickIcon} className="fa-2x" />
                                                    <h2 className="timer count-title count-number">Status</h2>
                                                    <p className="count-text-unique ">Active</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div id="map-container-google-1" className="z-depth-1-half map-container map-custom">
                                            <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" className="map-custom-class" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Amenities" key="3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="d-flex icons-list-main">
                                            <ul class="list-group">
                                                <li class="list-group-item icons-list-amenities"><img src={parkingIcon} className="icons-list-image-unique" />Free Parking</li>
                                                <li class="list-group-item icons-list-amenities"><img src={availableHoursIcon} className="icons-list-image" />Availability 24 Hours</li>
                                                <li class="list-group-item icons-list-amenities"><img src={carWashIcon} className="icons-list-image" />Car Wash Area</li>
                                            </ul>
                                            <ul class="list-group">
                                                <li class="list-group-item icons-list-amenities"><img src={wifiIcon} className="icons-list-image" />Wifi</li>
                                                <li class="list-group-item icons-list-amenities"><img src={fitnessCenterIcon} className="icons-list-image" />Fitness Center</li>
                                                <li class="list-group-item icons-list-amenities"><img src={highSpeedIcon} className="icons-list-image" />High Speed</li>
                                            </ul>
                                            <ul class="list-group">
                                                <li class="list-group-item icons-list-amenities"><img src={swimmingIcon} className="icons-list-image" />Swimming</li>
                                                <li class="list-group-item icons-list-amenities"><img src={onsiteMaintenanceIcon} className="icons-list-image" />On Site Maintenance</li>
                                                <li class="list-group-item icons-list-amenities"><img src={groceryServiceIcon} className="icons-list-image" />Grocery Service</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 flex-bottom">
                                        <div className="row text-center">
                                            <div className="col">
                                                <div className="counter">
                                                    <img src={homeIcon} className="fa-2x" />
                                                    <h2 className="timer count-title count-number">Property Type</h2>
                                                    <p className="count-text ">Single Family</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="counter">
                                                    <img src={buildingIcon} className="fa-2x" />
                                                    <h2 className="timer count-title count-number">Active Units</h2>
                                                    <p className="count-text ">2</p>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="counter">
                                                    <img src={tickIcon} className="fa-2x" />
                                                    <h2 className="timer count-title count-number">Status</h2>
                                                    <p className="count-text-unique ">Active</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div id="map-container-google-1" className="z-depth-1-half map-container map-custom">
                                            <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" className="map-custom-class" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>
                    </TabPane>
                    <TabPane tab="Units" key="4">
                        <SearchBar btnTitle='Add New Unit' />
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
                    </TabPane>
                    <TabPane tab="Tenants" key="5">
                    {
                        showTenantDetails === true ?
                        <>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="task-overview-tab-boxes p-3 position-relative">
                                        <div className="overview-box-img">
                                            <img src={depositsHeldIcon} alt="" />
                                        </div>
                                        <div className="over-view-box-text">
                                            <span>Deposits Held</span>
                                            <h3>$200</h3>
                                        </div>
                                        <div className="setting-icon">
                                            <img src={settingBtnIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="task-overview-tab-boxes p-3 position-relative">
                                        <div className="overview-box-img">
                                            <img src={depositHeldSecondIcon} alt="" />
                                        </div>
                                        <div className="over-view-box-text">
                                            <span>Deposits Held</span>
                                            <h3>$1000</h3>
                                        </div>
                                        <div className="setting-icon">
                                            <img src={settingBtnIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="task-overview-tab-boxes p-3 position-relative">
                                        <div className="overview-box-img">
                                            <img src={monthlyRentIcon} alt="" />
                                        </div>
                                        <div className="over-view-box-text">
                                            <span>Monthly Rent</span>
                                            <h3>$1055.00</h3>
                                        </div>
                                        <div className="setting-icon">
                                            <img src={settingBtnIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-10">
                                    <div className="task-info-heading">
                                        <h4>Personal Info</h4>
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
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Email:</span> olivia-johnn1997@gmail.com</p>
                                            </div>
                                            <div className="col-md-4"></div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Phone No:</span> +1 (555) 456-7890</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Date of Birth:</span> 12/02/1996</p>
                                            </div>
                                            <div className="col-md-4"></div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Gender:</span> Female</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p><span className="task-info-list-span me-3">Current Address:</span> 354 Gladwell Street, PITTSBURGH, Pennsylvania(PA), 15283</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p><span className="task-info-list-span me-3">Previous Address:</span> 4570 Griffin Street Arizona 85003</p>
                                            </div>
                                            <div className="col-md-2"></div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Rent Amount:</span> $ 2,500</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Lease Term:</span> Fixed Term</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Lease Term Start Date:</span> 01/11/2021</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Lease Term Last Date:</span> 12/22/2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 text-end">
                                    <img src={tenantUserImage} alt="" />
                                </div>
                            </div>
                            <hr />
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <div className="task-info-heading">
                                        <h4>Emergency Info</h4>
                                    </div>
                                    <div className="task-info-lists">
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
                                            <div className="col-md-4"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Relationship:</span> Sister</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Description:</span> -</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <div className="task-info-heading">
                                        <h4>Pet Info</h4>
                                    </div>
                                    <div className="task-info-lists">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Pet Type:</span> Dog</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Name:</span> Snow</p>
                                            </div>
                                            <div className="col-md-4"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Weight:</span> -</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Bread:</span> -</p>
                                            </div>
                                            <div className="col-md-4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <div className="task-info-heading">
                                        <h4>Vehicle Info</h4>
                                    </div>
                                    <div className="task-info-lists">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p><span className="task-info-list-span me-3">Vehicle Type:</span> Automobile</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Make:</span> -</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Model:</span> -</p>
                                            </div>
                                            <div className="col-md-4"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Year:</span> -</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Color:</span> -</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">License:</span> -</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <div className="task-info-heading">
                                        <h4>Dependent Info</h4>
                                    </div>
                                    <div className="task-info-lists">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">First Name:</span> Tina</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Middle Name:</span> Doe</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Last Name:</span> John</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Date of Birth:</span> 02/14/1996</p>
                                            </div>
                                            <div className="col-md-4">
                                            </div>
                                            <div className="col-md-4">
                                                <p><span className="task-info-list-span me-3">Relationship:</span> -</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <div className="task-info-heading">
                                        <h4>Add Notes</h4>
                                    </div>
                                    <div className="task-info-lists">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p><span className="task-info-list-span"></span> -</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </>
                        :
                        <>

                        <SearchBar btnTitle='Add New Tenant' />
                        <div className="task-table-container mt-3">
                            <Table
                                rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                }}
                                columns={tenantColumns}
                                dataSource={tenantData}
                            />
                        </div>     
                        </>
                       
                    }
                    </TabPane>
                    <TabPane tab="Tasks" key="6">
                    {
                        showTaskDetails === true ?
                        <>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="task-overview-tab-boxes p-3 position-relative">
                                        <div className="overview-box-img">
                                            <img src={depositsHeldIcon} alt="" />
                                        </div>
                                        <div className="over-view-box-text">
                                            <span>Assigned Tasks</span>
                                            <h3>13</h3>
                                        </div>
                                        <div className="setting-icon">
                                            <img src={settingBtnIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="task-overview-tab-boxes p-3 position-relative">
                                        <div className="overview-box-img">
                                            <img src={depositHeldSecondIcon} alt="" />
                                        </div>
                                        <div className="over-view-box-text">
                                            <span>Tasks Completed</span>
                                            <h3>22</h3>
                                        </div>
                                        <div className="setting-icon">
                                            <img src={settingBtnIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="task-overview-tab-boxes p-3 position-relative">
                                        <div className="overview-box-img">
                                            <img src={monthlyRentIcon} alt="" />
                                        </div>
                                        <div className="over-view-box-text">
                                            <span>Pending Tasks</span>
                                            <h3>2</h3>
                                        </div>
                                        <div className="setting-icon">
                                            <img src={settingBtnIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-10">
                                    <div className="task-info-heading">
                                        <h4>Task Info</h4>
                                    </div>
                                    <div className="task-info-lists">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p><span className="task-info-list-span me-3">Ticket Title:</span> Plumbing issues</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p><span className="task-info-list-span me-3">Priority:</span> High</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p><span className="task-info-list-span me-3">Due Date:</span> 12/12/23</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p><span className="task-info-list-span me-3">Status:</span> In Progress</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p><span className="task-info-list-span me-3">Property:</span> 4570 Griffin Street Phoenix, Arizona(AZ), 85003</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p><span className="task-info-list-span me-3">Documents:</span> docs paper-2</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <span>
                                                <input type="checkbox" className="form-control" />Notify Assignee(s)
                                                <input type="checkbox" className="form-control" checked />Notify Tenant
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 text-end">
                                    <img src={tenantUserImage} alt="" />
                                </div>
                            </div>
                        </>
                        :
                        <>
                        <SearchBar onClick={onOpenModalTask} btnTitle='Add New Task' />
                        <div className="task-table-container mt-3">
                            <Table
                                rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                }}
                                columns={tasksColumns}
                                dataSource={tasksData}
                            />
                        </div>
                        </>
                    }
                    </TabPane>
                    <TabPane tab="Connect Account" key="7">
                        <SearchBar btnTitle='Add New Account' />
                        <div className="task-table-container mt-3">
                            <Table
                                rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                }}
                                columns={accountColumns}
                                dataSource={accountData}
                            />
                        </div>
                    </TabPane>
                    <TabPane tab="Reports" key="8">
                        <div className="container bg-white p-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="task-search-input position-relative">
                                        <input type="text" placeholder='Search' className="form-control search-form-control-task" />
                                        <div className="search-icon-task">
                                            <img src={searchIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <div className="report-type-text-container mt-3">
                                        <span className="report-type-text ">Report Type</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-4">
                                    <div className="report-type-box d-flex gap-3 align-items-center">
                                        <Select 
                                            defaultValue="Property Reports"
                                            style={{
                                                width: '100%',
                                            }}
                                            onChange={routeHandleChange}
                                            options={[
                                                {
                                                    label: 'GENERAL REPORTS',
                                                    options: [
                                                        {
                                                            label: 'Lease Reports',
                                                            value: 'Lease Reports',
                                                        },
                                                        {
                                                            label: 'Property Reports',
                                                            value: 'Property Reports',
                                                        },
                                                        {
                                                            label: 'Tenant Reports',
                                                            value: 'Tenant Reports',
                                                        },
                                                        {
                                                            label: 'Invoice Reports',
                                                            value: 'Invoice Reports',
                                                        },
                                                        {
                                                            label: 'Task Reports',
                                                            value: 'Task Reports',
                                                        },
                                                        {
                                                            label: 'Upcoming Expiring Lease',
                                                            value: 'Upcoming Expiring Lease',
                                                        },
                                                    ],
                                                },
                                                {
                                                    label: 'FINANCIAL REPORTS',
                                                    options: [
                                                        {
                                                            label: 'General Ledger',
                                                            value: 'General Ledger',
                                                        },
                                                        {
                                                            label: 'Balance Sheet',
                                                            value: 'Balance Sheet',
                                                        },
                                                        {
                                                            label: 'Rent Roll',
                                                            value: 'Rent Roll',
                                                        },
                                                        {
                                                            label: 'Profit and Loss',
                                                            value: 'Profit and Loss',
                                                        },
                                                        {
                                                            label: 'Deposit Summary',
                                                            value: 'Deposit Summary',
                                                        },
                                                    ],
                                                },
                                            ]}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-8 text-end">
                                    <div className="report-export-buttons d-flex justify-content-end align-items-center gap-3">
                                        <div className="export-btn-container position-relative">
                                            <button
                                            onClick = {() => {
                                                setExportDropdown(!exportDropdown)
                                            }} 
                                            className="export-btn">Export as <span className=""><svg width={18} height={18} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6" /></svg></span></button>
                                            <div className={exportDropdown === true ? "export-dropdown box-shadow export-dropdown-show" : "export-dropdown box-shadow"}>
                                                <ul className='d-flex flex-column justify-content-start text-start gap-3 p-0 mb-0'>
                                                    <li className='list-style-none'>Excel</li>
                                                    <li onClick={() => toPDF()} className='list-style-none cursor'>PDF</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <CSVLink data={data} className="modal-save-btn">Download</CSVLink>
                                    </div>
                                </div>
                            </div>
                            <div className="report-table-container mt-3" ref={targetRef}>
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={reportsColumns}
                                    dataSource={reportsData}
                                />
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Files" key="9">
                        <SearchBar btnTitle="Add New File" />
                        <div className="row mt-4">
                            <div className="col-md-12">
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={filesColumns}
                                    dataSource={filesData}
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
                        <div className="container bg-white p-3 d-none">
                            <div className="row">
                                <div className="col-md-12">
                                    <span>File Name<span className="sign-up-imp-star">*</span></span>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-3 text-center">
                                <div className="col-md-12">
                                    <FileUploader fileHeight="height" fileWidth="width" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <div className="notes-btn d-flex align-items-center justify-content-center gap-3">
                                        <button className="cancel-btn">Cancel</button>
                                        <button className="save-btn">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Notes" key="10">
                        <div className="container bg-white p-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="property-details-input-title">Note Name<span className="sign-up-imp-star">*</span></span>
                                    <input type="text" className="form-control mt-3" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <span className="property-details-input-title">Write Your Note</span>
                                    <textarea name="" id="" cols="30" rows="10" className="form-control mt-3"></textarea>
                                </div>
                            </div>
                            <div className="row mt-4 text-center">
                                <div className="col-md-12">
                                    <FileUploader fileHeight="height" fileWidth="width" />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <div className="notes-btn d-flex align-items-center justify-content-center gap-3">
                                        <button className="cancel-btn">Cancel</button>
                                        <button className="save-btn">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="not-found-container text-center d-none">
                            <SearchBar btnTitle="Add New Note" />
                            <img src={NotFound} alt="" />
                            <p><strong>No Notes found</strong></p>
                            <p>No files were found; the folder is empty. <br />
                                Please try again.</p>
                            <button className="not-found-add-task-btn primary-orange-text"><span className="plus"><svg width={21} height={21} fill="#EF6B3E" stroke="#EF6B3E" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5v14" />
                                <path d="M5 12h14" />
                            </svg></span>Add Notes</button>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
}

export default PropertyDetailsView