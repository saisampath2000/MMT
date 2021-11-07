import { Paper } from "@mui/material";
import React, { Component } from "react";
import List from '@mui/material/List';
import { ListItem } from "@mui/material";
import ListItemClass from "./ListItem";
import { Divider } from "@mui/material";
import queryString from "query-string";

export default class FareSummary extends Component {

    constructor(props){
        super(props);
        this.state ={
        }
    }
    
    render() {

        console.log('Fare Summary: ',this.props.params);

        return (
            <Paper elevation={5} style={{ background: "#000036" }} sx={{width: "350px"}} style={{ padding: "1em" }} >
                <span style={{ color: "black", fontWeight: "bold" }}>
                    Fare Summary
                </span>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItemClass charges={"Base Price"} fee={this.props.params.BasePrice} />
                        <ListItemClass charges={"Fee & Surcharges :"} fee={((this.props.params.price)-(this.props.params.BasePrice)).toFixed(2)} />
                        <ListItemClass charges={"Others :"} fee={"0.00"} />   
                        <Divider />
                        <ListItem disablePadding >
                            <span style={{fontWeight: "bold", color: "black", marginLeft: "4.5em", marginTop: "1em"}}>Total Amount</span>
                            <span style={{fontWeight: "bold", color: "black", marginLeft: "4.5em", marginTop: "1em"}}>{this.props.params.price}</span>
                        </ListItem>    
                    </List>
                </nav>
            </Paper>
        );
    }
}
