import React, { FC } from "react";
import { ContentColLeftWrapper, ProfileWrapper } from "./styles";
import avatarIcon from "../../../assets/images/avatar.png";

const ContentColLeft: FC = () => {
  return (
    <ContentColLeftWrapper>
      <ProfileWrapper src={avatarIcon} />
    </ContentColLeftWrapper>
  );
};

export default ContentColLeft;
