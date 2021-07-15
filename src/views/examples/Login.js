import React, { useState } from "react";
import {useDispatch} from 'react-redux';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import {setUserStatus} from '../../redux/user/user.actions';


const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    if (email === 'email@email.com' && password === 'password') {
      dispatch(setUserStatus(true))
    } else {
      setIsError(true);
    }
  }

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h4 className="display-4">Авторизация</h4>
              {isError && <small className="text-danger">Email или пароль ввдены неверно.</small>}
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={handleEmailChange}
                    value={email}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Пароль"
                    type="password"
                    autoComplete="new-password"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Запомнить меня</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit" disabled={!email || !password}>
                  Войти
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="/registration"
            >
              <small>Создать новый аккаунт</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
