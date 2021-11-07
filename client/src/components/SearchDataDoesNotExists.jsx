import React, { Component } from 'react';
import FilterSearchOnResultPage from './FilterSearchOnResultPage';
import '../css/RightResultsList.css';

export default class SearchDataDoesNotExists extends Component {
    render() {
        return (
            <div style={resultsListContainer}>
				<div style={leftBar} >
					<FilterSearchOnResultPage  onPriceLimitChange={this.onPriceLimitChange} />
				</div>
				<div className="rightBar">
					<p style={highlight}>No Flights Available based for given criteria</p>
				</div>
			</div>
        )
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
	textAlign:'center',
	margin: "25px 5px",
	fontWeight: "bold",
	fontSize: "1.5rem",
};
