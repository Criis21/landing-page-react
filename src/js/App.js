import React from "react";
import Benefits from "./component/Benefits/Benefits.jsx";
import CardBody from "./component/CardBody/CardBody.jsx";
import TestimonialsSection from "./component/Testimonials/Testimonials.jsx";
import Jumbotron from "./component/Jumbotron/Jumbotron.jsx";
import SocialTopNav from "./component/SocialTopNav/SocialTopNav.jsx";
import SecondFormCallToAction from "./component/SecondFormCallToAction/SecondFormCallToAction.jsx";

const App = () => {
	return (
		<>
			<SocialTopNav />
			<Jumbotron />
			<CardBody />
			<Benefits />
			<TestimonialsSection />
			<SecondFormCallToAction />
		</>
	);
};

export default App;
