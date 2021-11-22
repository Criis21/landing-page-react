import React from "react";

//include images into your bundle
import CardBody from "./CardBody.jsx";
import BodyForm from "./BodyForm.jsx";
//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<div className="row"></div>
			<div className="row justify-content-center">
				<CardBody></CardBody>
			</div>
			<div className="row">
				<BodyForm></BodyForm>
			</div>
			<div className="row"></div>
		</div>
	);
};

export default Home;
