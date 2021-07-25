import React, { useState, useRef, useEffect } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import more2Fill from "@iconify-icons/ri/more-2-fill";
import shareLine from "@iconify-icons/ri/share-line";
import forbidLine from "@iconify-icons/ri/forbid-line";
import deleteBinLine from "@iconify-icons/ri/delete-bin-line";
import searchLine from "@iconify-icons/ri/search-line";
import userAddLine from "@iconify-icons/ri/user-add-line";
import { useDispatch, useSelector } from "react-redux";
import { chatData, showMessages } from "../redux/actions/index";
import axios from "axios";
import AddUserModal from "./AddUserModal";

export default function UsersTab(props) {
  const [showModal, setShowModal] = useState(false);
  const [contactOptions, setContactOptions] = useState(false);

  const node = useRef(null);
  useEffect(() => {
    const closeDropDown = (e) => {
      if (node.current !== null && !node.current.contains(e.target)) {
        setContactOptions(false);
      }
    };
    if (contactOptions) {
      document.addEventListener("click", closeDropDown);
    }
    return () => document.removeEventListener("click", closeDropDown);
  }, [contactOptions]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();
  const friends = useSelector((state) => state.friends);

  //   sort alphabetically
  const contacts = friends.friends.sort((a, b) =>
    a.friendName.localeCompare(b.friendName)
  );
  const openConversation = (userId) => {
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
  const contactList = contacts.map((res, key) => (
    <div key={key}>
      {/* <div className="p-3 fw-bold text-primary">A</div> */}
      <ul className="list-unstyled contact-list">
        <li>
          <div className="d-flex align-items-center">
            <div className="flex-1">
              <h5
                className="font-size-14 m-0"
                onClick={() => openConversation(res.friendUserId)}
              >
                {res.friendName}
              </h5>
            </div>
            <div className="dropdown">
              <a
                href="#"
                className="text-muted dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => setContactOptions(!contactOptions)}
              >
                <Icon icon={more2Fill} />
              </a>
              <div
                className={`dropdown-menu dropdown-menu-end ${
                  contactOptions ? `show` : false
                }`}
                style={{ left: "-150px" }}
                ref={node}
              >
                <a className="dropdown-item" href="#">
                  Share{" "}
                  <Icon icon={shareLine} className=" float-end text-muted" />
                </a>
                <a className="dropdown-item" href="#">
                  Block{" "}
                  <Icon icon={forbidLine} className=" float-end text-muted" />
                </a>
                <a className="dropdown-item" href="#">
                  Remove{" "}
                  <Icon
                    icon={deleteBinLine}
                    className=" float-end text-muted"
                  />
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  ));
  return (
    <>
      {/* Start Contact content */}
      <div>
        <div className="p-4">
          <div className="user-chat-nav float-end">
            <div
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title
              data-bs-original-title="Add Contact"
            >
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-link text-decoration-none text-muted font-size-18 py-0"
                data-bs-toggle="modal"
                data-bs-target="#addContact-exampleModal"
                onClick={openModal}
              >
                <Icon icon={userAddLine} />
              </button>
            </div>
          </div>
          <h4 className="mb-4">Contacts</h4>
          {/* Start Add contact Modal */}
          {showModal ? <AddUserModal closeModal={closeModal} /> : false}
          {/* End Add contact Modal */}
          <div className="search-box chat-search-box">
            <div className="input-group bg-light  input-group-lg rounded-3">
              <div className="input-group-prepend">
                <button
                  className="btn btn-link text-decoration-none text-muted pe-1 ps-3"
                  type="button"
                >
                  <Icon
                    icon={searchLine}
                    className=" search-icon font-size-18"
                  />
                </button>
              </div>
              <input
                type="text"
                className="form-control bg-light"
                placeholder="Search users.."
              />
            </div>
          </div>
          {/* End search-box */}
        </div>
        {/* end p-4 */}
        {/* Start contact lists */}
        <div
          className="p-4 chat-message-list chat-group-list"
          data-simplebar="init"
        >
          <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
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
                    style={{ padding: "24px" }}
                  >
                    {contactList}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: "1584px" }}
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
                transform: "translate3d(0px, 0px, 0px)",
                display: "block",
                height: "416px",
              }}
            />
          </div>
        </div>
        {/* end contact lists */}
      </div>
      {/* Start Contact content */}
    </>
  );
}
