import React from "react";
import { Link } from "react-router-dom";
import { SectionIntro } from "../GlobalTheme/globalStyles";
import ResumeStyles from "./ResumeStyles";

const coverLetter = props => {
  return (
    <ResumeStyles id="cover-letter">
      <SectionIntro>
        <h2 className="page__title">
          <span>Enthusiastic for the</span>
          <span>efficient, current, effective & structured</span>
        </h2>
        <p>
          Since I was young, I&#39;ve always been enamored by function,
          structure &amp; design. From Legos to diagrams to my forays into
          Basic, form and function needed to work together in a streamlined way
          to achieve what I envisioned. Add to that my intrigue in getting
          systems to run efficiently - and I was having fun.
        </p>
        <p>
          Front-end development &amp; UI/UX design seemed to be a natural focus
          for my career.
        </p>
        <p>
          I&#39;ve continued pushing the envelope to learn new languages and
          hone those under my belt. I&#39;m sometimes taken by my desire to
          understand a language&#39;s rules deeply, as well as what makes them
          tick behind the scenes.
        </p>
        <p>
          Helping people is also a passion of mine. I have and continue to work
          closely with my employers &amp; clients - working to understand how
          they do business and what their goals are for the project. I handle
          projects as if they were for my own goals.
        </p>
        <p>
          It would be a privilege to have a discussion with you about how I can
          bring a structured, results-driven approach to the table. Let me know
          what time and venue works for you. Thank you for your time, &amp; I
          look forward to hearing from you.
        </p>
        <Link
          to="/resume"
          className="btn"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          View Resume
        </Link>
      </SectionIntro>
    </ResumeStyles>
  );
};

export default coverLetter;
