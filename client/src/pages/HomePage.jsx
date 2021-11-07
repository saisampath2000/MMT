import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Carousel from "../components/Carousel";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt } from "react-router-dom";


export default class HomePage extends Component {
	render() {
		return (
			<>
				<Header />
				<HeroSection />
				<Carousel />
				<Footer />
			</>
		);
	}
}
