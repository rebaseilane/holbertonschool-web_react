/**
 * App.jsx
 * -------------------------
 * Main dashboard application component.
 */
import React from "react";
import "./App.css";
import holbertonLogo from "./assets/holberton-logo.jpg";
import Notifications from "./Notifications";
import { getCurrentYear, getFooterCopy } from "./utils";

/**
 * Main App component.
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className="App">
      <div className="root-notifications">
        <Notifications />
      </div>

      <div className="App-header">
        <img src={holbertonLogo} alt="holberton logo" className="logo" />

        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* EMAIL FIELD */}
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <br />

        {/* PASSWORD FIELD */}
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <br />

        {/* BUTTON */}
        <button type="button">OK</button>
      </div>

      <div className="App-footer">
        <p>
          Copyright {getCurrentYear()} - {getFooterCopy(false)}
        </p>
      </div>
    </div>
  );
}

export default App;
