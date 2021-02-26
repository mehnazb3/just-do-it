// import React from 'react';
import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  color: black;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Sutitle = styled.p`
  font-size: 20px;
  color: #09d3ac;
  font-weight: 500;
  font-variant-caps: all-small-caps;
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 25px;
`;

export const Content = styled.p``;

export const MailLink = styled.a`
  color: white;
  padding-left: 10px;
  &:hover {
    pointer-events: none;
  }
`;

export const ButtonsWrapper = styled.p`
  display: inline-block;
`;
