import React, { Component } from 'react';
import Header from "../components/Header";
import FlightDetails from '../components/FlightDetails';
import queryString from "query-string";


export default class BookingPage extends Component {

    constructor(props){
        super(props);
        this.state ={
           queryURL: this.props.location,
           params: queryString.parse(this.props.location.search)
        }
    }



    render() {
        console.log('booking page url params : ',this.state.params);
        return (
            <React.Fragment>
                <Header title={"Complete your booking"} params={this.state.params}/>
                <FlightDetails params={this.state.params}/>
            </React.Fragment>
        )
    }
}
