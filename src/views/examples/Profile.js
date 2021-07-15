import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

import {selectUserInfo} from "../../redux/user/user.selectors";
import {setUserInfo} from "../../redux/user/user.actions";


const Profile = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const userInfo = useSelector(selectUserInfo);
  const [formUserInfo, setFormUserInfo] = useState({...userInfo})
  const [fieldError, setFieldError] = useState({
    username: false,
    email: false,
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    country: false,
    postCode: false,
    about: false
  });

  const handleSubmit = event => {
    event.preventDefault();

    for (const [, value] of Object.entries(fieldError)) {
      if (value) {
        return null;
      }
    }
    dispatch(setUserInfo(formUserInfo));
    setIsEditing(false);
  }

  const handleFieldChange = event => {
    const { name, value } = event.target;

    switch(name){
      case 'email':
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          setFieldError({...fieldError, email: true})
        } else {
          setFieldError({...fieldError, email: false})
        }
        break;
      case 'postCode':
        if (!/^[0-9]+$/i.test(value)) {
          setFieldError({...fieldError, postCode: true})
        } else {
          setFieldError({...fieldError, postCode: false})
        }
        break;
      case 'country':
        if (!/^[А-Яа-я]+$/i.test(value)) {
          setFieldError({...fieldError, country: true})
        } else {
          setFieldError({...fieldError, country: false})
        }
        break;
      case 'city':
        if (!/^[А-Яа-я]+$/i.test(value)) {
          setFieldError({...fieldError, city: true})
        } else {
          setFieldError({...fieldError, city: false})
        }
        break;
      default:
    }

    setFormUserInfo({
      ...formUserInfo,
      [name]: value
    })
  }

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between" />
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Коллеги</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Фото</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Комментарии</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {`${userInfo.firstName} ${userInfo.lastName}`}
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Рейкьявик, Исландия
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Аналитик - QA Testing
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    Университет компьютерных наук
                  </div>
                  <hr className="my-4" />
                  <p />
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Показать больше
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Личные данные</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <h6 className="heading-small text-muted mb-4">
                    Основная информация
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Логин
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formUserInfo.username}
                            name="username"
                            id="input-username"
                            placeholder="Логин"
                            type="text"
                            disabled={!isEditing}
                            onChange={handleFieldChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email
                          </label>
                          <Input
                            className={fieldError.email ? "is-invalid": null}
                            value={formUserInfo.email}
                            name="email"
                            id="input-email"
                            placeholder="email@example.com"
                            type="text"
                            disabled={!isEditing}
                            onChange={handleFieldChange}
                          />
                          {fieldError.email && <small className="text-danger">Поля может содержать только email</small>}
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Имя
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formUserInfo.firstName}
                            name="firstName"
                            id="input-first-name"
                            placeholder="Имя"
                            type="text"
                            disabled={!isEditing}
                            onChange={handleFieldChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Фамилия
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formUserInfo.lastName}
                            name="lastName"
                            id="input-last-name"
                            placeholder="Фамилия"
                            type="text"
                            disabled={!isEditing}
                            onChange={(event) => {console.log('Тест фамилии', event.target.value)}}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Контактная информация
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Адрес
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formUserInfo.address}
                            name="address"
                            id="input-address"
                            placeholder="Адрес"
                            type="text"
                            disabled={!isEditing}
                            onChange={handleFieldChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Город
                          </label>
                          <Input
                            className={fieldError.city ? "is-valid": null}
                            value={formUserInfo.city}
                            name="city"
                            id="input-city"
                            placeholder="Город"
                            type="text"
                            disabled={!isEditing}
                            onChange={handleFieldChange}
                          />
                          {fieldError.city && <small className="text-danger">Поле может содержать только кириллические буквы</small>}
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Страна
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formUserInfo.country}
                            name="country"
                            id="input-country"
                            placeholder="Страна"
                            type="text"
                            disabled={!isEditing}
                            onChange={handleFieldChange}
                          />
                          {fieldError.country && <small className="text-danger">The field must contain only letters</small>}
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Индекс
                          </label>
                          <Input
                            className={fieldError.postCode ? "is-invalid": null}
                            value={formUserInfo.postCode}
                            name="postCode"
                            id="input-postal-code"
                            placeholder="Индекс"
                            type="text"
                            disabled={!isEditing}
                            onChange={handleFieldChange}
                          />
                          {fieldError.postCode && <small className="text-danger">Поле может содержать только цифры</small>}
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">Обо мне</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>Обо мне</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="Несколько слов о вас..."
                        rows="4"
                        value={formUserInfo.about}
                        name="about"
                        type="textarea"
                        disabled={!isEditing}
                        onChange={handleFieldChange}
                      />
                    </FormGroup>
                  </div>
                  { isEditing && <Button color="primary" type="submit">Сохранить</Button> }
                </Form>
                {!isEditing && <Button color="default" type="button" onClick={() => {setIsEditing(true)}}>
                  Редактировать
                </Button>}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
