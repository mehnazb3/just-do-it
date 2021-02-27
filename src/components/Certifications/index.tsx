import React, { FC } from "react";
import { List } from "antd";
import {
  CertificationsWrapper,
  CertificationWrapper,
  Logo,
  ListItems,
} from "./styles";
import awsSrc from "../../assets/logos/aws.png";
import rubySrc from "../../assets/logos/ruby.png";
import javascriptSrc from "../../assets/logos/javascript.png";
import rspecSrc from "../../assets/logos/rspec_logo.png";
import ActionButton from "../shared/ActionButton";

const Certifications: FC = () => {
  const certifications = [
    {
      name: "AWS Certified Solution Architect - Associate",
      logo: awsSrc,
    },
    {
      name: "Ruby on Rails 5 Essential Training from Lynda",
      logo: rubySrc,
    },
    {
      name: "JavaScript and AJAX certification from Lynda",
      logo: javascriptSrc,
    },
    {
      name: "Ruby testing with RSPEC",
      logo: rspecSrc,
    },
  ];

  const DisplayCertificationSection = (
    collection: Array<{ name: string; logo: string }>
  ) => {
    return (
      <List
        itemLayout="horizontal"
        dataSource={collection}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Logo src={item.logo} />}
              title={item.name}
            />
          </List.Item>
        )}
      />
    );
  };

  return (
    <CertificationsWrapper>
      <CertificationWrapper>
        <ListItems>{DisplayCertificationSection(certifications)}</ListItems>
      </CertificationWrapper>
      <ActionButton linkPath={"/"} />
    </CertificationsWrapper>
  );
};

export default Certifications;
