import React, { useState } from "react";
import "./VolunteerComponent.css";
import AvailableProgram from "./availableProgram/AvailableProgram";
import ExistingProgram from "./exisitngProgram/ExistingProgram";

function VolunteerComponent({ handleLogout }) {
  const [activeProgram, setActiveProgram] = useState("Available Programs");

  return (
    <div className="volunteer-container">
      <nav className="navbar-blue">
        <ul className="nav-list">
          <li>
            <button
              className={`nav-link-button ${
                activeProgram === "Available Programs" ? "active-link" : ""
              }`}
              onClick={() => setActiveProgram("Available Programs")}
            >
              Available Programs
            </button>
          </li>
          <li>
            <button
              className={`nav-link-button ${
                activeProgram === "Existing Programs" ? "active-link" : ""
              }`}
              onClick={() => setActiveProgram("Existing Programs")}
            >
              Existing Programs
            </button>
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className="program-list-container">
        <h2>{activeProgram}</h2>
        {activeProgram === "Available Programs" ? (
          <AvailableProgram />
        ) : (
          <ExistingProgram />
        )}
      </div>
    </div>
  );
}

export default VolunteerComponent;
