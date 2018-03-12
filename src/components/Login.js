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
        email: this.state.email,
        password: this.state.password
      }
      console.log(payload.email)
      console.log(payload.password)


      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
        }
      };

      let config = {
        authUrl: 'https://api-qa.booknooklearning.com/tutors/authenticate',
        email: 'kevin+developer@booknooklearning.com',
        password: 'mypassword'
      };

      let auth = axios.post(config.authUrl, {
        email: 'kevin+developer@booknooklearning.com',
        password: 'mypassword'
      })
        .then((res) => {
          console.log(res);
          var token = res.data.token;
          config['token'] = token;
          console.log(config)
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
