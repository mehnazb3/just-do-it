import React, { FC } from "react";
import { QualificationWrapper } from "./styles";
import ActionButton from "../shared/ActionButton";

const Qualification: FC = () => {
  return (
    <QualificationWrapper>
      <p>
        I&apos;ve successfully completed Bachelor of Technology – Information
        Technology from G. B. Pant University of Agriculture and
        Technology(2010-14).
      </p>
      <ActionButton linkPath={"/workexperience"} />
    </QualificationWrapper>
  );
};

export default Qualification;
