import React, { Component } from "react";
import { Paper } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import { Avatar } from "@mui/material";
import { pink } from "@mui/material/colors";

export default class Information extends Component {
    render() {
        return (
            <Paper elevation={3} style={{ padding: "1em", width: "62.5em" }}>
                <h4 style={{ fontWeight: "bold" }}>Important Information</h4>
                <Avatar sx={{ bgcolor: pink[500] }}>
                    <SecurityIcon />
                </Avatar>
                <span
                    style={{
                        fontWeight: "bold",
                        position: "relative",
                        left: "3em",
                        bottom: "1.8em",
                    }}
                >
                    Mandatory check-list for passengers
                </span>
                <ul style={{ marginLeft: "0.5em" }}>
                    <li style={{ marginBottom: "1em" }}>
                        Vaccination requirements : None.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                        Pre-registration or e-Pass requirements :&nbsp;
                        <span style={{ fontWeight: "bold" }}>
                            Download and update Aarogya Setu app
                        </span>
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                        Remember to web check-in before arriving at the airport;
                        carry a printed or soft copy of the boarding pass.
                    </li>
                    <li style={{ marginBottom: "1em" }}>
                        Please reach at least 2 hours prior to flight departure.
                    </li>
                    <li style={{ marginBottom: "1em", lineHeight: "2" }}>
                        Destination Restrictions :&nbsp;
                        <span style={{ fontWeight: "bold" }}>
                            A lockdown is in effect at the moment, however,
                            flight operations remain unaffected during this
                            time. Please check the latest state guidelines
                            before travelling.
                        </span>
                    </li>

                    <li style={{ marginBottom: "1em" }}>
                        Remember to download the baggage tag(s) and affix it on
                        your bag(s).
                    </li>
                </ul>
                <Avatar sx={{ bgcolor: pink[500] }}>
                    <SecurityIcon />
                </Avatar>
                <span
                    style={{
                        fontWeight: "bold",
                        position: "relative",
                        left: "3em",
                        bottom: "1.8em",
                    }}
                >
                    State Guidelines
                </span>
                <ul style={{ marginLeft: "0.5em" }}>
                    <li>
                        Check the detailed list of travel guidelines issued by
                        Indian States and UTs.
                    </li>
                </ul>
                <Avatar sx={{ bgcolor: pink[500] }}>
                    <SecurityIcon />
                </Avatar>
                <span
                    style={{
                        fontWeight: "bold",
                        position: "relative",
                        left: "3em",
                        bottom: "1.8em",
                    }}
                >
                    Baggage information
                </span>
                <ul style={{ marginLeft: "0.5em", lineHeight: "2" }}>
                    <li>
                        Carry no more than 1 check-in baggage and 1 hand baggage
                        per passenger. Additional pieces of Baggage will be
                        subject to{" "}
                        <span style={{ paddingTop: "1px" }}>
                            additional charges per piece in addition to the
                            excess baggage charges.{" "}
                        </span>
                    </li>
                </ul>
                <Avatar sx={{ bgcolor: pink[500] }}>
                    <SecurityIcon />
                </Avatar>
                <span
                    style={{
                        fontWeight: "bold",
                        position: "relative",
                        left: "3em",
                        bottom: "1.8em",
                    }}
                >
                    A Note on Guidelines
                </span>
                <ul style={{ marginLeft: "0.5em", lineHeight: "2" }}>
                    <li>
                        Disclaimer: The information provided above is only for
                        ready reference and convenience of customers, and may
                        not be exhaustive. We strongly recommend that you check
                        the full text of the guidelines issued by the State
                        Governments before travelling. MakeMyTrip accepts no
                        liability in this regard.
                    </li>
                </ul>
            </Paper>
        );
    }
}
