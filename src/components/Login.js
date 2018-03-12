import React, { Component } from 'react';
import { Nav, Header, Input, Button } from './common';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.authenticateEmail = this.authenticateEmail.bind(this);
  }

    handleEmailChange(event) {
      this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
      this.setState({ password: event.target.value });
    }

//chain to login success/fail
    handleClearForm() {
      this.setState({
        email: '',
        password: ''
      });
    }

    handleFormSubmit(event) {
      event.preventDefault();
      const payload = {
        authUrl: 'https://api-qa.booknooklearning.com/tutors/authenticate',
        email: this.state.email,
        password: this.state.password
      }
      this.authenticateEmail(payload)
    }

    authenticateEmail(payload) {
      axios.post(payload.authUrl, {
        email: payload.email,
        password: payload.password
      })
        .then((res) => {
          console.log("SUCCESS")
        })
        .catch((err) => {
          console.log(err);
        })
      }



  render() {
    return (
      <div>
        <Nav />
        <Header headerText='Welcome to BookNook!' />

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
              type="submit"
              value="Submit"/>
           </Button>

        </form>

      </div>
    );
  }
}

export default Login;
