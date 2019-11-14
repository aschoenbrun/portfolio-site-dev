import styled from "styled-components";

const globalColors = {
  blue: "rgb(15, 27, 35)",
  yellow: "rgb(255, 196, 0)",
  yellowLT: "rgb(255, 210, 61)",
  tan: "rgb(91, 88, 75)",
  tanLT: "rgb(151, 145, 126)",
  tanXLT: "rgb(236, 234, 223)",
  tanDK: "rgb(66, 65, 59)"
};

const PageMargin = styled.div`
  width: 95%;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    width: 960px;
  }
  @media screen and (min-width: 1350px) {
    width: 1150px;
  }
`;

const SectionTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 23px;
  padding: 0 0 5px;
  margin: 0 0 20px;
  color: color(blue);
  border-bottom: 1px solid globalColors.tanLT;
`;

const HeaderFooterText = styled.span`
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

export { globalColors, PageMargin, SectionTitle, HeaderFooterText };
