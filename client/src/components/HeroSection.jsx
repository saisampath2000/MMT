import { Card, CardContent, CardHeader, CardActions } from "@mui/material";
import React, { Component } from "react";
import { Container } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Paper from "./Paper";
import Fab from "@mui/material/Fab";
import IconLabelTabs from "./CardHeader";
import { data } from "../Data/HomePageData";
import SearchResults from "../pages/SearchResults";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';


class HeroSection extends Component {
    constructor() {
        super();
        this.state = {
            selectValue: "one-way",
        };
    }
    
    searchData =  {

    }

    getData = (from, to, departureDate, returnDate, travellers) => {
        data.type = this.state.selectValue;
        data.from = from;
        data.to = to;
        data.departureDate = departureDate;
        data.returnDate = returnDate;
        data.travellers = travellers;
    };

    handleChangeRadioGroup = (value) => {
        this.setState({
            selectValue: value,
        })
    }

    
    onSearchClick = () =>{
        const { history } = this.props;
        
        const codesOfCities={
            "SYDNEY":"SYD",
            "BANGKOK":"BKK",
            "SYD":"SYD",
            "BKK":"BKK",
        }

        //console.log(data);
        // type: "",
        // from: "",
        // to: "",
        // departureDate: "",
        // returnDate: "",
        // travellers: "",
        if(data.form!=="" && data.to!==""&& data.travellers!=="" && data.departureDate!==""){
            let params=`?originLocationCode=${codesOfCities[data.from.toUpperCase()]??data.from}&destinationLocationCode=${codesOfCities[data.to.toUpperCase()]??data.to}&departureDate=${data.departureDate}&adults=${data.travellers}`
            // if(data.type==="round-trip"){
            //     params=`&=${data.returnDate}`
            // }



            history.push(`/search-page${params}`);
        }
    }


    render() {
        return (
            <Router>
            <Container maxWidth="sx">
                <Card elevation={3} style={{ background: "#000036" }}>
                    <CardContent>
                        <FormControl
                            component="fieldset"
                            style={{ marginLeft: "15em" }}
                        >
                            <FormLabel component="legend">
                                <IconLabelTabs />
                            </FormLabel>
                            <RadioGroup
                                row
                                defaultValue="one-way"
                                name="row-radio-buttons-group"
                                color="secondary"
                                style={{ color: "white" }}
                                onChange={(event) => this.handleChangeRadioGroup(event.target.value)}
                            >
                                <FormControlLabel
                                    value="one-way"
                                    control={<Radio />}
                                    label="ONE WAY"
                                />
                                <FormControlLabel
                                    value="round-trip"
                                    control={<Radio />}
                                    label="ROUND TRIP"
                                />
                            </RadioGroup>
                        </FormControl>
                        <Paper sendData={this.getData} selectedValue={this.state.selectValue} />
                    </CardContent>
                    <CardActions>

                        {<Fab
                            color="primary"
                            variant="extended"
                            style={{
                                marginLeft: "60em",
                                paddingLeft: "4em",
                                paddingRight: "4em",
                            }}
                            // onClick={() => this.sendData() }
                            onClick={this.onSearchClick}
                        >
                            Search
                        </Fab>}
                       
                    </CardActions>
                </Card>
            </Container>
            </Router>
        );
    }
}

export default withRouter(HeroSection);