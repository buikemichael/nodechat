import React, { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Cookies from "js-cookie";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessage,
  showMessages,
  chatData,
  openChat,
  markTypingStop,
} from "../redux/actions";
import moment from "moment";
import ProfileImg from "./ProfileImg";
import { Icon, InlineIcon } from "@iconify/react";
import more2Fill from "@iconify-icons/ri/more-2-fill";
import checkboxCircle from "@iconify-icons/ri/checkbox-circle-line";
import forbidLine from "@iconify-icons/ri/forbid-line";
import closeCircle from "@iconify-icons/ri/close-circle-line";
import socket from "../config/socket_config";

export default function RecentConversation(props) {
  const [friendRequests, setFriendRequests] = useState([]);
  const [friendRequestsDropDown, setFriendRequestsDropDown] = useState(null);
  const [openChats, setOpenChats] = useState(false);
  const getTypingUsers = useSelector((state) => state.typingUsers);
  const allFriends = useSelector((state) => state.friends);
  const typingUsers = useSelector((state) => state.typingUsers);
  const chatDataState = useSelector((state) => state.chatData);
  const node = useRef(null);

  const dispatch = useDispatch();

  const openConversation = (userId) => {
    dispatch(openChat(true));
    axios
      .get("http://localhost:8000/chats?userId=" + userId)
      .then(function (response) {
        // handle success
        dispatch(showMessages(response.data.info.messages));
        dispatch(chatData(response.data.info));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    const closeDropDown = (e) => {
      if (node.current !== null && !node.current.contains(e.target)) {
        setFriendRequestsDropDown(null);
      }
    };
    if (friendRequestsDropDown != null) {
      document.addEventListener("click", closeDropDown);
    }
    return () => document.removeEventListener("click", closeDropDown);
  }, [friendRequestsDropDown]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        markTypingStop(
          typingUsers.typingUsers[typingUsers.typingUsers.length - 1]
        )
      );
    }, 4000);
  }, [typingUsers]);

  socket.off("newMessage").on("newMessage", (msg) => {
    if (msg.messageStatus === 1) {
      dispatch(addMessage(msg.newMessage));
    }
  });

  const openFriendRequestsDropDown = (key) => {
    setFriendRequestsDropDown(key);
  };

  const closeFriendRequestsDropDown = () => {
    setFriendRequestsDropDown(false);
  };

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:8000/friendRequests", {
        withCredentals: true,
      })
      .then((res) => {
        setFriendRequests(res.data.info);
      })
      .catch((e) => console.log(e));
  }, []);

  const acceptFriend = (e, id) => {
    e.preventDefault();
    setFriendRequestsDropDown(false);
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:8000/acceptFriend?id=" + id, {
        withCredentals: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  const filteredFriends = allFriends.friends.filter(
    (res) => res.messages.length > 0
  );
  const friendList = filteredFriends.map((res, key) => (
    <li key={key}>
      <a onClick={() => openConversation(res.friendUserId)}>
        <div className="d-flex">
          <div className="chat-user-img online align-self-center me-3 ms-0">
            <ProfileImg
              src={res.friendInfo.profileImg}
              class={"rounded-circle avatar-xs"}
            />
            <span className="user-status" />
          </div>
          <div className="flex-1 overflow-hidden">
            <h5 className="text-truncate font-size-15 mb-1">
              {res.friendName}
            </h5>
            <p className="chat-user-message text-truncate mb-0">
              {getTypingUsers.typingUsers.includes(res.friendInfo.id) ? (
                <p
                  className="chat-user-message text-truncate mb-0"
                  style={{
                    color: "#7269ef",
                    fontWeight: "500",
                  }}
                >
                  typing
                  <span
                    className="animate-typing"
                    style={{ marginLeft: "3px" }}
                  >
                    <span
                      className="dot"
                      style={{
                        backgroundColor: "#7269ef",
                        marginRight: "2px",
                      }}
                    ></span>
                    <span
                      className="dot"
                      style={{
                        backgroundColor: "#7269ef",
                        marginRight: "2px",
                      }}
                    ></span>
                    <span
                      className="dot"
                      style={{
                        backgroundColor: "#7269ef",
                        marginRight: "2px",
                      }}
                    ></span>
                  </span>
                </p>
              ) : (
                res.messages[res.messages.length - 1].message
              )}
            </p>
          </div>
          <div className="font-size-11">
            {moment(res.messages[res.messages.length - 1].createdAt).fromNow()}
          </div>
        </div>
      </a>
    </li>
  ));
  const requests =
    friendRequests.length > 0
      ? friendRequests.map((res, key) => {
          return (
            <li key={key}>
              <a href="#">
                <div className="d-flex">
                  <div className="chat-user-img online align-self-center me-3 ms-0">
                    <img
                      src={res.inviter.profileImg}
                      className="rounded-circle avatar-xs"
                      alt=""
                    />
                    <span className="user-status" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-truncate font-size-15 mb-1">
                      {res.inviter.name}
                    </h5>
                    <p className="chat-user-message text-truncate mb-0">
                      hello world
                    </p>
                  </div>
                  <div className="font-size-11 d-flex align-items-center">
                    {moment(res.inviter.createdAt).startOf("hour").fromNow()}
                  </div>
                  <div>
                    <div
                      className="dropdown"
                      onClick={(e) => openFriendRequestsDropDown(key)}
                    >
                      <a
                        className="text-muted dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <Icon icon={more2Fill} />
                      </a>
                      <div
                        className={`dropdown-menu dropdown-menu-end ${
                          friendRequestsDropDown == key ? "d-block" : false
                        }`}
                        ref={node}
                      >
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => acceptFriend(e, res.id)}
                        >
                          Accept{" "}
                          <Icon
                            icon={checkboxCircle}
                            className=" float-end text-muted"
                          />
                        </a>
                        <a className="dropdown-item" href="#">
                          Reject{" "}
                          <Icon
                            icon={closeCircle}
                            className=" float-end text-muted"
                          />
                        </a>
                        <a className="dropdown-item" href="#">
                          Block{" "}
                          <Icon
                            icon={forbidLine}
                            className=" float-end text-muted"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          );
        })
      : false;

  return (
    <>
      {/* Start chats content */}
      <div>
        <div className="px-4 pt-4">
          <h4 className="mb-4">Chats</h4>
          <div className="search-box chat-search-box">
            <div className="input-group mb-3 rounded-3">
              <span
                className="input-group-text text-muted bg-light pe-1 ps-3"
                id="basic-addon1"
              >
                <i className="ri-search-line search-icon font-size-18" />
              </span>
              <input
                type="text"
                className="form-control bg-light"
                placeholder="Search messages or users"
                aria-label="Search messages or users"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>{" "}
          {/* Search Box*/}
        </div>{" "}
        {/* .p-4 */}
        {/* Start chat-message-list */}
        <ul className="list-unstyled chat-list chat-user-list">{requests}</ul>
        <div className="px-2">
          <h5 className="mb-3 px-3 font-size-16">Recent</h5>
          <div className="chat-message-list" data-simplebar="init">
            <div className="simplebar-wrapper" style={{ margin: "0px" }}>
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
              </div>
              <div className="simplebar-mask">
                <div
                  className="simplebar-offset"
                  style={{ right: "-20px", bottom: "0px" }}
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
                      style={{ padding: "0px" }}
                    >
                      <ul className="list-unstyled chat-list chat-user-list">
                        {friendList.length > 0 ? (
                          friendList
                        ) : (
                          <li>
                            <div className="d-flex justify-content-center">
                              No recent chat
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                              <button
                                type="submit"
                                className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light"
                              >
                                Start conversation
                              </button>
                            </div>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="simplebar-placeholder"
                style={{ width: "auto", height: "890px" }}
              />
            </div>
            <div
              className="simplebar-track simplebar-horizontal"
              style={{ visibility: "hidden" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                  display: "none",
                }}
              />
            </div>
            <div
              className="simplebar-track simplebar-vertical"
              style={{ visibility: "visible" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{
                  height: "597px",
                  transform: "translate3d(0px, 0px, 0px)",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
        {/* End chat-message-list */}
      </div>
      {/* Start chats content */}
    </>
  );
}
