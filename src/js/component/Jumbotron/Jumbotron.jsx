import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import FormCallToAction from "../FormCallToAction/FormCallToAction.jsx";

const Jumbotron = () => {
	return (
		<div>
			<Container>
				<Row>
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://rphoneb2b.com/modules/angarslider/views/img/images/d7198a39df383eb001c44e9c1770999dedd77cb2_WeChat%20Image_20210413121701.jpg"
								alt="LCD Display for Samsung"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://rphoneb2b.com/modules/angarslider/views/img/images/90da13b254ec1148e2c31180f6f378f201024336_WeChat%20Image_20210413192132.jpg"
								alt="Reparaciones de móviles y tablets"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://rphoneb2b.com/modules/angarslider/views/img/images/adbf6e9f28a6477b6f2f747afa4ac82c0e5815e1_WeChat%20Image_20210414142133.jpg"
								alt="Auriculares Bluetooth inalámbricos"
							/>
						</Carousel.Item>
					</Carousel>
				</Row>
				<Row>
					<Col className="my-3">
						<img
							src="https://via.placeholder.com/250.png/9b9b9b/fff"
							alt="some text"
						/>
						{""}
					</Col>
					<Col>
						<FormCallToAction></FormCallToAction>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Jumbotron;
