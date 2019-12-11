import React from "react";
import gitHubMark from "../../images/GitHub-Mark-120px-plus.png";
import styled from "styled-components/macro";

const RepoLinkStyles = styled.div`
  text-align: center;
  @media screen and (max-width: 550px) {
    .btn.repo-link {
      text-align: left;
      line-height: 1.25em;
      img {
        height: 30px;
      }
    }
  }
`;

const RepoLink = props => {
  const githubButtonText = props.appBuilt
    ? `View code for this ${props.appBuilt} on GitHub`
    : "View code on GitHub";

  return (
    <RepoLinkStyles>
      <a
        className="btn btn-img repo-link"
        href={props.repo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gitHubMark} alt={githubButtonText} /> {githubButtonText}
      </a>
    </RepoLinkStyles>
  );
};

export default RepoLink;
