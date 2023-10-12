import React, { useState } from 'react'
import { Tabs } from 'antd'
import NotFound from '../../assets/not-found-img.png'
import FileUploader from '../FileUploader/FileUploader';
import SearchBar from '../../Helpers/SearchBar';
import documentIcon from '../../assets/document.png';
import ownerImage from '../../assets/tenant_table_image-01.png'
import settingIcon from '../../assets/three-dots.png';
import editIcon from '../../assets/edit-05.png'
import editIconOrange from '../../assets/edit 05 Orange.png'
import deleteIcon from '../../assets/trash-01.png'
import deleteIconOrange from '../../assets/trash-01 - Orange.png'
import viewIcon from '../../assets/Icon.png'
import oval from '../../assets/Oval.png'
import settingBtn from '../../assets/more-vertical.png'
import completeIcon from '../../assets/calendar-check-01.png'
import tenantUser1 from '../../assets/tenant_table_image-01.png'
import tenantUser2 from '../../assets/tenant_table_image -02.png'
import activeDot from '../../assets/_Dot.png'
import inactiveDot from '../../assets/inactivedot.png'
import loginIcon from '../../assets/file-03.png'
import homeIcon from '../../assets/icon_house.png'
import sliderOneImage from '../../assets/unit-details-slider one.png'
import sliderTwoImage from '../../assets/units-details-slider-two.png'
import { Table } from 'antd';

const PropertiesUnitsView = () => {
    const { TabPane } = Tabs;

    const [selectionType, setSelectionType] = useState('checkbox');
    const [key, setKey] = useState([]);

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
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

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
    const data = [
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

    const leaseColumns = [
      {
          title: 'LEASE',
          dataIndex: 'lease',
          render: (text, name) => <> <span className='tenant_table_name_text'>{text}</span></>,
      },
      {
        title: 'DATE',
        dataIndex: 'date',
        render: (text) => <><span>{text}</span></>,
    },
      {
          title: 'TERM',
          dataIndex: 'term',
          render: (text, status) => <>
              <div className={status.key === '2' ? 'prospect-inactive-bar' : 'prospect-active-bar'}>
                  <img src={status.key === '2' ? inactiveDot : activeDot} alt="" /> <span >{text}</span>
              </div>

          </>
      },
      {
          title: 'RENT',
          dataIndex: 'rent',
          render: (text) => <><span className='tenant_table_phone_text'>{text}</span></>,
      },
      {
        title: 'DEPOSITS',
        dataIndex: 'deposits',
        render: (text) => <><span className='tenant_table_phone_text'>{text}</span></>,
      },
      {
        title: 'BALANCE',
        dataIndex: 'balance',
        render: (text) => <><span className='tenant_table_phone_text'>{text}</span></>,
      },
      {
        title: 'STATUS',
        dataIndex: 'status',
        render: (text, status) => <>
                {status.key === '1' &&
                    <>
                        <p className="active-label pb-0 mb-0"></p>
                        <span className='primary-orange-text'>Balance Due</span>
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
                                      setShowTenantDetails(true)
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
  const leaseData = [
      {
          key: '1',
          lease: '295 Retton CirWilliamson',
          date: '11/12/22',
          term: 'Month-to-Month',
          rent: "$1,055.00",
          deposits: '$875.00',
          balance: '$1,055.00',
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
                <Tabs defaultActiveKey="1" className="properties_units_view_tabs">
                    <TabPane tab="Overview" key="1">
                      {/*<img src={sliderOneImage} alt="" className="w-50 h-50" data-bs-toggle="modal" data-bs-target="#imageExample" />
                      <div className="modal fade" id="imageExample" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-body">
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              <img src={sliderOneImage} className="d-block w-100" />
                            </div>
                        </div>
                      </div>*/}

                      <div className="row">
                        <div className="col-md-12 mt-5 mb-5 text-center">
                          <img src={NotFound} alt="" />
                          <p><strong>Start by uploading the image</strong></p>
                          <p>Any image used in property will live here. <br />
                          Start creating by uploading your images.</p>
                          <button className="not-found-add-task-btn primary-orange-text"><span className="plus"><svg width={21} height={21} fill="#EF6B3E" stroke="#EF6B3E" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 5v14" />
                              <path d="M5 12h14" />
                          </svg></span>Upload</button>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <p>1100 Welker LnJersey Shore, Pennsylvania(PA), 17740</p>
                          <h2>295 Retton CirWilliamson</h2>
                        </div>
                      </div>

                      <Tabs defaultActiveKey="7" className="property_details_view_sub_tabs">
                        <TabPane tab="Description" key="7">
                          <div className="row mt-5 mb-5">
                            <div className="col-md-12">
                              <p>Not Set</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 flex-bottom">
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
                                    <img src={homeIcon} className="fa-2x" />
                                    <h2 className="timer count-title count-number">Property Type</h2>
                                    <p className="count-text ">Single Family</p>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="counter">
                                    <img src={homeIcon} className="fa-2x" />
                                    <h2 className="timer count-title count-number">Property Type</h2>
                                    <p className="count-text ">Single Family</p>
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="counter">
                                    <img src={homeIcon} className="fa-2x" />
                                    <h2 className="timer count-title count-number">Property Type</h2>
                                    <p className="count-text ">Single Family</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tab="Amenities" key="8"></TabPane>
                      </Tabs>

                      <div className="d-none">
                        <h1>Therichpost.com</h1>
                        <div className="gallery-wrapper">
     
                          <div className="image-wrapper">
                            <a href="#lightbox-image-1">
                              <img src={sliderOneImage} alt="" />
                              <div className="image-title">Cat staring at me</div>
                            </a>
                          </div>
                          <div className="image-wrapper">
                            <a href="#lightbox-image-2">
                              <img src={sliderTwoImage} alt="" />
                              <div className="image-title">Cat playing with mouse</div>
                            </a>
                          </div>
                          <div className="image-wrapper">
                            <a href="#lightbox-image-3">
                              <img src={sliderOneImage} alt="" />
                              <div className="image-title">Cat turns away</div>
                            </a>
                          </div>
                        </div>

                        <div className="gallery-lightboxes">
        
                          <div className="image-lightbox" id="lightbox-image-1">
                            <div className="image-lightbox-wrapper">
                              <a href="#" className="close"></a>
                              <a href="#lightbox-image-3" className="arrow-left"></a>
                              <a href="#lightbox-image-2" className="arrow-right"></a>
                              <img src={sliderOneImage} alt="" />
                              <div className="image-title">Cat staring at me</div>
                            </div>
                          </div>
        
                          <div className="image-lightbox" id="lightbox-image-2">
                            <div className="image-lightbox-wrapper">
                              <a href="#" className="close"></a>
                              <a href="#lightbox-image-1" className="arrow-left"></a>
                              <a href="#lightbox-image-3" className="arrow-right"></a>
                              <img src={sliderTwoImage} alt="" />
                              <div className="image-title">Cat playing with mouse</div>
                            </div>
                          </div>
        
                          <div className="image-lightbox" id="lightbox-image-3">
                            <div className="image-lightbox-wrapper">
                              <a href="#" className="close"></a>
                              <a href="#lightbox-image-2" className="arrow-left"></a>
                              <a href="#lightbox-image-1" className="arrow-right"></a>
                              <img src={sliderOneImage} alt="" />
                              <div className="image-title">Cat turns away</div>
                            </div>
                          </div>
        
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tab="Leases" key="2">
                        <SearchBar btnTitle='Add New Lease' />
                        <div className="task-table-container mt-3">
                            <Table
                                rowSelection={{
                                    type: selectionType,
                                    ...rowSelection,
                                }}
                                columns={leaseColumns}
                                dataSource={leaseData}
                            />
                        </div>
                    </TabPane>
                    <TabPane tab="Tenants" key="3">
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
                    </TabPane>
                    <TabPane tab="Tasks" key="4">
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
                    </TabPane>
                    <TabPane tab="Files" key="5">
                        <SearchBar btnTitle="Add New File" />
                        <div className="row mt-4">
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
                    <TabPane tab="Notes" key="6">
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

export default PropertiesUnitsView