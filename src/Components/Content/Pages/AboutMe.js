import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { PageTitle } from "../../GlobalTheme/globalStyles";
import { List } from "../ContentLists";
import SectionIntro from "../SectionIntro";
import contentfulClient from "../../../contentfulSetup";

const PageMeta = () => {
  return (
    <Helmet>
      <title>About Me - Avi Schoenbrun</title>
      <link rel="canonical" href="https://aysportfolio/about-me" />
    </Helmet>
  );
};

export default class CoverLetter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "",
      pageIntro: "",
      pageContentArr: []
    };
  }

  componentDidMount() {
    contentfulClient
      .getEntry("4u4ujkhv5yHyiSszJwcjDM")
      .then(entry => {
        this.setState({
          pageTitle: entry.fields.title,
          pageContentArr: entry.fields.pageContent.content
        });
      })
      .catch(console.error);
    contentfulClient
      .getEntry("5GXcVkDotSTdGcJfoe5zgk")
      .then(entry => {
        this.setState({ pageIntro: entry.fields.intro });
      })
      .catch(console.error);
  }

  render() {
    return (
      <div id="cover-letter">
        <PageMeta />
        <PageTitle>{this.state.pageTitle}</PageTitle>
        <SectionIntro>{this.state.pageIntro}</SectionIntro>

        <PageContent pageContent={this.state.pageContentArr} />

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

const PageContent = props => {
  const pageContent = props.pageContent.map(el => {
    let nodeList;
    switch (el.nodeType) {
      case "paragraph":
        nodeList = el.content.map(node => {
          switch (node.nodeType) {
            case "text":
              return <span key={node.value}>{node.value}</span>;
            case "hyperlink":
              const value = node.content[0].value;
              return (
                <a href={node.data.uri} key={value}>
                  {value}
                </a>
              );
            default:
              return "";
          }
        });
        return <p key={el.value}>{nodeList}</p>;
      case "unordered-list":
        nodeList = el.content.map(node => {
          const value = node.content[0].content[0].value;
          return <li key={value}>{value}</li>;
        });
        return <List key={el.value}>{nodeList}</List>;
      default:
        return "";
    }
  });
  return pageContent;
};
