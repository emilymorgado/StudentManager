import React, { Component } from 'react';
import axios from 'axios';
import StudentListing from '../StudentListing/StudentListing';
import { Nav, Header, Input, Button } from '../common';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      error: '',
      token: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.authenticateEmail = this.authenticateEmail.bind(this);
    this.loginSuccess = this.loginSuccess.bind(this);
    this.loginFail = this.loginFail.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleClearForm() {
    this.setState({
      email: '',
      password: '',
      error: ''
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const payload = {
      authUrl: 'https://api-qa.booknooklearning.com/tutors/authenticate',
      email: this.state.email,
      password: this.state.password
    };
    this.authenticateEmail(payload);
  }

  authenticateEmail(payload) {
    axios.post(payload.authUrl, {
      email: payload.email,
      password: payload.password})
      .then(res => {this.loginSuccess(res)})
      .catch(err => {this.loginFail(err)})
    }

  loginSuccess(res) {
    this.setState({ loggedIn: true, token: res.data.token });
    this.handleClearForm();
  }

  loginFail(err) {
    this.handleClearForm();
    this.setState({
      error: 'Authentication Failed'
    });
    console.log(err);
  }

  render() {
    if (this.state.loggedIn === false) {
      return (
        <div>
          <Nav />
          <Header headerText={'Welcome!'} />
          <div style={styles.errorTextStyle}>
              {this.state.error}
          </div>
          <form onSubmit={this.handleFormSubmit}>
            <Input
              placeholder={'user@email.com'}
              type={'text'}
              content={this.state.value}
              onChange={this.handleEmailChange}
            />
            <Input
              placeholder={'password'}
              type={'password'}
              content={this.state.value}
              onChange={this.handlePasswordChange}
            />
            <Button buttonText='SIGN IN'>
              <input
                type={'submit'}
                value={'Submit'}
              />
             </Button>
          </form>
        </div>
      );
    } else {
      return <StudentListing token={this.state.token}/>
    }
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default Login;
