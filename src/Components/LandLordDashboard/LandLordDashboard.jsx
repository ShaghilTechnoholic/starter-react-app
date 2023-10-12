import React, { useState, useEffect } from 'react'
import SideDrawer from '../SideDrawer/SideDrawer'
import notificationIcon from '../../assets/bell-01.png'
import helpIcon from '../../assets/Help icon.png'
import todayMoneyIcon from '../../assets/today-money-icon.png'
import ArrowIcon from '../../assets/arrow-up.png'
import TenantCountIcon from '../../assets/tenant-count.png'
import PropertyCountIcon from '../../assets/properties-count.png'
import revenvueIcon from '../../assets/more-vertical.png'
import CalendarIcon from '../../assets/calendar.png'
import deleteIcon from '../../assets/delete1.png'
import orangeCircularBox from '../../assets/orange-circular-box.png'
import greyCircularBox from '../../assets/grey-circular-box.png'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ColumnChartDashboard from '../ColumnChartDashboard/ColumnChartDashboard'
import { Tooltip } from 'antd';
import LandLordDashboardChart from '../LandLordDashboardChart/LandLordDashboardChart'
import userProfile from '../../assets/user-profile-img.png'
import LineChart from '../LineChart/LineChart'
import ProspectChart from '../ProspectChart/ProspectChart'
import RevenueBarChart from '../RevenvueBarChart/RevenueBarChart'
import PropertyBarChart from '../PropertyBarChart/PropertyBarChart'
import inProgressIcon from '../../assets/in-progress-icon.png'
import completedIcon from '../../assets/completed-icon.png'
import notStartedIcon from '../../assets/not-started-icon.png'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TitleTopBar from '../../Helpers/TitleTopBar'
const LandLordDashboard = () => {
  // States
  const [removeRevenue, setremoveRevenue] = useState(false)
  const [removeProperty, setremoveProperty] = useState(false)
  const [removeTenant, setremoveTenant] = useState(false)
  const [removeProspect, setremoveProspect] = useState(false)
  const [removerevenue, setremoverevenue] = useState(false)
  const [removeVacancy, setremoveVacancy] = useState(false)
  const [removeTask, setremoveTask] = useState(false)
  // Functions
  const percentage = 85;
  const text = <span>{percentage}%</span>

  const [items, setItems] = useState(['item-1', 'item-2']);
  const [removePropertyDrop, setRemoveProperty] = useState(false);
  const [removeRevenueDrop, setRemoveRevenue] = useState(false);

  const handleDrop = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.index === destination.index) return;
    const reorderedItems = [...items];
    const [draggedItem] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, draggedItem);
    setItems(reorderedItems);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-sm-0 position-relative drawer-bg-primary">
            <SideDrawer landLord={true} />
          </div>
          <div className="col-md-10 pe-0 mt-3">
            <div className="container-fluid">
              <TitleTopBar topBarTitle='Dashboard' />
            </div>
            <div className="container-fluid bg-white p-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="land-lord-dashboard-box-container">
                    <div className="land-lord-dashboard-update-box pb-4 d-flex align-items-center justify-content-between">
                      <div className="land-lord-dashboard-update-text">
                        <span className="drawer-text-grey">TODAY'S Money</span>
                        <p className="text-dark fw-bold fs-5">$53,000</p>
                      </div>
                      <div className="land-lord-dashboard-update-img align-self-start">
                        <img src={todayMoneyIcon} alt="" />
                      </div>
                    </div>
                    <div className="land-lord-dashboard-update-percent ">
                      <p className='normal-grey-text mb-0'> <span className='dashboard-success-text fw-bold'><img src={ArrowIcon} alt="" /> 20% </span>  vs Last Month</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="land-lord-dashboard-box-container">
                    <div className="land-lord-dashboard-update-box pb-4 d-flex align-items-center justify-content-between">
                      <div className="land-lord-dashboard-update-text">
                        <span className="drawer-text-grey">TOTAL TENANTS</span>
                        <p className="text-dark fw-bold fs-5">2,300</p>
                      </div>
                      <div className="land-lord-dashboard-update-img align-self-start">
                        <img src={TenantCountIcon} alt="" />
                      </div>
                    </div>
                    <div className="land-lord-dashboard-update-percent ">
                      <p className='normal-grey-text mb-0'> <span className='dashboard-success-text fw-bold'><img src={ArrowIcon} alt="" /> +3% </span>  vs Last Month</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="land-lord-dashboard-box-container">
                    <div className="land-lord-dashboard-update-box pb-4 d-flex align-items-center justify-content-between">
                      <div className="land-lord-dashboard-update-text">
                        <span className="drawer-text-grey">TOTAL PROPERTIES</span>
                        <p className="text-dark fw-bold fs-5">200</p>
                      </div>
                      <div className="land-lord-dashboard-update-img align-self-start">
                        <img src={PropertyCountIcon} alt="" />
                      </div>
                    </div>
                    <div className="land-lord-dashboard-update-percent ">
                      <p className='normal-grey-text mb-0'> <span className='dashboard-success-text fw-bold'><img src={ArrowIcon} alt="" /> 5% </span>  vs Last Month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <DragDropContext onDragEnd={handleDrop}>
                  <Droppable droppableId='ROOT' type="group">
                    {(provided) => (
                      <div className='d-flex flex-row-reverse gap-3' {...provided.droppableProps} ref={provided.innerRef}>
                        {items.map((itemId, index) => (
                          <Draggable key={itemId} draggableId={itemId} index={index}>
                            {(provided) => (
                              <div
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                                className="col-md-6"
                              >
                                {itemId === 'item-1' && (
                                  <div className="land-lord-properties-chart-box text-center">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="revenue-top-box d-flex align-item-start justify-content-between">
                                          <div className="revenue-box-heading">
                                            <span className='fw-bold fs-5'>Properties {items.id}</span> <span className='ms-4 revenvue-calendar drawer-text-grey'><img src={CalendarIcon} alt="" /> Jan - Sep </span>
                                            <p className='mt-2 text-start'>March 1, 2020 - April 31, 2021</p>
                                          </div>
                                          <div

                                            className="revenue-box-right-icon position-relative text-end ">
                                            <img
                                              onClick={() => {
                                                setremoveProperty(!removeProperty)
                                              }}
                                              src={revenvueIcon} className='cursor' alt="" />
                                            <div className={removeProperty === true ? "revenue-delete-box delete-box-show mt-3" : "revenue-delete-box mt-3"}>
                                              <span className="text-delete"><img src={deleteIcon} alt="" /> Remove</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12" >
                                        <div className="circular-progress-bar-container">
                                          <Tooltip placement="leftTop" title={text}>
                                            <span>
                                              <CircularProgressbar value={85} text={`200 Properties`} />
                                            </span>
                                          </Tooltip>
                                        </div>
                                        <div className="progress-bar-info text-start">
                                          <div className="occupied-property-info"><img src={greyCircularBox} alt="" /> <span className='normal-grey-text ms-2'>Vacant Properties</span></div>
                                          <div className="vacant-property-info"><img src={orangeCircularBox} alt="" /> <span className='normal-grey-text ms-2'>Occupied Properties</span></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {itemId === 'item-2' && (
                                  <div className="land-lord-dashboard-revenue-box">
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="revenue-top-box d-flex align-item-start justify-content-between">
                                          <div className="revenue-box-heading">
                                            <span className='fw-bold fs-5'>Revenue</span> <span className='ms-4 revenvue-calendar drawer-text-grey'><img src={CalendarIcon} alt="" /> Jan - Sep </span>
                                            <p className='mt-2'>March 1, 2020 - April 31, 2021</p>
                                          </div>
                                          <div

                                            className="revenue-box-right-icon position-relative text-end ">
                                            <img
                                              onClick={() => {
                                                setremoveRevenue(!removeRevenue)
                                              }}
                                              src={revenvueIcon} className='cursor' alt="" />
                                            <div className={removeRevenue === true ? "revenue-delete-box delete-box-show mt-3" : "revenue-delete-box mt-3"}>
                                              <span className="text-delete"><img src={deleteIcon} alt="" /> Remove</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <ColumnChartDashboard />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  <div>
                  </div>
                </DragDropContext>

                <div className="col-md-8 mt-3">
                  <LandLordDashboardChart />
                </div>
                <div className="col-md-4 mt-3">
                  <div className="dashboard-activity-box box-shadow position-relative d-flex flex-column justify-content-around h-100  p-3">
                    <div className="activity-first-image d-flex gap-3 align-items-start">
                      <img src={userProfile} className='object-fit-contain ' alt="" />
                      <div className="activity-box-task">
                        <span className="new-task-icon primary-orange-text fw-bold">
                          <svg width={21} height={21} fill="#EF6B3E" stroke="#EF6B3E" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 15h13.865a1 1 0 0 0 .768-1.64L15 9l3.633-4.36A1 1 0 0 0 17.865 3H4v18" />
                          </svg>
                          new task
                        </span>
                        <p className="text-dark mb-0"><strong>Logan Harrington</strong> created new mail...</p>
                        <p className="text-dark">Today, 9:48 AM</p>

                        <div className="activity-middle-box p-2 rounded-3">
                          <strong>Water Drip from Faucots</strong> <span className='drawer-text-grey  fw-bold'>#284</span>
                          <br />
                          <span className='primary-bg ps-1 pe-2 text-white rounded-5'>MAINTENANCE</span>
                        </div>
                      </div>
                    </div>
                    <div className="activity-second-image d-flex gap-3">
                      <img src={userProfile} className='object-fit-contain ' alt="" />
                      <div className="activity-box-task">
                        <span className="new-task-icon dashboard-success-text fw-bold">
                          <svg width={21} height={21} fill="#027A48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm4.768 9.14a1 1 0 1 0-1.536-1.28l-4.3 5.159-2.225-2.226a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.475-.067l5-6z" clipRule="evenodd" />
                          </svg>
                          <span className="ms-1">task Completed</span>
                        </span>
                        <p className="text-dark mb-0"><strong>Georgia Mollie</strong> completed task <strong>#276</strong></p>
                        <p className="text-dark">Yesterday, 3:58 pm</p>
                      </div>
                    </div>
                    <div className="task-line position-absolute"></div>
                  </div>
                </div>
                <div className="col-md-8 mt-3">
                  <div className="land-lord-dashboard-revenue-box">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="revenue-top-box d-flex align-item-start justify-content-between">
                          <div className="revenue-box-heading">
                            <span className='fw-bold fs-5'>Tenant</span> <span className='ms-4 revenvue-calendar drawer-text-grey'><img src={CalendarIcon} alt="" /> Jan - Oct </span>
                            <p className='mt-2'>March 1, 2020 - April 31, 2021</p>
                          </div>
                          <div

                            className="revenue-box-right-icon position-relative text-end ">
                            <img
                              onClick={() => {
                                setremoveTenant(!removeTenant)
                              }}
                              src={revenvueIcon} className='cursor' alt="" />
                            <div className={removeTenant === true ? "revenue-delete-box delete-box-show mt-3" : "revenue-delete-box show mt-3"}>
                              <span className="text-delete"><img src={deleteIcon} alt="" /> Remove</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <LineChart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                  <div className="prospect-box ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="revenue-top-box d-flex align-item-start justify-content-between">
                          <div className="revenue-box-heading mt-4">
                            <span className='fw-bold fs-5'>Propects</span> <span className='ms-4 revenvue-calendar drawer-text-grey'><img src={CalendarIcon} alt="" /> Jan - Sep </span>
                            <p className='mt-2'>March 1, 2020 - April 31, 2021</p>
                          </div>
                          <div

                            className="revenue-box-right-icon position-relative text-end ">
                            <img
                              onClick={() => {
                                setremoveProspect(!removeProspect)
                              }}
                              src={revenvueIcon} className='cursor' alt="" />
                            <div className={removeProspect === true ? "revenue-delete-box delete-box-show mt-3" : "revenue-delete-box mt-3"}>
                              <span className="text-delete"><img src={deleteIcon} alt="" /> Remove</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mt-5 pt-3">
                        <ProspectChart />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-8 mt-3">
                  <div className="land-lord-dashboard-revenue-box">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="revenue-top-box d-flex align-item-start justify-content-between">
                          <div className="revenue-box-heading">
                            <span className='fw-bold fs-5'>Revenue</span> <span className='ms-4 revenvue-calendar drawer-text-grey'><img src={CalendarIcon} alt="" /> Jan - Oct </span>
                            <p className='mt-2'>March 1, 2020 - April 31, 2021</p>
                          </div>
                          <div

                            className="revenue-box-right-icon position-relative text-end ">
                            <img
                              onClick={() => {
                                setremoverevenue(!removerevenue)
                              }}
                              src={revenvueIcon} className='cursor' alt="" />
                            <div className={removerevenue === true ? "revenue-delete-box delete-box-show mt-3" : "revenue-delete-box mt-3"}>
                              <span className="text-delete"><img src={deleteIcon} alt="" /> Remove</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <RevenueBarChart />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-6 mt-3">
                  <div className="prospect-box ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="revenue-top-box d-flex align-item-start justify-content-between">
                          <div className="revenue-box-heading ">
                            <span className='fw-bold fs-5'>Vacancies By Property</span>
                            <p className='mt-2'>March 1, 2020 - April 31, 2021</p>
                          </div>
                          <div

                            className="revenue-box-right-icon position-relative text-end ">
                            <img
                              onClick={() => {
                                setremoveVacancy(!removeVacancy)
                              }}
                              src={revenvueIcon} className='cursor' alt="" />
                            <div className={removeVacancy === true ? "revenue-delete-box delete-box-show mt-3" : "revenue-delete-box mt-3"}>
                              <span className="text-delete"><img src={deleteIcon} alt="" /> Remove</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 ">
                        <PropertyBarChart />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-3">
                  <div className="prospect-box ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="revenue-top-box d-flex align-item-start justify-content-between">
                          <div className="revenue-box-heading">
                            <span className='fw-bold fs-5'>Tasks</span> <span className='ms-4 revenvue-calendar drawer-text-grey'><img src={CalendarIcon} alt="" /> Jan - Oct </span>
                            <p className='mt-2 text-start'>March 1, 2020 - April 31, 2021</p>
                          </div>
                          <div

                            className="revenue-box-right-icon position-relative text-end ">
                            <img
                              onClick={() => {
                                setremoveTask(!removeTask)
                              }}
                              src={revenvueIcon} className='cursor' alt="" />
                            <div className={removeTask === true ? "revenue-delete-box delete-box-show mt-3" : "revenue-delete-box mt-3"}>
                              <span className="text-delete"><img src={deleteIcon} alt="" /> Remove</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 ">
                        <div className="task-box-container d-flex justify-content-center gap-3 mt-5 pt-5">
                          <div className="task-box primary-bg ">
                            <img className='object-fit-scale' src={inProgressIcon} alt="" />
                            <div className="task-box-text text-white">
                              <p>In Progress</p>
                              <p>20</p>
                            </div>
                          </div>
                          <div className="task-box drawer-bg-primary">
                            <img className='object-fit-scale' src={completedIcon} alt="" />
                            <div className="task-box-text text-white">
                              <p>Completed</p>
                              <p>12</p>
                            </div>
                          </div>
                          <div className="task-box task-box-border">
                            <img className='object-fit-scale' src={notStartedIcon} alt="" />
                            <div className="task-box-text">
                              <p>Not Started</p>
                              <p>3</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-8 mt-3">
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
export default LandLordDashboard