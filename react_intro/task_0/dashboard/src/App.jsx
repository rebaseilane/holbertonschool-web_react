/**
 * App.jsx
 * -------------------------
 * Main dashboard application component.
 */

import React from "react";
import "./App.css";
import holbertonLogo from "./assets/holberton-logo.jpg";

/**
 * App component
 *
 * @returns {JSX.Element}
 */
function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">

      {/* HEADER */}
      <header className="App-header">
        <img
          src={holbertonLogo}
          alt="holberton logo"
          className="logo"
        />

        <h1>School dashboard</h1>
      </header>

      {/* BODY */}
      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>

      {/* FOOTER (IMPORTANT: must be <footer>, not div) */}
      <footer className="App-footer">
        <p>
          Copyright {currentYear} - Holberton School
        </p>
      </footer>

    </div>
  );
}

export default App;