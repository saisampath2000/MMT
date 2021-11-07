import React, { Component } from "react";
import { Paper } from "@mui/material";

export default class ReviewDetails extends Component {
    render() {
        return (
            <Paper elevation={3} sx={{maxWidth: 2000}} style={{ padding: "1em", textAlign: "center"}}>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <div>
                        <p>First Name : <span style={{fontWeight: "bold"}}>{this.props.firstName}</span></p>
                    </div>
                    <div>
                        <p>Last Name : <span style={{fontWeight: "bold"}}>{this.props.lastName}</span></p>
                    </div>
                    <div>
                        <p>Gender : <span style={{fontWeight: "bold"}}>{this.props.gender}</span></p>
                    </div>
                </div>
            </Paper>
        );
    }
}
