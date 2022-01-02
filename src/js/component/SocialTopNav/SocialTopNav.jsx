import React from "react";
import { Navbar, Container } from "react-bootstrap";

const SocialTopNav = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>
						<img
							alt="Logo de la empresa"
							src="https://key0.cc/images/preview/59518_9032c13e6366da0e5ceed07f7e273efb.png"
							width="90"
							height="90"
							className="d-inline-block align-top"
						/>
						{""}
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};

export default SocialTopNav;
