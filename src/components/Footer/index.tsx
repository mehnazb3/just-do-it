import React, { FC } from "react";
import { FooterWrapper } from "./styles";
// import {
//   FacebookOutlined,
//   TwitterOutlined,
//   LinkedinOutlined,
//   InstagramOutlined,
//   GithubOutlined,
// } from "@ant-design/icons";

const Footer: FC = () => {
  return (
    <FooterWrapper>
      {/* <IconsWapper>
        <div>
          <FacebookOutlined />
        </div>
        <div>
          <TwitterOutlined />
        </div>
        <div>
          <GithubOutlined />
        </div>
        <div>
          <LinkedinOutlined />
        </div>
        <div>
          <InstagramOutlined />
        </div>
      </IconsWapper> */}
      <div>Copyright Mehnaz</div>
    </FooterWrapper>
  );
};

export default Footer;
