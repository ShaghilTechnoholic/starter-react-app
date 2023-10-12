import React from 'react'
import olivia from '../../../assets/olivia.png'
import active_dot from '../../../assets/_Dot.png'
const ChatBody = ({ archive }) => {
    return (
        <>
            <div className="chat-body-header d-flex justify-content-between align-items-center border-bottom  flex-grow-1">
                <div className="chat-body-header-left d-flex align-items-center justify-content-center gap-3">
                    <div className="chat-body-header-img">
                        <img src={olivia} alt="" />
                    </div>
                    <div className="chat-body-header-text">
                        <p className="mb-0 text-dark fw-medium">Olivia Joe</p>
                        <p className={archive ? "d-none" : "mb-0 online-text"}> <img src={active_dot} alt="" /> Online</p>
                    </div>
                </div>
                <div className="chat-body-header-right">
                    <button className={archive ? "d-none" : "move-to-archive-btn"}>
                        Move to Archieve
                    </button>
                </div>
            </div>
            <div className="chat-body-container">
                <div className="chat-body mt-5">
                    <div className="chat-message-body-outgoing d-flex justify-content-end align-items-center gap-3">
                        <div className="message-time normal-grey-text fw-medium">11:43</div>
                        <div className="message-outgoing">Hey Olivia. Can we get on a quick call?</div>
                        <div className="message-img">
                            <img src={olivia} alt="" />
                        </div>
                    </div>
                    <div className="chat-message-body-incoming d-flex justify-content-start align-items-center gap-3">
                        <div className="message-img">
                            <img src={olivia} alt="" />
                        </div>
                        <div className="message-incoming">Hey Olivia. Can we get on a quick call?</div>
                        <div className="message-time normal-grey-text fw-medium">11:43</div>
                    </div>
                    <div className="chat-message-body-outgoing d-flex justify-content-end align-items-center gap-3">
                        <div className="message-time normal-grey-text fw-medium">11:43</div>
                        <div className="message-outgoing">Hey Olivia. Can we get on a quick call?</div>
                        <div className="message-img">
                            <img src={olivia} alt="" />
                        </div>
                    </div>
                    <div className="chat-message-body-incoming d-flex justify-content-start align-items-center gap-3">
                        <div className="message-img">
                            <img src={olivia} alt="" />
                        </div>
                        <div className="message-incoming">Hey Olivia. Can we get on a quick call?</div>
                        <div className="message-time normal-grey-text fw-medium">11:43</div>
                    </div>
                </div>

            </div>
            <div className="chat-text-area border-top pt-4">
                <textarea placeholder='Type your message.... ' name="" id="" cols="30" rows="10" className="send-message-text-area"></textarea>
                <button className="save-btn-outline fw-bold primary-orange-text">Send</button>
            </div>
        </>
    )
}

export default ChatBody
