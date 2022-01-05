import React from "react";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import "./Testimonials.scss";

const TestimonialsSection = () => {
	return (
		<div>
			<>
				<Container className="mt-5">
					<Row className="justify-content-center py-3">
						<h3>Testimonios</h3>
					</Row>
					<Row>
						<Col xs={6} md={3}>
							<Image
								src="https://www.personio.es/wp-content/uploads/2021/10/Skinvision-150x150.png"
								roundedCircle
							/>
						</Col>
						<Col xs={6} md={3}>
							<p>
								Excelente servicio ,muy buenos comerciales,
								calidad del producto y muy buenos precios ,nunca
								me habia encontrado un proveedor que ofrece tan
								bueno servicio y garantia.Son gentes bastantes
								responsables conmigo y con todos me
								imagino.RECOMIENDO 100%
							</p>
						</Col>
						<Col xs={6} md={3}>
							<Image
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwse_sp_uHjOSdSWINB-e-JzYKN-QtsQtF_w&usqp=CAU"
								roundedCircle
							/>
						</Col>
						<Col xs={6} md={3}>
							<p>
								Ofrecen un servicio excelente, ningún otro
								proveedor nos había atendido de manera tan
								atenta y eficaz, además tienen repuestos
								originales a un precio muy bueno. ¡¡100%
								recomendables!!
							</p>
						</Col>
					</Row>
				</Container>
			</>
		</div>
	);
};

export default TestimonialsSection;
