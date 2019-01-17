import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://pbs.twimg.com/media/Do_2fOwUcAE4zbd.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Front End Web Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | SASS | JavaScript | JQuery | React</p>
              <div className="social-links">
                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                {/* GitHub */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github-square" aria-hidden="true" />
                </a>
                {/* CodePen */}
                <a href="http://codepen.com" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-codepen" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
