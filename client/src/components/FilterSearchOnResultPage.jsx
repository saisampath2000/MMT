import React, { Component } from "react";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default class FilterSearchOnResultPage extends Component {

	onPriceLimitChange = (e,value) => {
		//console.log(value);
		this.props.onPriceLimitChange(value);
	}

	onTravelTypeChange = (e) => {
		//console.log(e.target.value);
	}

	onClassChange = (e) => {
		// const {history}=this.props;
		// console.log(this.props.queryURL);
		// const travelClass=e.target.value;
		// console.log(travelClass.toUpperCase());
		// const newQueryUrl="search-page/"+this.props.queryURL+"&travelClass="+travelClass.toUpperCase();
		
		// console.log(newQueryUrl);
		//history.push(newQueryUrl);
	}



	render() {
		return (
			<div style={filterContainer}>
				<p style={{textAlign:'center',fontSize:"1.2rem",margin:"10px 0"}}>Filters</p>
				<div style={maxPrice}>
					<p style={{color:'#00000099'}}>Price Limit (Euro)</p>
					<Slider
						defaultValue={10000}
						aria-label="Default"
						valueLabelDisplay="on"
						min={350}
						max={10000}
						sx={{ mt: "25px" }}
						onChange={this.onPriceLimitChange}
					/>
				</div>
				<div style={flightStops}>
					<FormControl component="fieldset">
						<FormLabel component="legend">Stops</FormLabel>
						<RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="1pstop" onChange={this.onTravelTypeChange}>
							<FormControlLabel value="1pstop" control={<Radio />} label="1+ Stop" />
							<FormControlLabel value="nonstop" control={<Radio />} label="Non Stop" />
						</RadioGroup>
					</FormControl>
				</div>
				<div style={travelClass}>
					<FormControl component="fieldset">
						<FormLabel component="legend">Class</FormLabel>
						<RadioGroup aria-label="travelclass" defaultValue="economy" name="radio-buttons-group" onInput={this.onClassChange}>
                            <FormControlLabel value="economy" control={<Radio />} label="Economy" />
							<FormControlLabel value="business" control={<Radio />} label="Business" />
							<FormControlLabel value="first" control={<Radio />} label="First" />
						</RadioGroup>
					</FormControl>
				</div>
			</div>
		);
	}
}

const filterContainer = {
	width: "95%",
	BorderRaduis:'10px',
	margin: "20px auto",
	// border: "1px solid black",
	backgroundColor: "#fff",
	boxShadow: '5px 10px 8px 10px #888888',
};

const maxPrice = {
	margin: "20px 10px",
};

const flightStops = {
	margin: "20px 5px",
};

const travelClass = {
    margin: "20px 5px",
}