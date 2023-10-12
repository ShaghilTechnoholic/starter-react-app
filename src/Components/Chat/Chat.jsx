import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChatUsers } from '../../Store/Slices/ChatUserSlice'
import { useEffect } from 'react';
import ChatUserList from './ChatUserList/ChatUserList';
import ChatBody from './ChatBody/ChatBody';

const Chat = () => {

    return (
        <>
            <div className="container-fluid bg-white p-3">
                <div className="row">
                    <div className="col-md-3 col-lg-4 border-end pe-0">
                        <ChatUserList />
                    </div>
                    <div className="col-md-9 col-lg-8 position-relative ps-0">
                        <ChatBody />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
