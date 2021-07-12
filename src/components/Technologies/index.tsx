import React, { FC } from "react";
import {
  TechnologiesWrapper,
  TechnologyWrapper,
  Title,
  ListItems,
  SubTitle,
} from "./styles";
import rubySrc from "../../assets/logos/ruby.png";
import goSrc from "../../assets/logos/gopher.png";
import reactSrc from "../../assets/logos/react_logo.png";
import htmlSrc from "../../assets/logos/html_logo.png";
import cssSrc from "../../assets/logos/css_logo.png";
import javascriptSrc from "../../assets/logos/javascript.png";
import postgresqlSrc from "../../assets/logos/postgresql_logo.png";
import mysqlSrc from "../../assets/logos/mysql_logo.png";
import macosSrc from "../../assets/logos/macos.jpg";
import linuxSrc from "../../assets/logos/linux_logo.jpg";
import windowsSrc from "../../assets/logos/windows_logo.png";
import awsSrc from "../../assets/logos/aws.png";
import redisSrc from "../../assets/logos/redis_logo.png";
import solrSrc from "../../assets/logos/solr_logo.png";
import esSrc from "../../assets/logos/es_search_logo.png";
import gitSrc from "../../assets/logos/github_logo.jpg";
import sublSrc from "../../assets/logos/sublime_logo.png";
import vsSrc from "../../assets/logos/vscode_logo.jpeg";
import graphQlSrc from "../../assets/logos/GraphQl.png";
import ActionButton from "../shared/ActionButton";

import { Row, Col } from "antd";

const Technologies: FC = () => {
  const web_technologies = [
    {
      name: "Ruby on Rails",
      logo: rubySrc,
    },
    {
      name: "Golang",
      logo: goSrc,
    },
    {
      name: "ReactJS",
      logo: reactSrc,
    },
    {
      name: "HTML",
      logo: htmlSrc,
    },
    {
      name: "CSS",
      logo: cssSrc,
    },
    {
      name: "JavaScript",
      logo: javascriptSrc,
    },
  ];
  const db_technologies = [
    {
      name: "Postgres",
      logo: postgresqlSrc,
    },
    {
      name: "MySql",
      logo: mysqlSrc,
    },
  ];

  const OS_preferences = [
    {
      name: "MacOS",
      logo: macosSrc,
    },
    {
      name: "Linux(Ubuntu)",
      logo: linuxSrc,
    },
    {
      name: "Windows",
      logo: windowsSrc,
    },
  ];

  const tools_and_servers = [
    {
      name: "AWS",
      logo: awsSrc,
    },
    {
      name: "Redis",
      logo: redisSrc,
    },
    {
      name: "Solr",
      logo: solrSrc,
    },
    {
      name: "Elastic Search",
      logo: esSrc,
    },
    {
      name: "Github",
      logo: gitSrc,
    },
    {
      name: "Sublime",
      logo: sublSrc,
    },
    {
      name: "VS Code",
      logo: vsSrc,
    },
    {
      name: "GraphQl",
      logo: graphQlSrc,
    },
  ];
  const DisplaySkillsSection = (
    collection: Array<{ name: string; logo: string }>
  ) => {
    return (
      <Row gutter={[25, 25]}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {collection.map((technology: any) => {
          return (
            <Col span={4} key={technology.name}>
              <div>
                <img
                  src={technology.logo}
                  alt="tech"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <SubTitle>{technology.name}</SubTitle>
              </div>
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <TechnologiesWrapper>
      <TechnologyWrapper>
        <Title>Web Technologies</Title>
        <ListItems>{DisplaySkillsSection(web_technologies)}</ListItems>
      </TechnologyWrapper>
      <TechnologyWrapper>
        <Title>Tools and Services</Title>
        <ListItems>{DisplaySkillsSection(tools_and_servers)}</ListItems>
      </TechnologyWrapper>
      <TechnologyWrapper>
        <Title>DB Technologies and OS preferences</Title>
        <ListItems>
          {DisplaySkillsSection([...db_technologies, ...OS_preferences])}
        </ListItems>
      </TechnologyWrapper>
      <ActionButton linkPath={"/certifications"} />
    </TechnologiesWrapper>
  );
};

export default Technologies;
