import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form/Form";


function App() {
	return (
		<div className="App">
			<Router>
				<Route exact path="/">
					<Form/>	
				</Route>
			</Router>
		</div>
	);
}

export default App;
