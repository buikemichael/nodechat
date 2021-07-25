import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, InlineIcon } from "@iconify/react";
import pencilFill from "@iconify-icons/ri/pencil-fill";
import editFill from "@iconify-icons/ri/edit-fill";

export default function Settings() {
    const user = useSelector((state) => state.userData);
    return (
        <>
            <div>
                <div className="px-4 pt-4">
                    <h4 className="mb-0">Settings</h4>
                </div>
                <div className="text-center border-bottom p-4">
                    <div className="mb-4 profile-user">
                        <img
                            src={user.userData.profileImg}
                            className="rounded-circle avatar-lg img-thumbnail"
                            alt=""
                        />
                        <button
                            type="button"
                            className="btn btn-light bg-light avatar-xs p-0 rounded-circle profile-photo-edit"
                        >
                            <Icon icon={pencilFill} />
                        </button>
                    </div>
                    <h5 className="font-size-16 mb-1 text-truncate">
                        Patricia Smith
                    </h5>
                    <div className="dropdown d-inline-block mb-1">
                        <a
                            className="text-muted dropdown-toggle pb-1 d-block"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Available <i className="mdi mdi-chevron-down" />
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                                Available
                            </a>
                            <a className="dropdown-item" href="#">
                                Busy
                            </a>
                        </div>
                    </div>
                </div>
                {/* End profile user */}
                {/* Start User profile description */}
                <div className="p-4 user-profile-desc" data-simplebar="init">
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
                                        height: "100%",
                                        paddingRight: "0px",
                                        paddingBottom: "0px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div
                                        className="simplebar-content"
                                        style={{ padding: "24px" }}
                                    >
                                        <div
                                            id="settingprofile"
                                            className="accordion"
                                        >
                                            <div className="accordion-item card border mb-2">
                                                <div
                                                    className="accordion-header"
                                                    id="personalinfo1"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#personalinfo"
                                                        aria-expanded="false"
                                                        aria-controls="personalinfo"
                                                    >
                                                        <h5 className="font-size-14 m-0">
                                                            Personal Info
                                                        </h5>
                                                    </button>
                                                </div>
                                                <div
                                                    id="personalinfo"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="personalinfo1"
                                                    data-bs-parent="#settingprofile"
                                                    style={{}}
                                                >
                                                    <div className="accordion-body">
                                                        <div className="float-end">
                                                            <button
                                                                type="button"
                                                                className="btn btn-light btn-sm"
                                                            >
                                                                <Icon
                                                                    icon={
                                                                        editFill
                                                                    }
                                                                    className=" me-1 ms-0 align-middle"
                                                                />{" "}
                                                                Edit
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <p className="text-muted mb-1">
                                                                Name
                                                            </p>
                                                            <h5 className="font-size-14">
                                                                Patricia Smith
                                                            </h5>
                                                        </div>
                                                        <div className="mt-4">
                                                            <p className="text-muted mb-1">
                                                                Email
                                                            </p>
                                                            <h5 className="font-size-14">
                                                                adc@123.com
                                                            </h5>
                                                        </div>
                                                        <div className="mt-4">
                                                            <p className="text-muted mb-1">
                                                                Time
                                                            </p>
                                                            <h5 className="font-size-14">
                                                                11:40 AM
                                                            </h5>
                                                        </div>
                                                        <div className="mt-4">
                                                            <p className="text-muted mb-1">
                                                                Location
                                                            </p>
                                                            <h5 className="font-size-14 mb-0">
                                                                California, USA
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end personal info card */}
                                            <div className="accordion-item card border mb-2">
                                                <div
                                                    className="accordion-header"
                                                    id="privacy1"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#privacy"
                                                        aria-expanded="false"
                                                        aria-controls="privacy"
                                                    >
                                                        <h5 className="font-size-14 m-0">
                                                            Privacy
                                                        </h5>
                                                    </button>
                                                </div>
                                                <div
                                                    id="privacy"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="privacy1"
                                                    data-bs-parent="#settingprofile"
                                                    style={{}}
                                                >
                                                    <div className="accordion-body">
                                                        <div className="py-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-1 overflow-hidden">
                                                                    <h5 className="font-size-13 mb-0 text-truncate">
                                                                        Profile
                                                                        photo
                                                                    </h5>
                                                                </div>
                                                                <div className="dropdown ms-2 me-0">
                                                                    <button
                                                                        className="btn btn-light btn-sm dropdown-toggle w-sm"
                                                                        type="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        Everyone{" "}
                                                                        <i className="mdi mdi-chevron-down" />
                                                                    </button>
                                                                    <div
                                                                        className="dropdown-menu dropdown-menu-end"
                                                                        style={{}}
                                                                    >
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                        >
                                                                            Everyone
                                                                        </a>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                        >
                                                                            selected
                                                                        </a>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                        >
                                                                            Nobody
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-1 overflow-hidden">
                                                                    <h5 className="font-size-13 mb-0 text-truncate">
                                                                        Last
                                                                        seen
                                                                    </h5>
                                                                </div>
                                                                <div className="ms-2 me-0">
                                                                    <div className="form-check form-switch">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="form-check-input"
                                                                            id="privacy-lastseenSwitch"
                                                                            defaultChecked
                                                                        />
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="privacy-lastseenSwitch"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-1 overflow-hidden">
                                                                    <h5 className="font-size-13 mb-0 text-truncate">
                                                                        Status
                                                                    </h5>
                                                                </div>
                                                                <div className="dropdown ms-2 me-0">
                                                                    <button
                                                                        className="btn btn-light btn-sm dropdown-toggle w-sm"
                                                                        type="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        Everyone{" "}
                                                                        <i className="mdi mdi-chevron-down" />
                                                                    </button>
                                                                    <div
                                                                        className="dropdown-menu dropdown-menu-end"
                                                                        style={{}}
                                                                    >
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                        >
                                                                            Everyone
                                                                        </a>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                        >
                                                                            selected
                                                                        </a>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                        >
                                                                            Nobody
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-1 overflow-hidden">
                                                                    <h5 className="font-size-13 mb-0 text-truncate">
                                                                        Read
                                                                        receipts
                                                                    </h5>
                                                                </div>
                                                                <div className="ms-2 me-0">
                                                                    <div className="form-check form-switch">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="form-check-input"
                                                                            id="privacy-readreceiptSwitch"
                                                                            defaultChecked
                                                                        />
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="privacy-readreceiptSwitch"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-1 overflow-hidden">
                                                                    <h5 className="font-size-13 mb-0 text-truncate">
                                                                        Groups
                                                                    </h5>
                                                                </div>
                                                                <div className="dropdown ms-2 me-0">
                                                                    <button
                                                                        className="btn btn-light btn-sm dropdown-toggle w-sm"
                                                                        type="button"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                    >
                                                                        Everyone{" "}
                                                                        <i className="mdi mdi-chevron-down" />
                                                                    </button>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                        >
                                                                            Everyone
                                                                        </a>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                        >
                                                                            selected
                                                                        </a>
                                                                        <a
                                                                            className="dropdown-item"
                                                                            href="#"
                                                                        >
                                                                            Nobody
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end privacy card */}
                                            <div className="accordion-item card border mb-2">
                                                <div
                                                    className="accordion-header"
                                                    id="security1"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#security"
                                                        aria-expanded="false"
                                                        aria-controls="security"
                                                    >
                                                        <h5 className="font-size-14 m-0">
                                                            {" "}
                                                            Security
                                                        </h5>
                                                    </button>
                                                </div>
                                                <div
                                                    id="security"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="security1"
                                                    data-bs-parent="#settingprofile"
                                                    style={{}}
                                                >
                                                    <div className="accordion-body">
                                                        <div className="d-flex align-items-center">
                                                            <div className="flex-1 overflow-hidden">
                                                                <h5 className="font-size-13 mb-0 text-truncate">
                                                                    Show
                                                                    security
                                                                    notification
                                                                </h5>
                                                            </div>
                                                            <div className="ms-2 me-0">
                                                                <div className="form-check form-switch">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id="security-notificationswitch"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="security-notificationswitch"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end security card */}
                                            <div className="accordion-item card border mb-2">
                                                <div
                                                    className="accordion-header"
                                                    id="help1"
                                                >
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseFour"
                                                        aria-expanded="false"
                                                        aria-controls="collapseFour"
                                                    >
                                                        <h5 className="font-size-14 m-0">
                                                            {" "}
                                                            Help
                                                        </h5>
                                                    </button>
                                                </div>
                                                <div
                                                    id="collapseFour"
                                                    className="accordion-collapse collapse"
                                                    aria-labelledby="help1"
                                                    data-bs-parent="#settingprofile"
                                                    style={{}}
                                                >
                                                    <div className="accordion-body">
                                                        <div className="py-3">
                                                            <h5 className="font-size-13 mb-0">
                                                                <a
                                                                    href="#"
                                                                    className="text-body d-block"
                                                                >
                                                                    FAQs
                                                                </a>
                                                            </h5>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <h5 className="font-size-13 mb-0">
                                                                <a
                                                                    href="#"
                                                                    className="text-body d-block"
                                                                >
                                                                    Contact
                                                                </a>
                                                            </h5>
                                                        </div>
                                                        <div className="py-3 border-top">
                                                            <h5 className="font-size-13 mb-0">
                                                                <a
                                                                    href="#"
                                                                    className="text-body d-block"
                                                                >
                                                                    Terms &amp;
                                                                    Privacy
                                                                    policy
                                                                </a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end profile-setting-accordion */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="simplebar-placeholder"
                            style={{ width: "auto", height: "248px" }}
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
                {/* End User profile description */}
            </div>
        </>
    );
}
