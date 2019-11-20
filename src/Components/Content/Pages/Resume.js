import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { PageTitle } from "../../GlobalTheme/globalStyles";
import {
  SectionTitle,
  SectionSubTitle,
  SectionSubTitleDesc,
  SectionTitleDivider
} from "../SectionTitles";
import SectionIntro from "../SectionIntro";
import { TitleList, List, ListH } from "../ContentLists";

const PageMeta = () => {
  return (
    <Helmet>
      <title>Resume - Avi Schoenbrun</title>
      <link rel="canonical" href="https://aysportfolio/resume/" />
    </Helmet>
  );
};

// TODO: List structure
// li
// ListH &
// ListV &

export default class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Resume",
      skillSets: [
        {
          title: "Languages and Frameworks",
          skills: [
            "Javascript",
            "jQuery",
            "React",
            "HTML5",
            "CSS3",
            "SASS",
            "PHP",
            "Bootstrap",
            "Wordpress",
            "WooCommerce",
            "Shopify"
          ]
        },
        {
          title: "Utilities and Software",
          skills: [
            "NPM",
            "Webpack",
            "Git",
            "Visual Studio Code",
            "Atom",
            "Asana",
            "Trello",
            "Photoshop",
            "Dreamweaver",
            "Notepad++",
            "Illustrator",
            "InDesign"
          ]
        },
        {
          title: "Techniques and Conventions",
          skills: [
            "Wireframing",
            "Mockups",
            "Color theory",
            "SEO",
            "Responsive design",
            "Web security"
          ]
        }
      ],
      experience: [
        {
          title: "Founder, Developer and Designer",
          org: "Effective Media, LLC",
          location: "Lakewood, NJ",
          dates: "Feb 2016 - PRESENT",
          experienceList: [
            "Structured a custom branded interface to be conducive to a streamlined user workflow while also increasing efficiency.",
            "Designed and developed clean, easy to use websites featuring compelling, professional design, dynamic functionality and structure effective in correctly guiding the user."
          ]
        },
        {
          title: "Director of Marketing and Promotions",
          org: "EverDixie EMS Supplies",
          location: "Brooklyn, NY",
          dates: "Dec 2011 - Aug 2015",
          experienceList: [
            "Created and modernized branding for subsidiaries and existing brands for optimal relatability.",
            "Implemented live chat to an e-commerce website I designed and built resulting in greatly optimized customer service",
            "Organized the home page of an e-commerce website from a jumbled mess to a layout that effectively showcased multiple banners and showcases."
          ]
        },
        {
          title: "Director of Marketing and Promotions",
          org: "Dealmed, Inc",
          location: "Lakewood, NJ",
          dates: "Jan 2009 - Jan 2011",
          experienceList: [
            "Designed and built a blog.",
            "Designed and coded custom HTML email blasts."
          ]
        }
      ],
      education: [
        {
          school: "New York Interactive Media Training",
          skills: ["HTML", "CSS"]
        },
        {
          school: "Udemy",
          skills: [
            "React JS",
            "React Router",
            "Javacript",
            "jQuery",
            "Styled Components",
            "CSS Modules",
            "Bootstrap",
            "HTML5",
            "CSS3"
          ]
        }
      ],
      references: [
        {
          name: "Daniel Soloff",
          contactInfo: [
            {
              type: "phone",
              info: "(732) 905-9700 x 604"
            }
          ]
        },
        {
          name: "Eli Davidson",
          contactInfo: [
            {
              type: "email",
              info: "mail@e-davidson.com"
            }
          ]
        },
        {
          name: "Avi Rosenthal",
          contactInfo: [
            {
              type: "phone",
              info: "(732) 228-8888 x 201"
            }
          ]
        },
        {
          name: "Mimi Frankel",
          contactInfo: [
            {
              type: "phone",
              info: "(732) 298-3746"
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div id="resume">
        <PageMeta />
        <PageTitle>Resume</PageTitle>
        <section id="summary">
          <SectionTitle>Summary</SectionTitle>
          <SectionIntro>
            <p>
              Creative, technically-minded, solutions-driven front end developer
              / UI/UX Designer utilizing his problem-solving skills, affinity
              for effective structure &amp; good design eye to build compelling
              web applications.
            </p>
            <a
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1RcEHj7oHl_9yUOZhE8S-hUuQ7UBLd9tG/view?usp=sharing"
            >
              Download Resume
            </a>
          </SectionIntro>
        </section>
        <section id="skills" className="resume__section page__section">
          <SectionTitle>Skills</SectionTitle>
          <TitleList>
            <SkillSets skills={this.state.skillSets} />
          </TitleList>
        </section>
        <section id="experience" className="resume__section page__section">
          <SectionTitle>Experience</SectionTitle>
          <TitleList>
            <ExpSets expList={this.state.experience} />
          </TitleList>
        </section>
        <section id="education" className="resume__section page__section">
          <SectionTitle>Education</SectionTitle>
          <TitleList>
            <EduSets eduList={this.state.education} />
          </TitleList>
        </section>
        <section id="references" className="resume__section page__section">
          <SectionTitle>References</SectionTitle>
          <TitleList>
            <RefSets refList={this.state.references} />
          </TitleList>
        </section>
      </div>
    );
  }
}

const SkillSets = props => {
  const skillSetsList = props.skills.map(skill => {
    return (
      <li key={skill.title}>
        <SectionSubTitle>{skill.title}</SectionSubTitle>
        <ListH>
          <SkillListSets skillList={skill.skills} />
        </ListH>
      </li>
    );
  });
  return skillSetsList;
};

const SkillListSets = props => {
  const skillLists = props.skillList.map(skill => {
    return <li key={skill}>{skill}</li>;
  });
  return skillLists;
};

const ExpSets = props => {
  const expSetList = props.expList.map(exp => {
    let expMainKey = exp.title + " " + exp.org;
    return (
      <li key={expMainKey}>
        <SectionSubTitle>{exp.title}</SectionSubTitle>
        <SectionSubTitleDesc>
          <span>{exp.org}</span>
          <SectionTitleDivider />
          <span>{exp.location}</span>
          <SectionTitleDivider />
          <span>{exp.dates}</span>
        </SectionSubTitleDesc>
        <List>
          <ExpListSets expList={exp.experienceList} />
        </List>
      </li>
    );
  });
  return expSetList;
};

const ExpListSets = props => {
  const expLists = props.expList.map(exp => {
    return <li key={exp}>{exp}</li>;
  });
  return expLists;
};

const EduSets = props => {
  const eduSetsList = props.eduList.map(edu => {
    return (
      <li key={edu.school}>
        <SectionSubTitle>{edu.school}</SectionSubTitle>
        <ListH>
          <EduListSets eduList={edu.skills} />
        </ListH>
      </li>
    );
  });
  return eduSetsList;
};

const EduListSets = props => {
  const eduLists = props.eduList.map(skill => {
    return <li key={skill}>{skill}</li>;
  });
  return eduLists;
};

const RefSets = props => {
  const eduSetsList = props.refList.map(ref => {
    return (
      <li key={ref.name}>
        <SectionSubTitle>{ref.name}</SectionSubTitle>
        <ListH>
          <RefListSets refList={ref.contactInfo} />
        </ListH>
      </li>
    );
  });
  return eduSetsList;
};

const RefListSets = props => {
  const refLists = props.refList.map(info => {
    if (info.type === "email") {
      return (
        <li key={info.info}>
          <a href={`mailto:${info.info}`}>{info.info}</a>
        </li>
      );
    }
    return <li key={info.info}>{info.info}</li>;
  });
  return refLists;
};

// TODO: REFACTOR LIST RENDERING LOGIC:
/*
const ListSets = props => {
  const lvl1Lists = props.topList.map(topElem => {
    return (
      <li key={topLElem.key}>
        <SectionSubTitle>{topElem.title}</SectionSubTitle>
        <ListH>
          <SubListSets subList={topElem.subList} />
        </ListH>
      </li>
    );
  });
  return lvl1Lists;
};

const SubListSets = props => {
  const subLists = props.subList.map(subElem => {
    if (subElem.type === "email") {
      return (
        <li key={subElem.info}>
          <a href={`mailto:${info.info}`}>{info.info}</a>
        </li>
      );
      return <li key={info.info}>{info.info}</li>;
    }
  })
  return subLists
}
*/
