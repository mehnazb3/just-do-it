import React, { FC } from "react";
import { ContentColRightWrapper } from "./styles";
import AboutMe from "../../AboutMe";
import Qualification from "../../Qualification";
import WorkExperience from "../../WorkExperience";
import Technologies from "../../Technologies";
import Certifications from "../../Certifications";
import { Switch, Route } from "react-router-dom";

const ContentColRight: FC = () => {
  return (
    <ContentColRightWrapper>
      <Switch>
        <Route async path="/aboutme" component={AboutMe} />
        <Route async path="/qualification" component={Qualification} />
        <Route async path="/workexperience" component={WorkExperience} />
        <Route async path="/technologies" component={Technologies} />
        <Route async path="/certifications" component={Certifications} />
      </Switch>
    </ContentColRightWrapper>
  );
};

export default ContentColRight;
