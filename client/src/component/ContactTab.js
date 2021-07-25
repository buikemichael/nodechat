import React from "react";

export default function ContactTab() {
    return (
        <div>
            <div
                className="tab-pane"
                id="pills-contacts"
                role="tabpanel"
                aria-labelledby="pills-contacts-tab"
            ></div>
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
                            >
                                <i className="ri-user-add-line" />
                            </button>
                        </div>
                    </div>
                    <h4 className="mb-4">Contacts</h4>
                    {/* Start Add contact Modal */}
                    <div
                        className="modal fade"
                        id="addContact-exampleModal"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="addContact-exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title font-size-16"
                                        id="addContact-exampleModalLabel"
                                    >
                                        Add Contact
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body p-4">
                                    <form>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="addcontactemail-input"
                                                className="form-label"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="addcontactemail-input"
                                                placeholder="Enter Email"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="addcontact-invitemessage-input"
                                                className="form-label"
                                            >
                                                Invatation Message
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="addcontact-invitemessage-input"
                                                rows={3}
                                                placeholder="Enter Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-link"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                    >
                                        Invite Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Add contact Modal */}
                    <div className="search-box chat-search-box">
                        <div className="input-group bg-light  input-group-lg rounded-3">
                            <div className="input-group-prepend">
                                <button
                                    className="btn btn-link text-decoration-none text-muted pe-1 ps-3"
                                    type="button"
                                >
                                    <i className="ri-search-line search-icon font-size-18" />
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
                    <div
                        className="simplebar-wrapper"
                        style={{ margin: "-24px" }}
                    >
                        <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer" />
                        </div>
                        <div className="simplebar-mask">
                            <div
                                className="simplebar-offset"
                                style={{ right: "0px", bottom: "0px" }}
                            >
                                <div
                                    className="simplebar-content-wrapper"
                                    style={{
                                        height: "auto",
                                        paddingRight: "0px",
                                        paddingBottom: "0px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div
                                        className="simplebar-content"
                                        style={{ padding: "24px" }}
                                    >
                                        <div>
                                            <div className="p-3 fw-bold text-primary">
                                                A
                                            </div>
                                            <ul className="list-unstyled contact-list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Albert Rodarte
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Allison Etter
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end contact list A */}
                                        <div className="mt-3">
                                            <div className="p-3 fw-bold text-primary">
                                                C
                                            </div>
                                            <ul className="list-unstyled contact-list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Craig Smiley
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end contact list C */}
                                        <div className="mt-3">
                                            <div className="p-3 fw-bold text-primary">
                                                D
                                            </div>
                                            <ul className="list-unstyled contact-list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Daniel Clay
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Doris Brown
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end contact list D */}
                                        <div className="mt-3">
                                            <div className="p-3 fw-bold text-primary">
                                                I
                                            </div>
                                            <ul className="list-unstyled contact-list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Iris Wells
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end contact list I */}
                                        <div className="mt-3">
                                            <div className="p-3 fw-bold text-primary">
                                                J
                                            </div>
                                            <ul className="list-unstyled contact-list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Juan Flakes
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                John Hall
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Joy Southern
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end contact list J */}
                                        <div className="mt-3">
                                            <div className="p-3 fw-bold text-primary">
                                                M
                                            </div>
                                            <ul className="list-unstyled contact-list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Mary Farmer
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Mark Messer
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Michael Hinton
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end contact list M */}
                                        <div className="mt-3">
                                            <div className="p-3 fw-bold text-primary">
                                                O
                                            </div>
                                            <ul className="list-unstyled contact-list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Ossie Wilson
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end contact list O */}
                                        <div className="mt-3">
                                            <div className="p-3 fw-bold text-primary">
                                                P
                                            </div>
                                            <ul className="list-unstyled contact-list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Phillis Griffin
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Paul Haynes
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end contact list P */}
                                        <div className="mt-3">
                                            <div className="p-3 fw-bold text-primary">
                                                R
                                            </div>
                                            <ul className="list-unstyled contact-list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Rocky Jackson
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end contact list R */}
                                        <div className="mt-3">
                                            <div className="p-3 fw-bold text-primary">
                                                S
                                            </div>
                                            <ul className="list-unstyled contact-list">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Sara Muller
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Simon Velez
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-1">
                                                            <h5 className="font-size-14 m-0">
                                                                Steve Walker
                                                            </h5>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a
                                                                href="#"
                                                                className="text-muted dropdown-toggle"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="ri-more-2-fill" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Share{" "}
                                                                    <i className="ri-share-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Block{" "}
                                                                    <i className="ri-forbid-line float-end text-muted" />
                                                                </a>
                                                                <a
                                                                    className="dropdown-item"
                                                                    href="#"
                                                                >
                                                                    Remove{" "}
                                                                    <i className="ri-delete-bin-line float-end text-muted" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end contact list S */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="simplebar-placeholder"
                            style={{ width: "0px", height: "0px" }}
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
                </div>
                {/* end contact lists */}
            </div>
            {/* Start Contact content */}
        </div>
    );
}
