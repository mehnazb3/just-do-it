import styled from "styled-components";

export const ButtonsWrapper = styled.p`
  display: inline-block;
`;

export const MailLink = styled.a`
  color: white;
  padding-left: 10px;
  &:span {
    margin-right: 5px;
  }
  &:hover {
    cursor: pointer;
  }
  .anticon-mail {
    color: white;
  }
`;
