import React, { Component } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

export default class Footer extends Component {
    render() {
        return (
            <Container maxWidth="sx" > 
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: 'wrap',
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}
                    style={{
                        height: "25vh",
                        background: "black",
                    }}
                >
                    <Box sx={{ width: "20%" }}>
                        <a href="#"><TwitterIcon style={{ color: "white", fontSize: "2.5em", marginRight: "1em"}} /></a>
                        <a href="#"><FacebookOutlinedIcon style={{ color: "white", fontSize: "2.5em"}} /></a>
                    </Box>
                    <Box sx={{ width: "25%" }}>
                        <p style={{ fontSize: "1em", color: "white" }}>
                            &#169;&nbsp;
                            <span style={{ fontWeight: "bold" }}>
                                2021 MAKEMYTRIP PVT. LTD.
                            </span>
                        </p>
                        <p style={{ fontSize: "0.8em", color: "white" }}>
                            Country&nbsp;
                            <span style={{ fontWeight: "bold" }}>
                                India USA UAE
                            </span>
                        </p>
                    </Box>
                </Box>
            </Container>
        );
    }
}
