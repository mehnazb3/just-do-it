import React, { FC } from "react";
import {
  ContentColLeftWrapper,
  ProfileWrapper,
  InfoLink,
  ProfileInfo,
  AvatarWrapper,
} from "./styles";
import avatarIcon from "../../../assets/images/avatar.png";
import {
  FacebookFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  InstagramFilled,
  GithubFilled,
} from "@ant-design/icons";

const ContentColLeft: FC = () => {
  return (
    <ContentColLeftWrapper>
      {/* <InfoWrapper><span>YET TO ADD</span></InfoWrapper> */}
      <div
        style={{
          width: "200px",
          height: "100%",
          marginLeft: "40px",
          top: "35%",
          position: "relative",
        }}
      >
        <InfoLink>
          <a href="https://www.facebook.com/mehnaz.bano/">
            <FacebookFilled style={{ color: "#F3F3F3", fontSize: "30px" }} />
          </a>
        </InfoLink>
        <InfoLink>
          <a href="https://twitter.com/mehnaz_bano">
            <TwitterCircleFilled
              style={{ color: "#F3F3F3", fontSize: "30px" }}
            />
          </a>
        </InfoLink>
        <InfoLink>
          <a href="https://www.linkedin.com/in/mehnaz-bano-45962b30/">
            <LinkedinFilled style={{ color: "#F3F3F3", fontSize: "30px" }} />
          </a>
        </InfoLink>
        <InfoLink>
          <a href="https://www.instagram.com/_she.goes.solo/?hl=en">
            <InstagramFilled style={{ color: "#F3F3F3", fontSize: "30px" }} />
          </a>
        </InfoLink>
        <InfoLink>
          <a href="https://github.com/mehnazb3">
            <GithubFilled style={{ color: "#F3F3F3", fontSize: "30px" }} />
          </a>
        </InfoLink>
      </div>
      <AvatarWrapper>
        <ProfileWrapper className="avatar" src={avatarIcon} />
        <ProfileInfo className="avatar-info">mehnazb3@gmail.com</ProfileInfo>
      </AvatarWrapper>
    </ContentColLeftWrapper>
  );
};

export default ContentColLeft;
