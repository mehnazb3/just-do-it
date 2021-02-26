import React, { FC } from "react";
import {
  AboutMeWrapper,
  Sutitle,
  Title,
  Content,
  ButtonsWrapper,
  MailLink,
} from "./styles";
import { Button } from "antd";
import "antd/dist/antd.css";
import { MailOutlined } from "@ant-design/icons";

const AboutMe: FC = () => {
  return (
    <AboutMeWrapper>
      <Sutitle>Full Stack Developer</Sutitle>
      <Title>Mehnaz</Title>
      <Title>Bano</Title>
      <Content>
        I love coding and ginger tea. I&apos;ve been working as a Full Stack
        Developer for almost 6 years in multiple projects and with different
        clients. I am very passionate about my work. I&apos;m interested in
        Badminton, Photography and Watercolour painting.
      </Content>
      <ButtonsWrapper>
        <Button
          type="primary"
          href="mailto:mehnazb3@gmail.com"
          icon={<MailOutlined />}
        >
          <MailLink>Get in Touch</MailLink>
        </Button>
        <Button href="/qualification" style={{ float: "right" }}>
          Continue and Next
        </Button>
      </ButtonsWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMe;
