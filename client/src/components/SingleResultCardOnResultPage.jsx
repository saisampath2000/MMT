import React, { Component } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt, useLocation } from "react-router-dom";
import { withRouter } from 'react-router-dom';


class SingleResultCardOnResultPage extends Component {
	

	Dummy = {
		Departure: this.props.offer.itineraries[0].segments[0].departure.at.slice(-8).slice(0, 5),
		DeparturePlace:this.props.offer.itineraries[0].segments[0].departure.iataCode,
		
		Arrival: this.props.offer.itineraries[0].segments[1].arrival.at.slice(-8).slice(0, 5),
		ArrivalPlace: this.props.offer.itineraries[0].segments[1].arrival.iataCode,
		
		CarrierCode:this.props.offer.itineraries[0].segments[0].carrierCode,
		Carrier: this.props.dictionaries.carriers[this.props.offer.itineraries[0].segments[0].carrierCode],
		
		Price: this.props.offer.price.total,
		BasePrice: this.props.offer.price.base,
		Duration:this.props.offer.itineraries[0].duration,
		NumberOfStops:this.props.offer.oneWay,
		passengers:this.props.Npassengers,
	};



	onClickingBook = () => {
		console.log('On Book Clicked');
		const {history}= this.props;
		const params="booking-page/"+this.props.location.search+`&price=${this.Dummy.Price}&BasePrice=${this.Dummy.BasePrice}`;
		history.push(params);
	}

	
	render() {
		console.log('Npassengers : ',this.Dummy.passengers);
		// const Dummy= {
		// 	Departure: this.props.offer.itineraries[0].segments[0].departure.at.slice(-8).slice(0, 5),
		// 	DeparturePlace:this.props.offer.itineraries[0].segments[0].departure.iataCode,
			
		// 	Arrival: this.props.offer.itineraries[0].segments[1].arrival.at.slice(-8).slice(0, 5),
		// 	ArrivalPlace: this.props.offer.itineraries[0].segments[1].arrival.iataCode,
			
		// 	CarrierCode:this.props.offer.itineraries[0].segments[0].carrierCode,
		// 	Carrier: this.props.dictionaries.carriers[this.props.offer.itineraries[0].segments[0].carrierCode],
			
		// 	Price: this.props.offer.price.total+' ',
		// 	Duration:this.props.offer.itineraries[0].duration,
		// 	NumberOfStops:this.props.offer.oneWay
		// };

		//console.log(Dummy.NumberOfStops)

		const a=new Date(this.props.offer.itineraries[0].segments[0].departure.at);
		const b=new Date(this.props.offer.itineraries[0].segments[1].arrival.at);

		const mins=(b-a)/(60*1000);
		const duration=`${Math.floor(mins/60)} : ${mins%60}`;	

		return (
			<Router>
			<div style={singleResultStyle} >
				<div style={miniContainer}>
					<div style={airlineName}>{this.Dummy.Carrier}</div>

					<div style={departureTime}>
						<p style={highlight}>{this.Dummy.Departure}</p>
						<p style={{fontSize: "11px",margin:"0",color: "#4a4a4a"}}>{this.Dummy.DeparturePlace}</p>
					</div>

					<div style={travelDuration}>
						<p style={highlight}>{duration}</p>
						<Slider disabled defaultValue={this.Dummy.NumberOfStops===0?100:50} aria-label="Disabled slider" sx={{ color: "red" }} size="small" />
						<p style={{fontSize: "11px",margin:"0",color: "#4a4a4a"}}>{this.Dummy.NumberOfStops?"Non Stop":`1 Stop at ${this.props.offer.itineraries[0].segments[0].arrival.iataCode} at  ${this.props.offer.itineraries[0].segments[0].arrival.at.slice(-8).slice(0,5)}`}</p>
					</div>

					<div style={arrivalTime}>
						<p style={highlight}>{this.Dummy.Arrival}</p>
						<p style={{fontSize: "11px",margin:"0",color: "#4a4a4a"}}>{this.Dummy.ArrivalPlace}</p>
					</div>

					<div style={travelPrice}>
						<p style={highlight}>{(this.Dummy.Price)/(this.Dummy.passengers)+' '}{<>&euro;</>}</p>
					</div>

					<div style={bookOrder}>
						<Button
							variant="contained"
							sx={{
								fontSize: "0.8rem",
								borderRadius: "50px",
								padding: "5px 50px",
								marginLeft: "20px",
								fontWeight:'bold',
								
							}}
							onClick={this.onClickingBook}
						>
							Book
						</Button>
					</div>
				</div>
			</div>
			</Router>
		);
	}
}

const singleResultStyle = {
	width: "95%",
	height: "90px",
	margin: "25px 0",
	borderRadius: "8px",
	backgroundColor: "#fff",
	boxShadow: "5px 10px 8px 10px #888888",
};

const miniContainer = {
	width: "95%",
	height: "95%",
	margin: "5px auto",
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
};

const airlineName = {
	flex: 1,
	textAlign: "center",
};

const arrivalTime = {
	flex: 1,
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
};

const travelDuration = {
	flex: 1,
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
};

const departureTime = {
	flex: 1,
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
};

const travelPrice = {
	flex: 1,
	textAlign: "center",
};

const bookOrder = {
	flex: 1,
	textAlign: "center",
};

const highlight = {
	margin: "2px 0",
	fontWeight: "bold",
	fontSize: "1.1rem",
};


export default withRouter(SingleResultCardOnResultPage);