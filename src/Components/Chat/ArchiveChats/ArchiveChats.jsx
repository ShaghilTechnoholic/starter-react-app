import React, { useState, useEffect } from 'react'
import ChatUserList from '../ChatUserList/ChatUserList';
import ChatBody from '../ChatBody/ChatBody';

const ArchiveChats = () => {
    return (
        <>
            <div className="container-fluid bg-white p-3">
                <div className="row">
                    <div className="col-md-3 col-lg-4 border-end pe-0">
                        <ChatUserList archive={true} />
                    </div>
                    <div className="col-md-9 col-lg-8 position-relative ps-0">
                        <ChatBody archive={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArchiveChats
