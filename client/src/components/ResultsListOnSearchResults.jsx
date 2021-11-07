import React, { Component } from "react";
import SingleResultCardOnResultPage from "./SingleResultCardOnResultPage";
import FilterSearchOnResultPage from "./FilterSearchOnResultPage";
import { v4 as uuidv4 } from 'uuid';
import '../css/RightResultsList.css';

export default class ResultsListOnSearchResults extends Component {

	state ={
		offers:this.props.offers,
		dictionaries:this.props.dictionaries,
	}

	onPriceLimitChange = (value) => {
		this.setState({offers:this.props.offers.filter(currOffer=>Math.floor(currOffer.price.total)<value)})
	}

	render() {
		//console.log(this.props.dictionaries)
		return (
			<div style={resultsListContainer}>
				<div style={leftBar} >
					<FilterSearchOnResultPage  onPriceLimitChange={this.onPriceLimitChange} queryURL={this.props.queryURL}/>
				</div>
				<div className="rightBar">
					<p style={highlight}>Flights From {this.props.from} to {this.props.to}</p>
					{/* <SingleResultCardOnResultPage /> */}
					{ this.state.offers.map(cf => ( <SingleResultCardOnResultPage key={uuidv4()} offer={cf} dictionaries={this.state.dictionaries} Npassengers={this.props.passengers}/>)) }
				</div>
			</div>
		);
	}
}

const resultsListContainer = {
	display: "flex",
	minHeight:'100vh',
	// height:'100vh',
	// overflow:'auto',
	backgroundColor: "#b9daf0",
};

const leftBar = {
	width: "25%",
	// height:'100%',
	// border: "1px solid black",
	backgroundColor: "#b9daf0",
	marginRight: "10px",
};

// const rightBar = {
// 	position:'absolute',
// 	right:'0',
// 	width: "75%",
// 	overflow:'auto',
// 	height:'100%',
// 	backgroundColor: "#b9daf0",
// };

const highlight = {
	margin: "15px 5px",
	fontWeight: "bold",
	fontSize: "1.5rem",
};

