import React from "react";
import styled from "styled-components";
import { globalColors, HeaderFooterText } from "./globalStyles";
import { kebabCase } from "../globalJS";
import gitHubMark from "../../images/GitHub-Mark-120px-plus.png";

const FooterStyles = styled.footer`
  margin-top: 75px;
  text-align: center;
  #footer__top {
    background-color: ${globalColors.tanDK};
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    position: relative;
    z-index: 1000;
    padding: 20px 20px 25px;
    .btn {
      margin-top: -20px;
      @media screen and (min-width: 760px) {
        margin-top: 0px;
      }
    }
  }
  #footer__bottom {
    background-color: ${globalColors.blue};
    padding: 20px;
    p {
      margin: 0;
    }
  }
  h3 {
    display: block;
    width: 100%;
    font-size: 17px;
    margin: 0;
    padding-right: 0;
    color: ${globalColors.tanLT};
  }
  #built-with {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 7px 0 15px;
    ul,
    li {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      list-style-type: none;
      color: ${globalColors.tanLT};
    }
    ul {
      justify-content: center;
      padding-left: 0;
    }
    img {
      height: 20px;
      width: auto;
      margin-right: 5px;
    }
  }
`;

const footer = props => {
  let builtWith = props.builtWith.map(lang => {
    const langID = kebabCase(lang.name);
    return (
      <HeaderFooterText as="li" key={langID} id={langID}>
        <img src={lang.image} alt={lang.name} />
        {lang.name}
      </HeaderFooterText>
    );
  });

  const githubButtonText = "View code on GitHub";

  return (
    <FooterStyles id="site__footer">
      <div id="footer__top">
        <p id="built-with">
          <HeaderFooterText as="h3">Built with</HeaderFooterText>
          <ul>{builtWith}</ul>
        </p>
        <a
          className="btn btn-img"
          href={props.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubMark} alt={githubButtonText} /> {githubButtonText}
        </a>
      </div>
      <div id="footer__bottom">
        <HeaderFooterText as="p">
          &copy; Copyright {new Date().getFullYear()} Avi Schoenbrun
        </HeaderFooterText>
      </div>
    </FooterStyles>
  );
};

export default footer;
