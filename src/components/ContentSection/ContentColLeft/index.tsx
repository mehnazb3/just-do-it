import React, { FC } from "react";
import { ContentColLeftWrapper, ProfileWrapper, InfoWrapper } from "./styles";
import avatarIcon from "../../../assets/images/avatar.png";

const ContentColLeft: FC = () => {
  return (
    <ContentColLeftWrapper>
      <InfoWrapper>
        <span></span>
      </InfoWrapper>
      <ProfileWrapper src={avatarIcon} />
    </ContentColLeftWrapper>
  );
};

export default ContentColLeft;
