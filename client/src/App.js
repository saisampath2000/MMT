import "./App.css";
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import BookingPage from "./pages/BookingPage";

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Redirect,
    Prompt,
} from "react-router-dom";
import React from "react";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={HomePage} />{" "}
                <Route path="/search-page" component={SearchResults} />{" "}
                <Route path="/booking-page" component={BookingPage} />{" "}
            </Router>
        );
    }
}

export default App;
