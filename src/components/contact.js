import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Park, Min Young</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt a dui eget semper. Duis posuere quam porta, egestas purus id, sodales diam. Donec vel fringilla turpis. Etiam molestie laoreet nulla, quis euismod lacus. In bibendum ultricies mauris non vulputate. Fusce vel ornare sem.</p>
          </Cell>
          <Cell col={6}>half page</Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
