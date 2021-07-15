import React from "react";

import './ErrorPage.css';

import {
  Row,
  Col,
  Container
} from "reactstrap";


const ErrorPage = () => {
  return (
    <Container>
      <Row>
        <Col md="12">
          <div className="error-template">
            <h1 className="display-1">Oops!</h1>
            <h2 className="display-2">404 Not Found</h2>
            <div className="error-details">
              Извините, произошла ошибка, запрошенная страница не найдена!
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ErrorPage;
