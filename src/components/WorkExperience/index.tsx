import React, { FC } from "react";
import { WorkExperienceWrapper, Subtitle } from "./styles";
import ActionButton from "../shared/ActionButton";
import { Collapse } from "antd";

const { Panel } = Collapse;

const WorkExperience: FC = () => {
  return (
    <WorkExperienceWrapper>
      <Collapse defaultActiveKey={["1"]} ghost accordion>
        <Panel header="Software Engineer in Medwing Gmbh (May 2020)" key="1">
          <p>
            <Subtitle>
              <b>Medwing Gmbh</b>
            </Subtitle>
            . I am currently working here as a Full Stack Developer, At medwing,
            I&apos;ve worked on multiple projects simultaneluly having different
            stacks of Technologies and skilled myself in Golang, Typescript,
            GraphQl and event driven architecture. Medwing Gmbh is really cool
            startup, you will get to explore and learn a lot from brillants
            people working here. Here I got an oppurtunity to build various
            projects from stratch.
          </p>
        </Panel>
        <Panel
          header="Software Engineer in Medwing Gmbh (March 2019 to September 2019)"
          key="2"
        >
          <p>
            <Subtitle>
              <b>Medwing Gmbh</b>
            </Subtitle>
            . I worked here as a Full Stack Developer for 6 months, I&apos;ve
            primarily worked on leasing applications which are built using Ruby
            on Rails and ReactJS. I&apos;ve learnt Elastic Search and helped the
            team to reduce application loading time from 30s to few milli
            seconds.
          </p>
        </Panel>
        <Panel
          header="IT Analyst in TCS (August 2014 to Feburary 2019)"
          key="3"
        >
          <p>
            <Subtitle>
              <b>Tata Consultancy Services</b>
            </Subtitle>
            . I worked here as a Full Stack Developer for almost 5 years,
            I&apos;ve primarily worked on Tata internal applications which are
            built using Ruby on Rails and CoffeeScript. TCS helped me a lot to
            kick start my career and provided various learning oppurtunities. I
            got to manage a team of 12 members. I got to interact with clients
            from getting requirement to delivering demo.
          </p>
        </Panel>
      </Collapse>
      <br />
      <ActionButton linkPath={"/technologies"} />
    </WorkExperienceWrapper>
  );
};

export default WorkExperience;
