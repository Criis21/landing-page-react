import React from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
const SecondFormCallToAction = () => {
	return (
		<>
			<Container className="justify-content-center my-5 bg-dark py-4">
				<Row className="justify-content-center">
					<Form className="justify-content-center">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control
								className="mb-2"
								type="email"
								placeholder="Enter Email"
							/>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form.Group>
					</Form>
				</Row>
			</Container>
		</>
	);
};

export default SecondFormCallToAction;
