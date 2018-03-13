import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Nav, Input, Button, NameHeader } from '../common';

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const name = this.props.firstName + ' ' + this.props.lastName;
    return (
      <div>
        <Nav />
        <NameHeader name={name} />
        <Grid fluid style={styles.gridStyle}>
          <Row>
            <Col>
              <Input
                placeholder={this.props.firstName}
                label={'FIRST NAME'}
              />
            </Col>
            <Col end-md>
              <div style={styles.inputStyle}>
                <Input
                  placeholder={this.props.lastName}
                  label={'LAST NAME'}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Input
              placeholder={this.props.username}
              label={'USER NAME'}
            />
          </Row>
        </Grid>
        <div style={styles.buttonStyle}>
          <Button
            buttonText={'SAVE PROFILE'}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  gridStyle: {
    width: '1200px',
    marginLeft: '200px',
    marginTop: '80px'
  },
  inputStyle: {
    marginLeft: '80px'
  },
  buttonStyle: {
    marginTop: '80px'
  }
}

export default StudentProfile;
