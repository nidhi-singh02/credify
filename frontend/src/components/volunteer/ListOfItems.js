import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

// Define a CSS class to remove text decoration (underline)
const noUnderlineLink = {
  textDecoration: "none",
};

export default function ListItems(props) {
  const navigate = useNavigate();

  function logout(e) {
    e.preventDefault();
    props.handleLogout();
    navigate("/"); // Navigate to the home page after logout
  }

  return (
    <React.Fragment>
      <Link to="/available" style={noUnderlineLink}>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Available Programs" />
        </ListItemButton>
      </Link>
      <Link to="/existing" style={noUnderlineLink}>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Existing Programs" />
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
