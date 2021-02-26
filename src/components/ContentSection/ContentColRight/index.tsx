import React, { FC } from "react";
import { ContentColRightWrapper } from "./styles";
import AboutMe from "../../AboutMe";
import Qualification from "../../Qualification";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const ContentColRight: FC = () => {
  return (
    <ContentColRightWrapper>
      <AboutMe />
      <Qualification />
    </ContentColRightWrapper>
  );
};

export default ContentColRight;
