import React, { FC } from "react";
import { AboutMeWrapper, Sutitle, Title, Content } from "./styles";

import ActionButton from "../shared/ActionButton";

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
      <ActionButton linkPath={"/qualification"} />
    </AboutMeWrapper>
  );
};

export default AboutMe;
