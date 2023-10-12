import React, { useState } from 'react'
import searchIcon from '../../../assets/search.png'
import oval from '../../../assets/Oval.png'
import { useNavigate } from 'react-router-dom'
const users = [
    {
        id: 1,
        name: "Andrew Parker",
        message: "What kind of strategy is better?",
        time: "13:55",
        img: oval
    },
    {
        id: 2,
        name: "Emily Honest",
        message: "What kind of strategy is better?",
        time: "13:55",
        img: oval
    },
    {
        id: 3,
        name: "Emily Honest",
        message: "What kind of strategy is better?",
        time: "13:55",
        img: oval
    },
    {
        id: 4,
        name: "Olivia Joe",
        message: "What kind of strategy is better?",
        time: "13:55",
        img: oval
    },
    {
        id: 5,
        name: "Angelia Raph",
        message: "What kind of strategy is better?",
        time: "13:55",
        img: oval
    },
    {
        id: 6,
        name: "Sami Walker",
        message: "What kind of strategy is better?",
        time: "13:55",
        img: oval
    },
    {
        id: 7,
        name: "Isabella Stone",
        message: "What kind of strategy is better?",
        time: "13:55",
        img: oval
    },
    {
        id: 8,
        name: "Robert Jones",
        message: "What kind of strategy is better?",
        time: "13:55",
        img: oval
    },

]
const ChatUserList = ({ archive }) => {
    const [userData, setUserData] = useState(users)
    const navigate = useNavigate()
    return (
        <>
            <div className="chat-user-list-container p-2 ">
                <div className="chat-search-bar border-bottom position-relative pb-3">
                    <input type="text" placeholder='Search' className="form-control search-form-control-task" />
                    <div className="search-icon-task">
                        <img src={searchIcon} alt="" />
                    </div>
                </div>
                <div className="chat-archive-bar position-relative mt-3 text-center">
                    <button
                        onClick={() => {
                            navigate("/archive-user")
                        }}
                        className={archive ? "d-none archive-chat-button w-100" : "archive-chat-button w-100"}>
                        <span>
                            <svg width={21} height={21} fill="#98A2B3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 21 6ZM6 5h12a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm12 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12v9Z" />
                                <path d="M14.13 12H9.87a.87.87 0 0 0-.87.87v.26c0 .48.39.87.87.87h4.26c.48 0 .87-.39.87-.87v-.26a.87.87 0 0 0-.87-.87Z" />
                            </svg>
                        </span> Archived Chats
                    </button>
                </div>

                {
                    userData.map((item) => {
                        return (
                            <>
                                <div className="chat-user-lists gap-3 d-flex  align-items-center border-bottom p-3">
                                    <div key={item.id} className="chat-user-img">
                                        <img src={oval} alt="" />
                                    </div>
                                    <div className="chat-user-info">
                                        <p className="mb-0">{item.name}</p>
                                        <p className="mb-0 normal-grey-text">{item.message}</p>
                                    </div>
                                    <div className="chat-user-time">
                                        <p className="mb-0 normal-grey-text">{item.time}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default ChatUserList
