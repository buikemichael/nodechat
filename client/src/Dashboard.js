import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import axios from "axios";
import Sidebar from "./component/Sidebar";
import moment from "moment";
import { Icon, InlineIcon } from "@iconify/react";
import user2Line from "@iconify-icons/ri/user-2-line";
import message3Line from "@iconify-icons/ri/message-3-line";
import groupLine from "@iconify-icons/ri/group-line";
import contactsLine from "@iconify-icons/ri/contacts-line";
import settings2Line from "@iconify-icons/ri/settings-2-line";
import sunLine from "@iconify-icons/ri/sun-line";
import moonLine from "@iconify-icons/ri/moon-line";
import Chats from "./component/Chats";
import { useDispatch, useSelector } from "react-redux";
import { userData, friends, onlineUsers, markOffline } from "./redux/actions";
import FriendProfile from "./component/FriendProfile";
import { useMediaQuery } from "react-responsive";
import socket from "./config/socket_config";
import ProfileImg from "./component/ProfileImg";

function Dashboard() {
    const [tab, setTab] = useState("recent");
    const [friendProfileSidebar, setFriendProfileSidebar] = useState(false);
    const [testState, setTestState] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 991px)` });

    const dispatch = useDispatch();
    const user = useSelector((state) => state.userData);
    const chatDataState = useSelector((state) => state.chatData);
    const openChat = useSelector((state) => state.openChat);
    const messages = useSelector((state) => state.messages);
    const getOnlineUsers = useSelector((state) => state.onlineUsers);

    useEffect(()=>{
        socket.connect();
        socket.emit('getUserData')
        socket.on("userData",(data)=>{
            dispatch(userData(data.user))
        })
    },[])
    useEffect(() => {
        socket.on("getFriends", (data) => {
            dispatch(friends(data.info.friends));
        });
        socket.emit("getFriends");
    }, [messages]);

    useEffect(() => {
        //get all online friends during login
        socket.on("onlineUsers", (data) => {
            dispatch(onlineUsers(data));
        });
    }, []);

    const openProfileSidebar = () => {
        setFriendProfileSidebar(true);
    };
    const closeProfileSidebar = () => {
        setFriendProfileSidebar(false);
    };
    socket.on("offline", (data) => {
        markOffline(data.id);
    });

    //notify when a friend logs in
    socket.on("online", (data) => {
        // dispatch(onlineUsers(data.id));
    });
    const openTab = (tab) => {
        setTab(tab);
    };

    const sideBarData = { tab };
    return (
        <>
            <div className="layout-wrapper d-lg-flex">
                {/* Start left sidebar-menu */}
                <div className="side-menu flex-lg-column me-lg-1 ms-lg-0">
                    {/* LOGO */}
                    <div className="navbar-brand-box">
                        <a href="index.html" className="logo logo-dark">
                            <span className="logo-sm">
                                <img
                                    src="assets/images/logo.svg"
                                    alt=""
                                    height={30}
                                />
                            </span>
                        </a>
                        <a href="index.html" className="logo logo-light">
                            <span className="logo-sm">
                                <img
                                    src="assets/images/logo.svg"
                                    alt=""
                                    height={30}
                                />
                            </span>
                        </a>
                    </div>
                    {/* end navbar-brand-box */}
                    {/* Start side-menu nav */}
                    <div className="flex-lg-column my-auto">
                        <ul
                            className="nav nav-pills side-menu-nav justify-content-center"
                            role="tablist"
                        >
                            <li
                                className="nav-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="Profile"
                            >
                                <a
                                    className={`nav-link ${
                                        tab == "profile" ? "active" : ""
                                    } `}
                                    id="pills-user-tab"
                                    data-bs-toggle="pill"
                                    href="#"
                                    role="tab"
                                    onClick={() => {
                                        openTab("profile");
                                    }}
                                >
                                    <Icon icon={user2Line} />
                                </a>
                            </li>
                            <li
                                className="nav-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="Chats"
                            >
                                <a
                                    className={`nav-link ${
                                        tab == "recent" ? "active" : ""
                                    } `}
                                    id="pills-chat-tab"
                                    data-bs-toggle="pill"
                                    href="#"
                                    role="tab"
                                    onClick={() => {
                                        openTab("recent");
                                    }}
                                >
                                    <Icon icon={message3Line} />
                                </a>
                            </li>
                            <li
                                className="nav-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="Groups"
                            >
                                <a
                                    className={`nav-link ${
                                        tab == "group" ? "active" : ""
                                    } `}
                                    id="pills-groups-tab"
                                    data-bs-toggle="pill"
                                    href="#pills-groups"
                                    role="tab"
                                    onClick={() => {
                                        openTab("group");
                                    }}
                                >
                                    <Icon icon={groupLine} />
                                </a>
                            </li>
                            <li
                                className="nav-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="Contacts"
                            >
                                <a
                                    className={`nav-link ${
                                        tab == "contact" ? "active" : ""
                                    } `}
                                    id="pills-contacts-tab"
                                    data-bs-toggle="pill"
                                    href="#"
                                    role="tab"
                                    onClick={() => {
                                        openTab("contact");
                                    }}
                                >
                                    <Icon icon={contactsLine} />
                                </a>
                            </li>
                            <li
                                className="nav-item"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="Settings"
                            >
                                <a
                                    className={`nav-link ${
                                        tab == "settings" ? "active" : ""
                                    } `}
                                    id="pills-setting-tab"
                                    data-bs-toggle="pill"
                                    href="#pills-setting"
                                    role="tab"
                                    onClick={() => {
                                        openTab("settings");
                                    }}
                                >
                                    <Icon icon={settings2Line} />
                                </a>
                            </li>
                            <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    onClick={(e) => {
                                        setTestState(true);
                                    }}
                                >
                                    <ProfileImg
                                        src={user.userData.profileImg}
                                        class={"profile-user rounded-circle"}
                                    />
                                </a>
                                <div
                                    className={`dropdown-menu ${
                                        testState ? `show` : ""
                                    }`}
                                    style={{
                                        top: "auto!important",
                                        bottom: "50px",
                                    }}
                                >
                                    <a className="dropdown-item" href="#">
                                        Profile{" "}
                                        <i className="ri-profile-line float-end text-muted" />
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Setting{" "}
                                        <i className="ri-settings-3-line float-end text-muted" />
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        Log out{" "}
                                        <i className="ri-logout-circle-r-line float-end text-muted" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* end side-menu nav */}
                    <div className="flex-lg-column d-none d-lg-block">
                        <ul className="nav side-menu-nav justify-content-center">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    id="light-dark"
                                    href="#"
                                    data-bs-toggle="tooltip"
                                    data-bs-trigger="hover"
                                    data-bs-placement="right"
                                    title
                                    data-bs-original-title="Dark / Light Mode"
                                >
                                    <Icon
                                        icon={moonLine}
                                        className="theme-mode-icon"
                                    />
                                </a>
                            </li>
                            <li className="nav-item btn-group dropup profile-user-dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    onClick={(e) => {
                                        setTestState(true);
                                    }}
                                >
                                    <ProfileImg
                                        src={user.userData.profileImg}
                                        class={"profile-user rounded-circle"}
                                    />
                                </a>
                                <div
                                    className={`dropdown-menu ${
                                        testState ? `show` : ""
                                    }`}
                                    style={{
                                        top: "auto !important",
                                        bottom: "50px",
                                    }}
                                >
                                    <a className="dropdown-item" href="#">
                                        Profile{" "}
                                        <i className="ri-profile-line float-end text-muted" />
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Setting{" "}
                                        <i className="ri-settings-3-line float-end text-muted" />
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        Log out{" "}
                                        <i className="ri-logout-circle-r-line float-end text-muted" />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Side menu user */}
                </div>
                {/* end left sidebar-menu */}
                {/* start chat-leftsidebar */}
                <div className="chat-leftsidebar me-lg-1 ms-lg-0">
                    <div className="tab-content">
                        {/* Sidebar tab-pane */}
                        <Sidebar data={sideBarData} />
                        {/* Sidebar tab-pane */}
                    </div>
                    {/* end tab content */}
                </div>
                {/* end chat-leftsidebar */}
                {/* Start User chat */}
                <div
                    className={`user-chat w-100 overflow-hidden ${
                        isMobile && openChat.openChat ? "user-chat-show" : ""
                    }`}
                >
                    <div className="d-lg-flex">
                        {/* start chat conversation section */}
                        {Object.keys(chatDataState.chatData).length > 0 ? (
                            <Chats openProfileSidebar={openProfileSidebar} />
                        ) : (
                            false
                        )}
                        {/* end chat conversation section */}
                        {/* start User profile detail sidebar */}
                        {friendProfileSidebar ? (
                            <FriendProfile
                                closeProfileSidebar={closeProfileSidebar}
                            />
                        ) : (
                            false
                        )}
                    </div>
                    {/* End User chat */}
                    {/* audiocall Modal */}
                    <div
                        className="modal fade"
                        id="audiocallModal"
                        tabIndex={-1}
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="text-center p-4">
                                        <div className="avatar-lg mx-auto mb-4">
                                            <img
                                                src="assets/images/users/avatar-4.jpg"
                                                alt=""
                                                className="img-thumbnail rounded-circle"
                                            />
                                        </div>
                                        <h5 className="text-truncate">
                                            Doris Brown
                                        </h5>
                                        <p className="text-muted">
                                            Start Audio Call
                                        </p>
                                        <div className="mt-5">
                                            <ul className="list-inline mb-1">
                                                <li className="list-inline-item px-2 me-2 ms-0">
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger avatar-sm rounded-circle"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        <span className="avatar-title bg-transparent font-size-20">
                                                            <i className="ri-close-fill" />
                                                        </span>
                                                    </button>
                                                </li>
                                                <li className="list-inline-item px-2">
                                                    <button
                                                        type="button"
                                                        className="btn btn-success avatar-sm rounded-circle"
                                                    >
                                                        <span className="avatar-title bg-transparent font-size-20">
                                                            <i className="ri-phone-fill" />
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* audiocall Modal */}
                    {/* videocall Modal */}
                    <div
                        className="modal fade"
                        id="videocallModal"
                        tabIndex={-1}
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="text-center p-4">
                                        <div className="avatar-lg mx-auto mb-4">
                                            <img
                                                src="assets/images/users/avatar-4.jpg"
                                                alt=""
                                                className="img-thumbnail rounded-circle"
                                            />
                                        </div>
                                        <h5 className="text-truncate">
                                            Doris Brown
                                        </h5>
                                        <p className="text-muted mb-0">
                                            Start Video Call
                                        </p>
                                        <div className="mt-5">
                                            <ul className="list-inline mb-1">
                                                <li className="list-inline-item px-2 me-2 ms-0">
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger avatar-sm rounded-circle"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        <span className="avatar-title bg-transparent font-size-20">
                                                            <i className="ri-close-fill" />
                                                        </span>
                                                    </button>
                                                </li>
                                                <li className="list-inline-item px-2">
                                                    <button
                                                        type="button"
                                                        className="btn btn-success avatar-sm rounded-circle"
                                                    >
                                                        <span className="avatar-title bg-transparent font-size-20">
                                                            <i className="ri-vidicon-fill" />
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end modal */}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
