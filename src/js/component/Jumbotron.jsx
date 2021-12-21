import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import FormCallToAction from './FormCallToAction'

const Jumbotron = () => {
    return (
        <div>
            <Container>
                <Row>
                    <h1 className="my-2">Hola Mundo</h1>
                    <h3 className="my-2 mb-4"> Este es un sitio con Boostrap y React </h3>
                </Row>
                <Row>
                    <Col className = "my-3">
                        <img
                            src="https://via.placeholder.com/250.png/9b9b9b/fff"
                            alt="some text"
                        />{''}
                    </Col>
                    <Col>
                        <FormCallToAction />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Jumbotron
