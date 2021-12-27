import React from "react";
import { Navbar, Container } from "react-bootstrap";

const SocialTopNav = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>
						<img
							alt=""
							src="https://via.placeholder.com/50.png/9b9b9b/fff"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						React Bootstrap
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};

export default SocialTopNav;
