import React from "react";
import gitHubMark from "../images/GitHub-Mark-120px-plus.png";

const footer = props => {
  let builtWith = props.builtWith.map(lang => {
    return (
      <span id={lang.key}>
        <img src={lang.image} alt={lang.name} />
        {lang.name}
      </span>
    );
  });

  const githubButtonText = "View code on GitHub";

  return (
    <footer id="site__footer">
      <div id="footer__top">
        <p id="built-with">
          <strong>Built with:</strong> {builtWith}
        </p>
        <a className="btn" href={props.repo} target="_blank">
          <img src={gitHubMark} alt={githubButtonText} /> {githubButtonText}
        </a>
      </div>
      <div id="footer__bottom">
        <p>&copy; Copyright {new Date().getFullYear()} Avi Schoenbrun</p>
      </div>
    </footer>
  );
};

export default footer;
