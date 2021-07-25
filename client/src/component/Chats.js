import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessage,
  markTypingStop,
  openChat,
  typingUsers,
} from "../redux/actions/index";
import moment from "moment";
import { Icon, InlineIcon } from "@iconify/react";
import emotionHappyLine from "@iconify-icons/ri/emotion-happy-line";
import attachmentLine from "@iconify-icons/ri/attachment-line";
import sendPlane2Fill from "@iconify-icons/ri/send-plane-2-fill";
import timeLine from "@iconify-icons/ri/time-line";
import more2Fill from "@iconify-icons/ri/more-2-fill";
import fileCopy2Line from "@iconify-icons/ri/file-copy-2-line";
import saveLine from "@iconify-icons/ri/save-line";
import chatForwardLine from "@iconify-icons/ri/chat-forward-line";
import deleteBinLine from "@iconify-icons/ri/delete-back-line";
import arrowLeftSLine from "@iconify-icons/ri/arrow-left-s-line";
import recordCircleFill from "@iconify-icons/ri/record-circle-fill";
import searchLine from "@iconify-icons/ri/search-line";
import phoneLine from "@iconify-icons/ri/phone-line";
import vidiconLine from "@iconify-icons/ri/vidicon-line";
import user2Line from "@iconify-icons/ri/user-2-line";
import moreFill from "@iconify-icons/ri/more-fill";
import archiveLine from "@iconify-icons/ri/archive-line";
import volumeMuteLine from "@iconify-icons/ri/volume-mute-line";
import ProfileImg from "./ProfileImg";
import socket from "../config/socket_config";

export default function Chats(props) {
  const messages = useSelector((state) => state.messages);
  const chatData = useSelector((state) => state.chatData);
  const user = useSelector((state) => state.userData);
  const onlineUsers = useSelector((state) => state.onlineUsers);
  const [newMessage, setNewMessage] = useState("");
  const [allowTyping, setAllowTyping] = useState(true);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewMessage(e.target.value);
    // if (allowTyping) {
    //     socket.emit("typing", {
    //         recieverId: chatData.chatData.friendInfo.id,
    //     });
    //     console.log(allowTyping);
    // }
    // setAllowTyping(false);
    // setTimeout(() => {
    //     setAllowTyping(true);
    // }, 5000);
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeChat = () => dispatch(openChat(false));
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    const messageData = {
      message: newMessage,
      messageId: chatData.chatData.messageId,
      senderId: user.userData.id,
      recieverId: chatData.chatData.userId,
    };
    dispatch(addMessage(messageData));
    socket.emit("newMessage", messageData);
    setNewMessage("");
  };


  // socket.on("typing", (data) => {
  //     console.log(data);
  //     dispatch(typingUsers(data.id));
  // });

  const messageList = messages.messages.map((res, key) => {
    if (res.senderId == user.userData.id) {
      return (
        <li key={key} ref={messagesEndRef} className="right">
          <div className="conversation-list">
            <div className="chat-avatar">
              <ProfileImg src={user.userData.profileImg} />{" "}
            </div>{" "}
            <div className="user-chat-content">
              <div className="ctext-wrap">
                <div className="ctext-wrap-content">
                  <p className="mb-0"> {res.message} </p>{" "}
                  <p className="chat-time mb-0">
                    {" "}
                    <Icon icon={timeLine} className="align-middle" />
                    <span className="align-middle">
                      {" "}
                      {moment(res.createdAt).format("HH:mm")}{" "}
                    </span>{" "}
                  </p>{" "}
                </div>{" "}
                <div className="dropdown align-self-start">
                  {" "}
                  <a
                    className="dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Icon icon={more2Fill} />{" "}
                  </a>{" "}
                  <div className="dropdown-menu">
                    <a className="dropdown-item">
                      {" "}
                      Copy{" "}
                      <Icon
                        icon={fileCopy2Line}
                        className=" float-end text-muted"
                      />
                    </a>{" "}
                    <a className="dropdown-item">
                      Save{" "}
                      <Icon icon={saveLine} className=" float-end text-muted" />
                    </a>{" "}
                    <a className="dropdown-item">
                      Forward{" "}
                      <Icon
                        icon={chatForwardLine}
                        className=" float-end text-muted"
                      />
                    </a>{" "}
                    <a className="dropdown-item">
                      Delete{" "}
                      <Icon
                        icon={deleteBinLine}
                        className=" float-end text-muted"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="conversation-name"> {user.userData.name}</div>
            </div>
          </div>
        </li>
      );
    } else {
      return (
        <li key={key} ref={messagesEndRef}>
          <div className="conversation-list">
            <div className="chat-avatar">
              <img src={user.userData.profileImg} alt="" />
            </div>{" "}
            <div className="user-chat-content">
              {" "}
              <div className="ctext-wrap">
                <div className="ctext-wrap-content">
                  <p className="mb-0"> {res.message} </p>{" "}
                  <p className="chat-time mb-0">
                    {" "}
                    <Icon icon={timeLine} className=" align-middle" />{" "}
                    <span className="align-middle">
                      {" "}
                      {moment(res.createdAt).format("HH:mm")}{" "}
                    </span>{" "}
                  </p>{" "}
                </div>{" "}
                <div className="dropdown align-self-start">
                  {" "}
                  <a
                    className="dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Icon icon={more2Fill} />{" "}
                  </a>{" "}
                  <div className="dropdown-menu">
                    <a className="dropdown-item">
                      Copy{" "}
                      <Icon
                        icon={fileCopy2Line}
                        className=" float-end text-muted"
                      />
                    </a>{" "}
                    <a className="dropdown-item">
                      Save{" "}
                      <Icon icon={saveLine} className=" float-end text-muted" />
                    </a>{" "}
                    <a className="dropdown-item">
                      Forward{" "}
                      <Icon
                        icon={chatForwardLine}
                        className=" float-end text-muted"
                      />
                    </a>{" "}
                    <a className="dropdown-item">
                      Delete{" "}
                      <Icon
                        icon={deleteBinLine}
                        className=" float-end text-muted"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="conversation-name"> {user.userData.name}</div>
            </div>
          </div>
        </li>
      );
    }
  });
  return (
    <>
      <div className="w-100 overflow-hidden position-relative">
        <div className="p-3 p-lg-4 border-bottom user-chat-topbar">
          <div className="row align-items-center">
            <div className="col-sm-4 col-8">
              <div className="d-flex align-items-center">
                <div className="d-block d-lg-none me-2 ms-0">
                  <a
                    href="javascript: void(0);"
                    className="user-chat-remove text-muted font-size-16 p-2"
                    onClick={closeChat}
                  >
                    <Icon icon={arrowLeftSLine} />{" "}
                  </a>{" "}
                </div>{" "}
                <div className="me-3 ms-0">
                  <img
                    src={chatData.chatData.friendInfo.profileImg}
                    className="rounded-circle avatar-xs"
                    alt=""
                  />
                </div>{" "}
                <div className="flex-grow-1 overflow-hidden">
                  <h5 className="font-size-16 mb-0 text-truncate">
                    <a
                      className="text-reset user-profile-show"
                      onClick={props.openProfileSidebar}
                    >
                      {" "}
                      {chatData.chatData.friendName}{" "}
                    </a>{" "}
                    <p
                      className="mb-0 text-success"
                      style={{
                        fontSize: "11px",
                        fontWeight: 400,
                      }}
                    >
                      {" "}
                      {onlineUsers.onlineUsers.includes(
                        chatData.chatData.friendInfo.id
                      )
                        ? "Online"
                        : ""}{" "}
                    </p>{" "}
                    {/* <Icon
                                                              icon={recordCircleFill}
                                                              className=" font-size-10 text-success d-inline-block ms-1"
                                                            /> */}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-4">
              <ul className="list-inline user-chat-nav text-end mb-0">
                <li className="list-inline-item">
                  <div className="dropdown">
                    <button
                      className="btn nav-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <Icon icon={searchLine} />{" "}
                    </button>{" "}
                    <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-md">
                      <div className="search-box p-2">
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          placeholder="Search.."
                        />
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </li>{" "}
                <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                  <button
                    type="button"
                    className="btn nav-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#audiocallModal"
                  >
                    <Icon icon={phoneLine} />{" "}
                  </button>{" "}
                </li>{" "}
                <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                  <button
                    type="button"
                    className="btn nav-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#videocallModal"
                  >
                    <Icon icon={vidiconLine} />{" "}
                  </button>{" "}
                </li>{" "}
                <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                  <button
                    type="button"
                    className="btn nav-btn user-profile-show"
                  >
                    <Icon icon={user2Line} />{" "}
                  </button>{" "}
                </li>{" "}
                <li className="list-inline-item">
                  <div className="dropdown">
                    <button
                      className="btn nav-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <Icon icon={moreFill} className="ri-more-fill" />
                    </button>{" "}
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item d-block d-lg-none user-profile-show">
                        View profile{" "}
                        <Icon
                          icon={user2Line}
                          className=" float-end text-muted"
                        />
                      </a>{" "}
                      <a
                        className="dropdown-item d-block d-lg-none"
                        data-bs-toggle="modal"
                        data-bs-target="#audiocallModal"
                      >
                        Audio{" "}
                        <Icon
                          icon={phoneLine}
                          className=" float-end text-muted"
                        />
                      </a>{" "}
                      <a
                        className="dropdown-item d-block d-lg-none"
                        data-bs-toggle="modal"
                        data-bs-target="#videocallModal"
                      >
                        Video{" "}
                        <Icon
                          icon={vidiconLine}
                          className=" float-end text-muted"
                        />
                      </a>{" "}
                      <a className="dropdown-item">
                        Archive{" "}
                        <Icon
                          icon={archiveLine}
                          className=" float-end text-muted"
                        />
                      </a>{" "}
                      <a className="dropdown-item">
                        Muted{" "}
                        <Icon
                          icon={volumeMuteLine}
                          className=" float-end text-muted"
                        />
                      </a>{" "}
                      <a className="dropdown-item">
                        Delete{" "}
                        <Icon
                          icon={deleteBinLine}
                          className=" float-end text-muted"
                        />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* end chat user head */}
        {/* start chat conversation */}
        <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
          <div
            className="simplebar-wrapper"
            style={{
              margin: "-24px",
            }}
          >
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>{" "}
            <div className="simplebar-mask">
              <div
                className="simplebar-offset"
                style={{
                  right: "-20px",
                  bottom: "0px",
                }}
              >
                <div
                  className="simplebar-content-wrapper"
                  style={{
                    height: "100%",
                    paddingRight: "20px",
                    paddingBottom: "0px",
                    overflow: "hidden scroll",
                  }}
                >
                  <div
                    className="simplebar-content"
                    style={{
                      padding: "24px",
                    }}
                  >
                    <ul className="list-unstyled mb-0">
                      {" "}
                      {Object.keys(messages.messages).length > 0
                        ? messageList
                        : false}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{
                width: "auto",
                height: "1150px",
              }}
            />{" "}
          </div>{" "}
          <div
            className="simplebar-track simplebar-horizontal"
            style={{
              visibility: "hidden",
            }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                display: "none",
                width: "42px",
              }}
            />{" "}
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{
              visibility: "visible",
            }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                height: "590px",
                transform: "translate3d(0px, 0px, 0px)",
                display: "block",
              }}
            />
          </div>
        </div>{" "}
        {/*end chat conversation end */} {/* start chat input section */}
        <div className="chat-input-section p-3 p-lg-4 border-top mb-0">
          <div className="row g-0">
            <div className="col">
              <input
                type="text"
                className="form-control form-control-lg bg-light border-light"
                placeholder="Enter Message..."
                value={newMessage}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
              />{" "}
            </div>{" "}
            <div className="col-auto">
              <div className="chat-input-links ms-md-2 me-md-0">
                <ul className="list-inline mb-0">
                  <li
                    className="list-inline-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title
                    data-bs-original-title="Emoji"
                  >
                    <button
                      type="button"
                      className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                    >
                      <Icon icon={emotionHappyLine} />{" "}
                    </button>{" "}
                  </li>{" "}
                  <li
                    className="list-inline-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title
                    data-bs-original-title="Attached File"
                  >
                    <button
                      type="button"
                      className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                    >
                      <Icon icon={attachmentLine} />{" "}
                    </button>{" "}
                  </li>{" "}
                  <li className="list-inline-item">
                    <button
                      type="submit"
                      className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light"
                      onClick={handleSubmit}
                    >
                      <Icon icon={sendPlane2Fill} />{" "}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>{/* end chat input section */}</div>
      </div>
    </>
  );
}
