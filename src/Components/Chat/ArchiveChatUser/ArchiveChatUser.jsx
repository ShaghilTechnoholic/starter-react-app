import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import searchIcon from '../../../assets/search.png'
import oval from '../../../assets/Oval.png'
const users = [
    {
        id: 1,
        name: "Andrew Parker",
        message: "What kind of strategy is better?",
        time: "13:55",
    },
    {
        id: 2,
        name: "Emily Honest",
        message: "What kind of strategy is better?",
        time: "13:55",
    },
    {
        id: 3,
        name: "Emily Honest",
        message: "What kind of strategy is better?",
        time: "13:55",
    },
    {
        id: 4,
        name: "Olivia Joe",
        message: "What kind of strategy is better?",
        time: "13:55",
    },
    {
        id: 5,
        name: "Angelia Raph",
        message: "What kind of strategy is better?",
        time: "13:55",
    },]
const ArchiveChatUser = () => {
    const [userData, setUserData] = useState(users)
    const navigate = useNavigate()
    return (
        <>
            <div className="container-fluid bg-white p-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="chat-search-bar  position-relative ">
                            <input type="text" placeholder='Search' className="form-control search-form-control-task" />
                            <div className="search-icon-task">
                                <img src={searchIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        {
                            userData.map((item) => {
                                return (
                                    <>
                                        <div
                                            onClick={() => {
                                                navigate("/archive-chat")
                                            }}
                                            className="archive-chat-user-list mt-3 d-flex align-items-center gap-3 position-relative">
                                            <div className="archive-chat-user-img">
                                                <img src={oval} alt="" />
                                            </div>
                                            <div className="archive-chat-user-text">
                                                <p className="mb-0 text-dark fw-medium">{item.name}</p>
                                                <p className="mb-0 normal-grey-text">{item.message}</p>
                                            </div>
                                            <div className="archive-chat-user-time position-absolute ">
                                                <p className="mb-0 normal-grey-text">{item.time}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default ArchiveChatUser
