import React, { Component } from "react";

class App extends Component {
  state = {
    mainNav: [
      {
        name: "Cover Letter",
        key: "coverLetter"
      },
      {
        name: "Resume",
        key: "resume"
      }
    ],
    currentPage: "Cover Letter",
  }
  render() {
    const navClickChange = newPage => {
      document.getElementById("site__content").classList.remove("show");
      document.getElementById("site__content").classList.add("hide");
      document.getElementById("site__footer").classList.remove("show");
      document.getElementById("site__footer").classList.add("hide");
      setTimeout(() => {
        this.setState({ currentPage: newPage });
      }, 250);
      setTimeout(() => {
        document.getElementById("site__content").classList.add("show");
        document.getElementById("site__content").classList.remove("hide");
        document.getElementById("site__footer").classList.add("show");
        document.getElementById("site__footer").classList.remove("hide");
      }, 250);

      return (
      <div className="App">
        
        <main id="site__content" className="show">
          <Content currentPage={this.state.currentPage} />
        </main>
      </div>
    );
    };
}