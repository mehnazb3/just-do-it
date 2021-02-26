import React, { FC } from "react";
import { ContentWrapper } from "./styles";
import ContentColLeft from "./ContentColLeft";
import ContentColRight from "./ContentColRight";

const ContentSection: FC = () => {
  return (
    <ContentWrapper>
      <ContentColLeft />
      <ContentColRight />
    </ContentWrapper>
  );
};
export default ContentSection;
