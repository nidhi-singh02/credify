import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormDetails() {
  const [formData, setFormData] = React.useState({
    programName: "",
    address: "",
    duration: "",
    listAllCredentials: "",
    skillSet: "",
    schema: "",
    slotsAvailable: "",
    currentLocation: "",
    statusOfProgram: "",
  });

  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFormSubmit = () => {
    toast.success(`Data saved successfully!`, {
      position: "top-right",
      autoClose: 3000,
    });
    console.log("Form Data:", formData);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom></Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="programName"
            name="programName"
            label="Program Name"
            fullWidth
            variant="standard"
            value={formData.programName}
            onChange={(e) => handleFieldChange("programName", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
            fullWidth
            variant="standard"
            value={formData.address}
            onChange={(e) => handleFieldChange("address", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="duration"
            name="duration"
            label="Duration"
            fullWidth
            variant="standard"
            value={formData.duration}
            onChange={(e) => handleFieldChange("duration", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="listAllCredentials"
            name="listAllCredentials"
            label="List all Credentials"
            fullWidth
            variant="standard"
            value={formData.listAllCredentials}
            onChange={(e) =>
              handleFieldChange("listAllCredentials", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="skillSet"
            name="skillSet"
            label="Skill Set"
            fullWidth
            variant="standard"
            value={formData.skillSet}
            onChange={(e) => handleFieldChange("skillSet", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="schema"
            name="schema"
            label="Schema"
            fullWidth
            variant="standard"
            value={formData.schema}
            onChange={(e) => handleFieldChange("schema", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="slotsAvailable"
            name="slotsAvailable"
            label="Slots available"
            fullWidth
            variant="standard"
            value={formData.slotsAvailable}
            onChange={(e) =>
              handleFieldChange("slotsAvailable", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="currentLocation"
            name="currentLocation"
            label="Current Location"
            fullWidth
            variant="standard"
            value={formData.currentLocation}
            onChange={(e) =>
              handleFieldChange("currentLocation", e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="stastatusOfProgramte"
            name="statusOfProgram"
            label="status Of Program"
            fullWidth
            variant="standard"
            value={formData.statusOfProgram}
            onChange={(e) =>
              handleFieldChange("statusOfProgram", e.target.value)
            }
          />
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 3 }} onClick={handleFormSubmit}>
        Save
      </Button>
    </React.Fragment>
  );
}
