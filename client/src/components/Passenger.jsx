import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { FormControl, FormLabel, FormControlLabel } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { Radio } from "@mui/material";
import { travellerData } from "../Data/TravellerDetails";
import { Button } from "@mui/material";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions(props) {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const onhandleFirstName = (value) => {
        travellerData[travellerData.length - 1]["FirstName"] = value;
    }

    const onhandleLastName = (value) => {
        travellerData[travellerData.length - 1]["LastName"] = value;
    }

    const onhandleGender = (value) => {
        travellerData[travellerData.length - 1]["Gender"] = value;
    }

    const onhandleClick = () => {
        // console.log(travellerData);
        travellerData.push({});
    }

    return (
        <div>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                >
                    <Typography>Passenger #{props.count}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="First & Middle Name"
                                variant="outlined"
                                required
                                onChange={(event) => onhandleFirstName(event.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined"
                                required
                                onChange={(event) => onhandleLastName(event.target.value)}
                            />
                        </div>
                        <div>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup
                                    aria-label="gender"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    row
                                    onChange={(event) => onhandleGender(event.target.value)}
                                >
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female"
                                    />
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <Button onClick={() => onhandleClick()} style={{float: "right"}}>Submit</Button>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
