import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
const CardBody = () => {
	return (
		<>
			<Container className="mb-3">
				<h2>Precios</h2>
				<CardGroup className="mt-5">
					<Card>
						<Card.Body>
							<Card.Title>0$</Card.Title>
							<Card.Text>
								<ul className="list-unstyled mt-3 mb-4">
									<li>10 users included</li>
									<li>2 GB of storage</li>
									<li>Email support</li>
									<li>Help center access</li>
								</ul>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<button
								type="button"
								className="btn btn-lg btn-block btn-outline-primary">
								Gratis
							</button>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>20$ </Card.Title>
							<Card.Text>
								<ul className="list-unstyled mt-3 mb-4">
									<li>50 users included</li>
									<li>20 GB of storage</li>
									<li>Email support</li>
									<li>Help center access</li>
								</ul>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<button
								type="button"
								className="btn btn-lg btn-block btn-outline-primary">
								Consiguelo
							</button>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>30$</Card.Title>
							<Card.Text>
								<ul className="list-unstyled mt-3 mb-4">
									<li>100 users included</li>
									<li>20 GB of storage</li>
									<li>Email support</li>
									<li>Help center access</li>
								</ul>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<button
								type="button"
								className="btn btn-lg btn-block btn-outline-primary">
								Consiguelo
							</button>
						</Card.Footer>
					</Card>
				</CardGroup>
			</Container>
		</>
	);
};
export default CardBody;
