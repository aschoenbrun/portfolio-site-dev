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
import contentfulClient from "../../../contentfulSetup";

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
      sectionIntro: "",
      skillSets: [],
      experience: [],
      education: [],
      references: []
    };
  }

  componentDidMount() {
    contentfulClient
      .getEntries()
      .then(res => {
        const sectionIntro = res.items.filter(
          el => el.sys.id === "1jCQ6OAEbsRMG0lPaJqa95"
        );
        const skillSetsArr = res.items.filter(
          el => el.sys.contentType.sys.id === "resumeItem"
        );
        const experienceArr = res.items.filter(
          el => el.sys.contentType.sys.id === "resumeExperience"
        );
        const educationArr = res.items.filter(
          el => el.sys.contentType.sys.id === "resumeEducation"
        );
        const referralArr = res.items.filter(
          el => el.sys.contentType.sys.id === "referrals"
        );
        this.setState({
          sectionIntro: sectionIntro[0].fields.intro,
          skillSets: skillSetsArr,
          experience: experienceArr,
          education: educationArr,
          references: referralArr
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
          <SectionIntro>{this.state.sectionIntro}</SectionIntro>
          <a
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1RcEHj7oHl_9yUOZhE8S-hUuQ7UBLd9tG/view?usp=sharing"
          >
            Download Resume
          </a>
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
  const refSetsList = props.refList.map(ref => {
    const refEmail = () => {
      let refEmailVar = ref.fields.email;
      if (refEmailVar) {
        return (
          <li key={refEmailVar}>
            <a href={`mailto:${refEmailVar}`}>{refEmailVar}</a>
          </li>
        );
      } else {
        return "";
      }
    };
    const refPhone = () => {
      let refPhoneVar = ref.fields.phone;
      if (refPhoneVar) {
        return <li key={refPhoneVar}>{refPhoneVar}</li>;
      } else {
        return "";
      }
    };
    return (
      <li key={ref.fields.name}>
        <SectionSubTitle>{ref.fields.name}</SectionSubTitle>
        <ListH>
          {refEmail()}
          {refPhone()}
        </ListH>
      </li>
    );
  });
  return refSetsList;
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
