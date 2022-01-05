import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Benefits.scss";

const Benefits = () => {
	return (
		<>
			<Container className="my-5">
				<Row>
					<h2 className="py-4"> Beneficios </h2>
					<Col xs={12} md={4}>
						<p>
							Puedes buscar y comparar. Pero estamos tan seguros
							de nuestros precios que si encuentras alguien que
							repare tu móvil más barato, te devolvemos el 110% de
							la diferencia.*
						</p>
					</Col>
					<Col xs={12} md={4}>
						<p>
							Presentando un presupuesto por escrito dentro de los
							primeros 7 días tras la reparación realizada, en el
							que se detallen los mismos trabajos que hayan sido
							realizados por RPhone y las piezas utilizadas,
							siempre que el servicio técnico que realice dicho
							presupuesto sea oficial, emplee repuestos originales
							y dicho presupuesto esté debidamente sellado. No
							válido para presupuestos y condiciones de reparación
							realizados por los operadores de telecomunicaciones.
						</p>
					</Col>
					<Col xs={12} md={4}>
						<p>
							Más de 60 tiendas RPhone cuentan con un servicio
							técnico presencial, que soluciona el 80% de las
							averías en el acto. Para tu comodidad, te atendemos
							con cita previa.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Benefits;
