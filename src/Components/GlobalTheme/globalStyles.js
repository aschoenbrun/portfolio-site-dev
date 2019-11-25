import styled from "styled-components";

export const globalColors = {
  blue: "rgb(0, 31, 43)",
  yellow: "rgb(255, 196, 0)",
  yellowLT: "rgb(255, 210, 61)",
  tan: "rgb(91, 88, 75)",
  tanLT: "rgb(151, 145, 126)",
  tanXLT: "rgb(236, 234, 223)",
  tanDK: "rgb(66, 65, 59)"
};

export const PageMargin = styled.div`
  width: 95%;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    width: 960px;
  }
  @media screen and (min-width: 1350px) {
    width: 1150px;
  }
`;

export const PageTitle = styled.h1`
  color: ${globalColors.blue};
  margin: 0 0 40px;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  &:after {
    content: "";
    display: block;
    margin: 40px auto 0;
    width: 150px;
    border-bottom: 1px solid ${globalColors.tanLT};
  }
  span {
    display: block;
  }
`;

export const HeaderFooterText = styled.span`
  text-transform: uppercase;
  font-size: 11px;
  line-height: 1em;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 5px 10px 5px;
  &:last-child {
    margin-right: 0;
  }
  @media screen and (min-width: 760px) {
    margin: 0 10px 0 0;
    padding-right: 10px;
    border-right: 1px solid ${globalColors.blue};
    &:last-child {
      margin-right: 0;
      padding-right: 0;
      border-right: none;
    }
  }
`;

export const Display = styled.div`
  border: 1px solid ${globalColors.tanLT};
  padding: 10px;
  width: 100%;
`;
