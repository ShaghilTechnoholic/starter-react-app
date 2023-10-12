import React, { useState } from 'react'
import searchIcon from '../../src/assets/search.png'
import FilterIcon from '../../src/assets/filter.png'
import { useNavigate } from 'react-router-dom'
const SearchBar = ({ btnTitle, onClick, CreateLease }) => {
    const [taskFilterDropdown, settaskFilterDropdown] = useState(false);
    const navigate = useNavigate();
    return (
        <>

            <div className="row">
                <div className="col-md-8">
                    <div className="task-search-input position-relative">
                        <input type="text" placeholder='Search' className="form-control search-form-control-task" />
                        <div className="search-icon-task">
                            <img src={searchIcon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="task-buttons d-flex gap-3 justify-content-center">
                        <div className="position-relative">
                            <button
                                onClick={() => {
                                    settaskFilterDropdown(!taskFilterDropdown)
                                }}
                                className='filter-btn d-flex align-items-center'> <img src={FilterIcon} alt="" /> Filter</button>
                            <div className={taskFilterDropdown === true ? "filter-dropdown position-absolute" : "d-none"}>
                                <div className="filter-checkbox-container">
                                    <strong style={{ fontSize: '12px' }}>FILTER BY</strong>
                                    <p>Default</p>
                                    <p>Priority</p>
                                    <p><input type="checkbox" name="" id="" /> High</p>
                                    <p><input type="checkbox" name="" id="" /> Medium</p>
                                    <p><input type="checkbox" name="" id="" /> low</p>
                                </div>
                                <span className='filter-dropdown-btn w-100 text-start'>Ascending</span>
                                <span className='filter-dropdown-btn w-100 text-start'>Descending</span>
                            </div>
                        </div>
                        {
                            !CreateLease ?
                                <button onClick={onClick} className='add-new-task-btn w-100'> <span ><svg width={21} height={21} fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5v14" />
                                    <path d="M5 12h14" />
                                </svg></span>{btnTitle}</button>
                                :
                                <button onClick={() => {
                                    navigate(`/${CreateLease}`)
                                }} className='add-new-task-btn w-100'> <span ><svg width={21} height={21} fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5v14" />
                                    <path d="M5 12h14" />
                                </svg></span>{btnTitle}</button>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar
