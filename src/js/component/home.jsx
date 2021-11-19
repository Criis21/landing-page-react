import React from "react";

//include images into your bundle
import CardBody from "./CardBody.jsx";
//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row"></div>
			<div className="row">
				<CardBody></CardBody>
			</div>
			<div className="row"></div>
			<div className="row"></div>
		</div>
	);
};

export default Home;
