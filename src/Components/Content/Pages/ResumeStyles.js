import styled from "styled-components";
import { globalColors } from "../../GlobalTheme/globalStyles";
const standardLiMargin = "7px";
const ResumeStyles = styled.section`
  #employment-summary {
    li {
      margin: 0 0 15px;
    }
    h4 {
      font-size: 20px;
      margin: 0;
    }
    p {
      font-size: 13px;
      margin: 0;
      color: ${globalColors.tan};
    }
  }
  #professional-experience,
  #education,
  #references {
    h4 {
      font-size: 20px;
      margin: 0;
      color: ${globalColors.blue};
    }
    .position__meta {
      font-size: 13px;
      margin: 0 0 15px;
      color: ${globalColors.tan};
    }
    .title-list {
      padding: 0;
      margin: 0 0 40px;
      & > li {
        list-style: none;
      }
      & .title-list {
        margin-bottom: 15px;
        li {
          line-height: 1.5em;
          margin-bottom: ${standardLiMargin};
        }
        @media screen and (min-width: 760px) {
          margin-left: 20px;
        }
      }
      & ul {
        list-style-type: square;
      }
      .ref-contact-info {
        margin: 5px 0 15px;
        color: ${globalColors.tan};
      }
      &.has-nested-ul li {
        margin-bottom: 30px;
        ul {
          margin-bottom: 15px;
          li {
            margin-bottom: ${standardLiMargin};
          }
        }
      }
    }
    h5 {
      font-size: 14px;
      font-style: italic;
      font-weight: 300;
      text-transform: uppercase;
      margin: 0 0 3px;
      color: ${globalColors.tan};
      strong {
        font-style: normal;
        color: ${globalColors.blue};
      }
    }
  }
  #education {
    li {
      margin-bottom: ${standardLiMargin};
    }
  }
`;

export default ResumeStyles;
