import styled from "styled-components";

export const HeaderWrapper = styled.div`
   font-variant: all-small-caps;
   height: 80px;
   background-color: white;
   display: flex;
    flex-direction: row; /* make main axis horizontal (default value) */
    justify-content: space-between;
    align-items: center;
`;

export const Col = styled.div`
   padding: 10px;
   font-size: 16px;
   font-weight: 500;
   padding: 0 20px;
   & > a {
    text-decoration: none;
    color: black;
   }
`;

export const HeaderCol = styled.div`
    display: inline-flex;
    align-items: center;
`;

export const AppTitle = styled.h2`
  padding: 10px;
  margin-left: 20px;
`;