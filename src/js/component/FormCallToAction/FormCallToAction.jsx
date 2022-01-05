import React from "react";
import { Form, Button } from "react-bootstrap";

const FormCallToAction = () => {
	return (
		<>
			<div className="my-3">
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Dirección de correo electrónico</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Contraseña</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group className="my-5 " controlId="formBasicCheckbox">
						<Form.Check type="switch" id="custom-switch" />
						<span>Recuerdame</span>
					</Form.Group>
					<Button variant="primary" type="submit">
						Enviar
					</Button>
				</Form>
			</div>
		</>
	);
};

export default FormCallToAction;
