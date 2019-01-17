import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab == 0) {
      return (
        <div><h1>This is React</h1></div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div><h1>This is React2</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is React3</h1></div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is React4</h1></div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>React2</Tab>
          <Tab>React3</Tab>
          <Tab>React4</Tab>
        </Tabs>
        <section className="projects-grid">
          {this.toggleCategories()}
        </section>
      </div>
    );
  }
}

export default Projects;
