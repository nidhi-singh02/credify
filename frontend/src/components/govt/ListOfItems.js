import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ListItems(props) {
  const navigate = useNavigate();

  function logout(e) {
    e.preventDefault();
    props.handleLogout();
    navigate("/"); // Navigate to the home page after logout
  }

  const noUnderlineLink = {
    textDecoration: "none",
  };

  return (
    <React.Fragment>
      <Link to="/programs" style={noUnderlineLink}>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="My Programs" />
        </ListItemButton>
      </Link>

      <Link to="/createprogram" style={noUnderlineLink}>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Create Program" />
        </ListItemButton>
      </Link>

      <ListItemButton onClick={(e) => logout(e)}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );
}
