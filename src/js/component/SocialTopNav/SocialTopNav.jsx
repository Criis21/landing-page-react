import React from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";

const SocialTopNav = () => {
	return (
		<>
			<Navbar>
				<Container>
					<Navbar.Brand href="">
						<img
							alt=""
							src="https://rphoneb2b.com/img/r-phone-technology-logo-1617618000.jpg"
							width="300"
							height="85"
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default SocialTopNav;
