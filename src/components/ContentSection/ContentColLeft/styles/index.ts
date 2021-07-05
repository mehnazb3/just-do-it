import styled from "styled-components";

export const ContentColLeftWrapper = styled.div`
  width: 30%;
  height: auto;
  background-color: #283747;
  z-index: 1;
  display: flex;
`;

export const ProfileWrapper = styled.img`
  margin-left: 60%;
  margin-top: 60%;
  // top: 60%;
  width: 80%;
  border-radius: 50%;
  filter: grayscale(60%);
`;

export const InfoLink = styled.div`
  padding: 5px;
  margin-top: 10px;
  &:hover {
    transform: scale(1.3);
  }
`;

export const ProfileInfo = styled.div`
  margin-left: 60%;
  margin-top: -30%;
  width: 80%;
  // border-radius: 50%;
  // transition: 0.5s ease;
  opacity: 0;
  // top: 60%;
  position: absolute;
  color: #f3f3f3;
  font-weight: 500;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  &:hover {
    .avatar {
      filter: grayscale(100%);
      transform: scale(1.01);
      transition: 0.8s ease;
      opacity: 0.8;
    }
    .avatar-info {
      transition: 0.8s ease;
      opacity: 1;
      // background: rgba(0, 0, 0, 0.5);
    }
  }
`;
