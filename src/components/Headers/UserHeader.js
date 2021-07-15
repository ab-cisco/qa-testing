import React from "react";
import {useSelector} from 'react-redux';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import {selectUserInfo} from "../../redux/user/user.selectors";

const UserHeader = () => {

    const {firstName} = useSelector(selectUserInfo);

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/profile-cover.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">{`Здравствуй, ${firstName}!`}</h1>
              <p className="text-white mt-0 mb-5">
                  Это страница вашего профиля. Здесь вы можете просматривать
                  и редактировать информацию о себе.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
