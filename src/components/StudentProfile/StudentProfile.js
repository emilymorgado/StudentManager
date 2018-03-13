import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Nav, Input, Button, NameHeader } from '../common';

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      error: '',
      success: ''
    };
    this.saveChanges = this.saveChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onFail = this.onFail.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  clearForm() {
    this.setState({
      firstName: '',
      lastName: '',
      username: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let names = {};
    if (this.state.firstName) {
      names['first_name'] = this.state.firstName;
    }
    if (this.state.lastName) {
      names['last_name'] = this.state.lastName;
    }
    if (this.state.username) {
      names['username'] = this.state.username;
    }

    const payload = {
      url: 'https://api-qa.booknooklearning.com/students/:' + this.props.id,
      auth: this.props.token,
      names: names
    };
    this.saveChanges(payload);
  }

  saveChanges(payload) {
    axios.put(
      payload.url,
      'data': payload.names,
      'headers': {'Authorization': payload.auth}
    )
    .then(res => {this.onSuccess(res)})
    .catch(err => {this.onFail(err)})
  }

  onSuccess(res) {
    this.setState({
      success: 'Your changes have been saved!'
    });
    this.clearForm();
  }

  onFail(err) {
    this.setState({
      error: 'Something went wrong and your changes weren\'t saved'
    });
    this.clearForm();
    console.log(err);
  }

  render() {
    const name = this.props.firstName + ' ' + this.props.lastName;
    return (
      <div>
        <Nav />
        <NameHeader name={name} />
        <div style={styles.errorTextStyle}>
          {this.state.error}
        </div>
        <div style={styles.successStyle}>
          {this.state.success}
        </div>
        <form onSubmit={this.handleSubmit}>
          <Grid fluid style={styles.gridStyle}>
            <Row>
              <Col>
                <Input
                  placeholder={this.props.firstName}
                  label={'FIRST NAME'}
                  type={'text'}
                  content={this.state.value}
                  onChange={this.handleFirstNameChange}
                />
              </Col>
              <Col>
                <div style={styles.inputStyle}>
                  <Input
                    placeholder={this.props.lastName}
                    label={'LAST NAME'}
                    type={'text'}
                    content={this.state.value}
                    onChange={this.handleLastNameChange}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Input
                placeholder={this.props.username}
                label={'USER NAME'}
                type={'text'}
                content={this.state.value}
                onChange={this.handleUsernameChange}
              />
            </Row>
          </Grid>
          <div style={styles.buttonStyle}>
            <Button
              buttonText={'SAVE PROFILE'}
              type={'submit'}
              value={'Submit'}
            />
          </div>
        </form>
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
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  successStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#2271a3'
  }
};

export default StudentProfile;
