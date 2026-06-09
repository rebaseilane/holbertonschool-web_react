/**
 * Notifications.jsx
 * -------------------------
 * Displays dashboard notifications.
 */

import React from "react";
import "./Notifications.css";
import closeIcon from "./assets/close-icon.png";
import { getLatestNotification } from "./utils";

/**
 * Notifications component
 *
 * @returns {JSX.Element}
 */
function Notifications() {
  /**
   * Handles close button click
   */
  function handleClose() {
    console.log("Close button has been clicked");
  }

  return (
    <div className="Notifications">

      {/* CLOSE BUTTON (inline style requirement) */}
      <button
        aria-label="Close"
        onClick={handleClose}
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          background: "transparent",
          border: "none",
          cursor: "pointer"
        }}
      >
        <img
          src={closeIcon}
          alt="close icon"
          width="15"
          height="15"
        />
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">
          New course available
        </li>

        <li data-priority="urgent">
          New resume available
        </li>

        <li data-priority="urgent">
          <span
            dangerouslySetInnerHTML={{
              __html: getLatestNotification()
            }}
          />
        </li>
      </ul>

    </div>
  );
}

export default Notifications;