import React from "react";
import GovernmentComponent from "./govt/GovtComponent";
import VolunteerComponent from "./volunteer/Layout";


function HomePage({ userType, handleLogout }) {
  return (
    <div className="App">
      <div>
        {userType === "govt" ? (
          <GovernmentComponent handleLogout={handleLogout}/>
        ) : (
          <VolunteerComponent handleLogout={handleLogout} />
        )}

      </div>
    </div>
  );
}

export default HomePage;
