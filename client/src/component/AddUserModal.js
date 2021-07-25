import React, { useState } from "react";
import axios from "axios";
import socket from "../config/socket_config";

export default function AddUserModal(props) {
  const [email, setEmail] = useState("");
  const [invitationMessage, setInvitationMessage] = useState("");
  const [statusMessage, setstatusMessage] = useState("");

  const submitForm = () => {
    // axios.defaults.withCredentials = true;
    // axios
    //   .post(
    //     "http://localhost:8000/inviteFriend",
    //     {
    //       email: email,
    //       invitationMessage: invitationMessage,
    //     },
    //     {
    //       withCredentals: true,
    //     }
    //   )
    //   .then(function (response) {
    //     if (response.data.inviteStatus == 1) {
    //       setstatusMessage("Invitation sent successfully");
    //     }
    //     if (response.data.inviteStatus == 2) {
    //       setstatusMessage(
    //         "User does not exist, Ask the user to sign up before sending an invitaion"
    //       );
    //     }
    //     if (response.data.inviteStatus == 3) {
    //       setstatusMessage(
    //         "Invitation already sent. The user will appear on your friend list when they accept the invitation"
    //       );
    //     }
    //     if (response.data.inviteStatus == 4) {
    //       setstatusMessage("Your are already friends with this user");
    //     }
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    const friendDetail = {
      email: email,
      invitationMessage: invitationMessage,
    };
    socket.emit("inviteFriend", friendDetail);
    socket.off("inviteResponse").on("inviteResponse", (data) => {
        console.log(data)
      if (data.inviteStatus == 1) {
        setstatusMessage("Invitation sent successfully");
      }
      if (data.inviteStatus == 2) {
        setstatusMessage(
          "User does not exist, Ask the user to sign up before sending an invitaion"
        );
      }
      if (data.inviteStatus == 3) {
        setstatusMessage(
          "Invitation already sent. The user will appear on your friend list when they accept the invitation"
        );
      }
      if (data.inviteStatus == 4) {
        setstatusMessage("Your are already friends with this user");
      }
    });
  };
  return (
    <>
      <div className="modal-backdrop fade show" />
      <div
        className="modal fade show"
        id="addContact-exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="addContact-exampleModalLabel"
        aria-modal="true"
        style={{ display: "block" }}
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
                onClick={props.closeModal}
              ></button>
            </div>
            <div className="modal-body p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="addcontactemail-input" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="addcontactemail-input"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setInvitationMessage(e.target.value)}
                  />
                </div>
              </form>
              {statusMessage}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link"
                data-bs-dismiss="modal"
                onClick={props.closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={submitForm}
              >
                Invite Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
