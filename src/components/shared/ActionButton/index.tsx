import React, { FC } from "react";
import { ButtonsWrapper, MailLink } from "./styles";
import { MailOutlined } from "@ant-design/icons";
import { Props } from "./types";
import { Button } from "antd";
import "antd/dist/antd.css";

const ActionButton: FC<Props> = ({ linkPath }) => {
  return (
    <ButtonsWrapper>
      <Button
        type="primary"
        href="mailto:mehnazb3@gmail.com"
        icon={<MailOutlined />}
      >
        <MailLink>Get in Touch</MailLink>
      </Button>
      {linkPath !== "/" && (
        <Button href={linkPath} style={{ marginLeft: "80px" }}>
          <MailLink>Continue and Next</MailLink>
        </Button>
      )}
    </ButtonsWrapper>
  );
};

export default ActionButton;
