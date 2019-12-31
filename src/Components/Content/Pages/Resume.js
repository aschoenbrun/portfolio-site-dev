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
import styled from "styled-components/macro";
const contentful = require("contentful");

const client = contentful.createClient({
  space: "juya7hxyd5x0",
  environment: "master",
  accessToken: "0zlV_-AWBsMoopE2XY2faO7_OnLoU_KLXEHV03ywvlM"
});

const PageMeta = () => {
  return (
    <Helmet>
      <title>Resume - Avi Schoenbrun</title>
      <link rel="canonical" href="https://aysportfolio/resume/" />
    </Helmet>
  );
};

const ResumeStyles = styled.div`
  #references > ul {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      margin-right: 25px;
      ul {
        margin: 0 0 10px;
      }
    }
  }
`;

export default class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Resume",
      skillSets: [],
      experience: [],
      education: [],
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
          name: "Eli Golding",
          contactInfo: [
            {
              type: "email",
              info: "eligolding@gmail.com"
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

  componentDidMount() {
    client
      .getEntries()
      .then(res => {
        const skillSetsArr = res.items.filter(
          el => el.sys.contentType.sys.id === "resumeItem"
        );
        const experienceArr = res.items.filter(
          el => el.sys.contentType.sys.id === "resumeExperience"
        );
        const educationArr = res.items.filter(
          el => el.sys.contentType.sys.id === "resumeEducation"
        );
        console.log(skillSetsArr);
        this.setState({
          skillSets: skillSetsArr,
          experience: experienceArr,
          education: educationArr
        });
      })
      .catch(console.error);
  }

  render() {
    return (
      <ResumeStyles id="resume">
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
      </ResumeStyles>
    );
  }
}

const SkillSets = props => {
  const skillSetsList = props.skills.map(skill => {
    return (
      <li key={skill.fields.title}>
        <SectionSubTitle>{skill.fields.title}</SectionSubTitle>
        <ListH>
          <SkillListSets skillList={skill.fields.itemList} />
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
    let expMainKey = exp.fields.title + " " + exp.fields.company;
    return (
      <li key={expMainKey}>
        <SectionSubTitle>{exp.fields.title}</SectionSubTitle>
        <SectionSubTitleDesc>
          <span>{exp.fields.company}</span>
          <SectionTitleDivider />
          <span>{exp.fields.location}</span>
          <SectionTitleDivider />
          <span>{exp.fields.dates}</span>
        </SectionSubTitleDesc>
        <List>
          <ExpListSets expList={exp.fields.itemList} />
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
      <li key={edu.fields.school}>
        <SectionSubTitle>{edu.fields.school}</SectionSubTitle>
        <SectionSubTitleDesc>{edu.fields.location}</SectionSubTitleDesc>
        <ListH>
          <EduListSets eduList={edu.fields.skills} />
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
