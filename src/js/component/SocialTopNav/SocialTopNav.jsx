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
					<Navbar.Collapse className="justify-content-end">
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="¿Qué buscas?"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Buscar</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default SocialTopNav;
