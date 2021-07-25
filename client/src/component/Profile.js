import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, InlineIcon } from "@iconify/react";
import user2Line from "@iconify-icons/ri/user-2-line";

export default function Profile() {
  const user = useSelector((state) => state.userData);
  const [aboutAccordion, setAboutAccordion] = useState(true);
  const [attachFileAccordion, setAttachFile] = useState(false);
  const toggleAccordion = (e) => {
      if(e === "about"){
        setAboutAccordion(!aboutAccordion)
      }
  };
  return (
    <>
      <div>
        <div className="px-4 pt-4">
          <div className="user-chat-nav float-end">
            <div className="dropdown">
              <a
                href="#"
                className="font-size-18 text-muted dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ri-more-2-fill" />
              </a>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="#">
                  Edit
                </a>
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
            </div>
          </div>
          <h4 className="mb-0">My Profile</h4>
        </div>
        <div className="text-center p-4 border-bottom">
          <div className="mb-4">
            <img
              src={user.userData.profileImg}
              className="rounded-circle avatar-lg img-thumbnail"
              alt=""
            />
          </div>
          <h5 className="font-size-16 mb-1 text-truncate">
            {user.userData.name}
          </h5>
          <p className="text-muted text-truncate mb-1">
            <i className="ri-record-circle-fill font-size-10 text-success me-1 ms-0 d-inline-block" />{" "}
            Active
          </p>
        </div>
        {/* End profile user */}
        {/* Start user-profile-desc */}
        <div className="p-4 user-profile-desc" data-simplebar="init">
          <div className="simplebar-wrapper" style={{ margin: "-24px" }}>
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
                    <div className="text-muted">
                      <p className="mb-4">
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual.
                      </p>
                    </div>
                    <div id="tabprofile" className="accordion">
                      <div className="accordion-item card border mb-2">
                        <div className="accordion-header" id="about2">
                          <button
                            className={`accordion-button ${aboutAccordion?true:'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#about"
                            aria-expanded="true"
                            aria-controls="about"
                            onClick={() => toggleAccordion("about")}
                          >
                            <h5 className="font-size-14 m-0">
                              <Icon
                                icon={user2Line}
                                className="me-2 ms-0 ms-0 align-middle d-inline-block"
                              />
                              About
                            </h5>
                          </button>
                        </div>
                        <div
                          id="about"
                          className={`accordion-collapse collapse ${aboutAccordion?'show':false}`}
                          aria-labelledby="about2"
                          data-bs-parent="#tabprofile"
                        >
                          <div className="accordion-body">
                            <div>
                              <p className="text-muted mb-1">Name</p>
                              <h5 className="font-size-14">
                                {user.userData.name}
                              </h5>
                            </div>
                            <div className="mt-4">
                              <p className="text-muted mb-1">Email</p>
                              <h5 className="font-size-14">
                                {user.userData.email}
                              </h5>
                            </div>
                            <div className="mt-4">
                              <p className="text-muted mb-1">Time</p>
                              <h5 className="font-size-14">11:40 AM</h5>
                            </div>
                            <div className="mt-4">
                              <p className="text-muted mb-1">Location</p>
                              <h5 className="font-size-14 mb-0">
                                California, USA
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End About card */}
                      <div className="card accordion-item border">
                        <div className="accordion-header" id="attachfile2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#attachfile"
                            aria-expanded="false"
                            aria-controls="attachfile"
                            onClick={() => toggleAccordion("attachfile")}
                          >
                            <h5 className="font-size-14 m-0">
                              <i className="ri-attachment-line me-2 ms-0 ms-0 align-middle d-inline-block" />{" "}
                              Attached Files
                            </h5>
                          </button>
                        </div>
                        <div
                          id="attachfile"
                          className="accordion-collapse collapse"
                          aria-labelledby="attachfile2"
                          data-bs-parent="#tabprofile"
                        >
                          <div className="accordion-body">
                            <div className="card p-2 border mb-2">
                              <div className="d-flex align-items-center">
                                <div className="avatar-sm me-3 ms-0">
                                  <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                    <i className="ri-file-text-fill" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="text-start">
                                    <h5 className="font-size-14 mb-1">
                                      Admin-A.zip
                                    </h5>
                                    <p className="text-muted font-size-13 mb-0">
                                      12.5 MB
                                    </p>
                                  </div>
                                </div>
                                <div className="ms-4 me-0">
                                  <ul className="list-inline mb-0 font-size-18">
                                    <li className="list-inline-item">
                                      <a href="#" className="text-muted px-1">
                                        <i className="ri-download-2-line" />
                                      </a>
                                    </li>
                                    <li className="list-inline-item dropdown">
                                      <a
                                        className="dropdown-toggle text-muted px-1"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="ri-more-fill" />
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="#">
                                          Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                          Delete
                                        </a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="card p-2 border mb-2">
                              <div className="d-flex align-items-center">
                                <div className="avatar-sm me-3 ms-0">
                                  <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                    <i className="ri-image-fill" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="text-start">
                                    <h5 className="font-size-14 mb-1">
                                      Image-1.jpg
                                    </h5>
                                    <p className="text-muted font-size-13 mb-0">
                                      4.2 MB
                                    </p>
                                  </div>
                                </div>
                                <div className="ms-4 me-0">
                                  <ul className="list-inline mb-0 font-size-18">
                                    <li className="list-inline-item">
                                      <a href="#" className="text-muted px-1">
                                        <i className="ri-download-2-line" />
                                      </a>
                                    </li>
                                    <li className="list-inline-item dropdown">
                                      <a
                                        className="dropdown-toggle text-muted px-1"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="ri-more-fill" />
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="#">
                                          Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                          Delete
                                        </a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="card p-2 border mb-2">
                              <div className="d-flex align-items-center">
                                <div className="avatar-sm me-3 ms-0">
                                  <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                    <i className="ri-image-fill" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="text-start">
                                    <h5 className="font-size-14 mb-1">
                                      Image-2.jpg
                                    </h5>
                                    <p className="text-muted font-size-13 mb-0">
                                      3.1 MB
                                    </p>
                                  </div>
                                </div>
                                <div className="ms-4 me-0">
                                  <ul className="list-inline mb-0 font-size-18">
                                    <li className="list-inline-item">
                                      <a href="#" className="text-muted px-1">
                                        <i className="ri-download-2-line" />
                                      </a>
                                    </li>
                                    <li className="list-inline-item dropdown">
                                      <a
                                        className="dropdown-toggle text-muted px-1"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="ri-more-fill" />
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="#">
                                          Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                          Delete
                                        </a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="card p-2 border mb-2">
                              <div className="d-flex align-items-center">
                                <div className="avatar-sm me-3 ms-0">
                                  <div className="avatar-title bg-soft-primary text-primary rounded font-size-20">
                                    <i className="ri-file-text-fill" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="text-start">
                                    <h5 className="font-size-14 mb-1">
                                      Landing-A.zip
                                    </h5>
                                    <p className="text-muted font-size-13 mb-0">
                                      6.7 MB
                                    </p>
                                  </div>
                                </div>
                                <div className="ms-4 me-0">
                                  <ul className="list-inline mb-0 font-size-18">
                                    <li className="list-inline-item">
                                      <a href="#" className="text-muted px-1">
                                        <i className="ri-download-2-line" />
                                      </a>
                                    </li>
                                    <li className="list-inline-item dropdown">
                                      <a
                                        className="dropdown-toggle text-muted px-1"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        <i className="ri-more-fill" />
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="#">
                                          Action
                                        </a>
                                        <a className="dropdown-item" href="#">
                                          Another action
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                          Delete
                                        </a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Attached Files card */}
                    </div>
                    {/* end profile-user-accordion */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: "537px" }}
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
        {/* end user-profile-desc */}
      </div>
    </>
  );
}
