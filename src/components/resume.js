import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>
            <h2 style={{ paddingTop: '2em' }}>Park, Min Young</h2>
            <h4 style={{ color: 'grey' }}>Front End Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Ut tempus eget eros et molestie. Aliquam accumsan sit amet eros et accumsan. Vivamus condimentum aliquet nulla quis posuere. Donec fermentum lobortis sem eu venenatis. Phasellus pharetra mauris turpis, a rutrum urna ullamcorper vitae. Nunc tempor nisl ac tellus elementum, at egestas nisl commodo. Nunc semper nibh sit amet venenatis condimentum. Donec accumsan nulla sollicitudin arcu dignissim, nec commodo eros dictum. Suspendisse dignissim placerat libero, sit amet ultrices tortor efficitur nec. </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>mnngcreator@gmail.com</p>
            <h5>web</h5>
            <p>neonsign99.cafe24.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>Left Side</Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
