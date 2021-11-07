import React, { Component } from "react";
import Box from "@mui/material/Box";
import SearchBarOnResults from "../components/SearchBarOnResults";
// import offers from "../services/offerdata.json";
import CircularProgress from '@mui/material/CircularProgress';
import ResultsListOnSearchResults from "../components/ResultsListOnSearchResults";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt, useLocation } from "react-router-dom";
import queryString from "query-string";
// import tokenData from "../services/token.json";
import { tokenSave } from "../Data/token";
import SearchDataDoesNotExists from "../components/SearchDataDoesNotExists";
const baseSearchURL = "https://test.api.amadeus.com/v2/shopping/flight-offers";
//const token = tokenData.token.access_token;

//console.log("tokken", tokenSave.token);

export default class SearchResults extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			params: queryString.parse(this.props.location.search),
			queryURL: this.props.location.search,
			offers: false,
		};
	}

	componentWillMount() {
		this.renderMyData(this.state.queryURL);
	}

	renderMyData(params) {
        //console.log('Query URL : ',this.state.queryURL);

        const url=baseSearchURL + params;
        //console.log('url :',url);
       // const testUrl='https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-11-15&adults=1';

       // console.log(testURL === url)
		fetch(url, {
			headers: {
				Authorization: `Bearer ${tokenSave.token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('fetched data',data);
				this.setState({ offers: data });
			})
			.catch((err) => console.log(err));
	}

    onSearchClickedFromWidget=(params)=>{
       // console.log('widget search :',params);
        this.setState({queryURL:params})
    	//this.setState({params:queryString.parse(params)});
        this.setState({offers:false});
        this.renderMyData(params);
		//this.componentWillMount()
    }

	render() {
		//console.log('params : ',queryString.parse(this.props.location.search))
        const getParams=queryString.parse(this.props.location.search);
		//console.log('params',this.state.params);
		//console.log("render");

		return (
			<>
                {!this.state.offers?(<Box sx={{ display: 'flex',justifyContent:'center',alignContent:'center',mt:'300px' }}>
                    <CircularProgress />
                    </Box>):''
                }


				{this.state.offers?( <SearchBarOnResults
                passengers={getParams.adults}
                from={getParams.originLocationCode}
                to={getParams.destinationLocationCode}
                departureDate={getParams.departureDate}
                onSearchClickedFromWidget={this.onSearchClickedFromWidget}
                />):''}
                
				{this.state.offers.data? (
					<ResultsListOnSearchResults
						offers={this.state.offers.data}
						dictionaries={this.state.offers.dictionaries}
                        from={getParams.originLocationCode}
                        to={getParams.destinationLocationCode}
						passengers={getParams.adults}
						queryURL={this.state.queryURL}
					
					/>
				) : (
					""
				)}

				{(this.state.offers.errors)?<SearchDataDoesNotExists/>:""}
			</>
		);
	}
}
