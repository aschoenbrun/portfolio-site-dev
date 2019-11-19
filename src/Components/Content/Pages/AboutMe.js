import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { PageTitle } from "../../GlobalTheme/globalStyles";
import { List } from "../ContentLists";
import SectionIntro from "../SectionIntro";

const PageMeta = () => {
  return (
    <Helmet>
      <title>Cover Letter - Avi Schoenbrun</title>
      <link rel="canonical" href="https://aysportfolio/" />
    </Helmet>
  );
};

export default class CoverLetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "About Me"
    };
  }
  render() {
    return (
      <div id="cover-letter">
        <PageMeta />
        <PageTitle>{this.state.pageTitle}</PageTitle>
        <SectionIntro>
          <p>
            I am a creative <strong>Front-End Developer</strong> and{" "}
            <strong>UI/UX Designer</strong> with 6 years experience in designing
            and building web applications. I would love to bring my expertise
            and enthusiasm to your organization.
          </p>
        </SectionIntro>
        <p>
          I am passionate about blending smart structure with compelling, clean
          design to increase user engagement. I provide value add to employers
          and clients by understanding business processes and implement
          efficient systems to drive end user retention and conversion.
        </p>
        <List>
          <li>
            As a developer I focused on elegant solutions to site design,
            structure and functional execution utilizing modern technologies.
          </li>
          <li>
            As a designer, I created an application’s theme and structure
            focusing on conveying messaging while presenting elements and
            options clearly. Having significant experience in UI/UX design and
            related fields, I worked with employers and clients to apply smart
            design techniques to their unique vision.
          </li>
        </List>
        <p>
          If you have any further questions or require additional information,
          please feel free to reach me at (732) 372-5102 or via email at{" "}
          <a href="mailto:aviy.sch@gmail.com">aviy.sch@gmail.com</a>.
        </p>
        <p>
          Thank you for your consideration. I look forward to meeting with you
          and discussing how I can make a strong contribution to your company.
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
      </div>
    );
  }
}
