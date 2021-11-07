import { Card, CardContent, CardActions, Container } from "@mui/material";
import React, { Component } from "react";
import { Paper } from "@mui/material";
import RecipeReviewCard from "./FlightCard";
import FareSummary from "../components/FareSummary";
import { Grid } from "@mui/material";
import Refund from "./Refund";
import TravellerDetails from "./TravellerDetails";
import Information from "./Information";
import { Button } from "@mui/material";
import FullScreenDialog from "./Continue";

export default class FlightDetails extends Component {


    // state = {
    //     params:this.props.params,
    // }


    render() {

        console.log('flight details page params : ',this.props.params);

        return (
            <Container maxWidth="sx">
                <Paper  style={{ background: "#000036", padding: "4em" }}>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <RecipeReviewCard params={this.props.params} />
                        </div>

                        <div>
                            <FareSummary params={this.props.params}/>
                        </div>
                    </div>
                    <Grid container direction="coloum" spacing={2} style={{marginLeft: "3.8em", marginTop: "1em"}}>
                        <Grid item>
                            <Refund params={this.props.params}/>
                        </Grid>
                        <Grid item>
                            <Information params={this.props.params}/>
                        </Grid>
                        <Grid item>
                            <TravellerDetails params={this.props.params}/>
                        </Grid>
                    </Grid>
                    {/* <Button variant="contained" style={{marginLeft: "4.5em", marginTop: "2em", fontSize: "1em"}}>CONTINUE</Button> */}
                    <FullScreenDialog params={this.props.params} />
                </Paper>
            </Container>
        );
    }
}
