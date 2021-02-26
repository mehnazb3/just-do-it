import React, { FC } from "react";
import { HeaderWrapper, HeaderCol, AppTitle, Col } from "./styles";

const TopNavigation: FC = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderCol>
          <AppTitle>Mehnaz&apos;s Portfolio</AppTitle>
        </HeaderCol>
        <HeaderCol>
          <Col>
            <a href="#aboutme">About Me</a>
          </Col>
          <Col>
            <a href="#qualification">Qualification</a>
          </Col>
          <Col>
            <a href="#workexperience">Work Experience</a>
          </Col>
          <Col>
            <a href="#technologies">Technologies</a>
          </Col>
          <Col>
            <a href="#certifications">Certifications</a>
          </Col>
        </HeaderCol>
      </HeaderWrapper>
    </>
  );
};

export default TopNavigation;
