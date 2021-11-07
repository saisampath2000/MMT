import React, { Component } from "react";
import { Paper } from "@mui/material";
import Passenger from "./Passenger";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from "@mui/material";

export default class TravellerDetails extends Component {
    
    constructor() {
        super();
        this.state = {
            pass: [<Passenger count={1} />]
        }
    }

    onAdd = () => {

        if(this.state.pass.length < this.props.params.adults){
            const newArr = this.state.pass;
            newArr.push(<Passenger count={newArr.length + 1} />)
            this.setState({
                pass: newArr,
            })
        }
    }

    render() {
        return (
            <Paper elevation={3} style={{ padding: "1em", width: "62.5em" }}>
                <h3 style={{ fontWeight: "bold" }}>Traveller Details</h3>
                {this.state.pass.map(element => element)}
                <Button onClick={() => this.onAdd()} variant="contained" startIcon={<AddCircleIcon />} style={{marginTop: "3em"}}>
                    Add Passenger
                </Button> 
            </Paper>
        );
    }
}
