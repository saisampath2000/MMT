import React, { Component } from "react";
import { Card } from "@mui/material";
import { Container } from "@mui/material";
import Carousel1 from "./Offer";
import Carousel2 from "./Places";

export default class Carousel extends Component {
    render() {
        return (
            <Container maxWidth="sx">
                <Card elevation={3}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <Carousel1 />
                        </div>
                        <div>
                            <Carousel2 />
                        </div>
                    </div>
                </Card>
            </Container>
        );
    }
}
