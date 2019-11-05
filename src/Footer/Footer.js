import React from "react";

const footer = props => {
  let builtWith = props.builtWith.map(lang => {
    return (
      <span id={lang.key}>
        <img src={lang.image} alt={lang.name} />
        {lang.name}
      </span>
    );
  });

  return (
    <footer id="site__footer" className="show">
      <p id="built-with">
        <strong>Built with:</strong> {builtWith}
      </p>
      <p>&copy; Copyright {new Date().getFullYear()} Avi Schoenbrun</p>
    </footer>
  );
};

export default footer;
