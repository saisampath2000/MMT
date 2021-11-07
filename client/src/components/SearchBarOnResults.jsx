import { Container } from "@mui/material";
import React, { Component } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../css/SearchResults.css";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import '../css/SearchResults.css';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt, useLocation } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class SearchBarOnResults extends Component {
	
	state= {
		tripType:2
	}

	getDate = () => {

		const today=new Date();
		let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

		if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        const todayDate = yyyy+'-'+mm+'-'+dd;

		return todayDate;
	}

	widgetInput = {
		startDate:this.props.departureDate,
		start:this.props.from,
		end:this.props.to,
		passengers:this.props.passengers,
		to:this.props.to,
	}

	getStartLocation = (e) =>{
		//console.log(e.target.value);
		this.widgetInput.start=e.target.value;
	}

	getDropLocation = (e) =>{
		// console.log(e.target.value);
		this.widgetInput.end=e.target.value;
	}

	getStartLocationDate = (e) =>{
		console.log(e.target.value);
		this.widgetInput.startDate=e.target.value;
	}

	getDropLocationDate = (e) =>{
		// console.log(e.target.value);
		this.widgetInput.endDate=e.target.value;
	}

	getPassengerNumbers = (e) =>{
		//console.log(e.target.value);
		this.widgetInput.passengers=e.target.value;
	}

	onSearchClick = () => {

		const codesOfCities={
            "SYDNEY":"SYD",
            "BANGKOK":"BKK",
            "SYD":"SYD",
            "BKK":"BKK",
        }

		const {history}= this.props;

		console.log(this.widgetInput.start);
		console.log(this.widgetInput.end);
		console.log(this.widgetInput.startDate);
		// console.log(this.widgetInput.endDate);
		console.log(this.widgetInput.passengers);

		let params=`?originLocationCode=${codesOfCities[this.widgetInput.start.toUpperCase()]??this.widgetInput.start}&destinationLocationCode=${codesOfCities[this.widgetInput.end.toUpperCase()]??this.widgetInput.end}&departureDate=${this.widgetInput.startDate}&adults=${this.widgetInput.passengers}`
		const sendUrl="/search-page"+params;
		history.push(sendUrl);
		this.props.onSearchClickedFromWidget(params);
	}


	tripTypeHandler = (e) => {
		//console.log(e.target.getAttribute("data-value"));
		this.setState({tripType:e.target.getAttribute("data-value")})
	}


	render() {
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1 },
			}}
			noValidate
			autoComplete="off"
		></Box>;

		const NameOfCities={
            "SYD":"SYDNEY",
            "BKK":"BANGKOK",
            "BANGKOK":"BANGKOK",
            "SYDNEY":"SYDNEY",
        }

		// console.log(this.props.offers);

		//console.log(this.getDate());
		return (
			<Router>
			<div style={searchBarContainer} id="searchBar">
				<div style={searchBar}>
					<div className="mini-container">
						
						<FormControl variant="filled" sx={formControlStyle} >
							<InputLabel sx={{ color: "#fff" }} htmlFor="component-filled">
								Trip Type
							</InputLabel>
							<Select sx={{ color: "#fff" }} onClick={this.tripTypeHandler} defaultValue={1}>
								<MenuItem value={1}>One Way</MenuItem>
								<MenuItem value={2} >With Return </MenuItem>
							</Select>
						</FormControl>
						
						<FormControl variant="filled" sx={formControlStyle}>
							<InputLabel sx={{ color: "#fff" }} htmlFor="component-filled">
								From
							</InputLabel>
							<FilledInput id="component-filled" placeholder="From" sx={{ color: "#fff" }} onMouseLeave={this.getStartLocation}
							 defaultValue={NameOfCities[this.props.from.toUpperCase()]}/>
						</FormControl>
						
						<FormControl variant="filled" sx={formControlStyle}>
							<InputLabel sx={{ color: "#fff" }} htmlFor="component-filled">
								To
							</InputLabel>
							<FilledInput id="component-filled" placeholder="To" sx={{ color: "#fff" }} onMouseLeave={this.getDropLocation} 
							defaultValue={NameOfCities[this.props.to.toUpperCase()]}/>
						</FormControl>
						
						<FormControl variant="filled" sx={formControlStyle}>
							<InputLabel sx={{ color: "#fff" }} htmlFor="component-filled">
								Departure
							</InputLabel>
							<FilledInput type="date" defaultValue={this.widgetInput.startDate} min={this.getDate()} id="component-filled" placeholder="Departure"
							 sx={{ color: "#fff" }}
							 onMouseLeave={this.getStartLocationDate}
							  >
							</FilledInput>
							
						</FormControl>

						{(this.state.tripType==='2')?(
							<FormControl variant="filled" sx={formControlStyle}>
							<InputLabel sx={{ color: "#fff" }} htmlFor="component-filled">
								Return
							</InputLabel>
							<FilledInput type="date" defaultValue={this.getDate()} min={this.getDate()} id="component-filled" placeholder="Departure" sx={{ color: "#fff" }}  onClick={this.getDropLocationDate} ></FilledInput>
						</FormControl>

						):""}

						<FormControl variant="filled" sx={formControlStyle}>
							<InputLabel sx={{ color: "#fff" }} htmlFor="component-filled">
								Passenger
							</InputLabel>
							<FilledInput id="component-filled" placeholder="Passenger" sx={{ color: "#fff" }} onChange={this.getPassengerNumbers} defaultValue={this.props.passengers}/>
						</FormControl>
						<div sx={searchButton}>
							<Button
								variant="contained"
								sx={{
									fontSize: "1.2rem",
									borderRadius: "50px",
									padding: "9px 45px",
									marginLeft: "20px",
									fontWeight: "bold",
								}}

								onClick={this.onSearchClick}
							>
								Search
							</Button>
						</div>
					</div>
				</div>
			</div>
			</Router>
		);
	}
}

const searchBarContainer = {
	// position:'sticky',
	// top:0,
	// left:0,
	width: "100%",
	height: "70px",
	backgroundColor: "#041422",
	display: "flex",
	justifyContent: "center",
	alignContent: "center",
};

const searchBar = {
	display: "flex",
	justiifyContent: "center",
	margin: "0",
	width: "100%",
	// border: "1px solid #ccc",
};

const formControlStyle = {
	bgcolor: "#ffffff1a",
	borderRadius: "5px",
	margin: "7px 0",
	marginRight: "5px",
	flex: 1,
};


const searchButton = {
	flex: 1,
};


export default withRouter(SearchBarOnResults);