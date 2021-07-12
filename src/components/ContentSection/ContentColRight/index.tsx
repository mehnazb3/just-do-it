import React, { FC } from "react";
import { ContentColRightWrapper, Section } from "./styles";
import AboutMe from "../../AboutMe";
import Qualification from "../../Qualification";
import WorkExperience from "../../WorkExperience";
import Technologies from "../../Technologies";
import Certifications from "../../Certifications";
import { Switch, Route } from "react-router-dom";

const ContentColRight: FC = () => {
  return (
    <ContentColRightWrapper>
      <Section>
        <Switch>
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/qualification" component={Qualification} />
          <Route path="/workexperience" component={WorkExperience} />
          <Route path="/technologies" component={Technologies} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/" component={AboutMe} />
        </Switch>
      </Section>
    </ContentColRightWrapper>
  );
};

export default ContentColRight;
