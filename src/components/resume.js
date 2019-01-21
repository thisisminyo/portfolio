import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import Education from './education'
import Experience from './experience'
import Skills from './skills'

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
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My Univ"
              schoolDescription="Phasellus pretium eros sit amet urna laoreet efficitur. Integer tincidunt justo nec tempor vulputate. Integer ut nisl vehicula, pellentesque urna quis, porta leo. Suspendisse potenti. Aliquam eu nibh a nulla sollicitudin congue quis at odio."
            />
            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd Univ"
              schoolDescription="Phasellus pretium eros sit amet urna laoreet efficitur. Integer tincidunt justo nec tempor vulputate. Integer ut nisl vehicula, pellentesque urna quis, porta leo. Suspendisse potenti. Aliquam eu nibh a nulla sollicitudin congue quis at odio."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Experience</h2>
            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Phasellus pretium eros sit amet urna laoreet efficitur. Integer tincidunt justo nec tempor vulputate. Integer ut nisl vehicula, pellentesque urna quis, porta leo. Suspendisse potenti. Aliquam eu nibh a nulla sollicitudin congue quis at odio."
            />
            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Phasellus pretium eros sit amet urna laoreet efficitur. Integer tincidunt justo nec tempor vulputate. Integer ut nisl vehicula, pellentesque urna quis, porta leo. Suspendisse potenti. Aliquam eu nibh a nulla sollicitudin congue quis at odio."
            />
            <Experience
              startYear={2016}
              endYear={2018}
              jobName="Third Job"
              jobDescription="Phasellus pretium eros sit amet urna laoreet efficitur. Integer tincidunt justo nec tempor vulputate. Integer ut nisl vehicula, pellentesque urna quis, porta leo. Suspendisse potenti. Aliquam eu nibh a nulla sollicitudin congue quis at odio."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="javaScript"
              progress={100}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
