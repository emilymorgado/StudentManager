import React, { Component } from 'react';
import axios from 'axios';
import { Nav } from '../common';

class StudentListing extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.loadStudents = this.loadStudents.bind(this);
  }

  loadStudents() {
    const payload = {
      url: 'https://api-qa.booknooklearning.com/schools/32/students',
      auth: this.props.token
    };

    axios.get(payload.url, {
      'headers': {'Authorization': payload.auth}})
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
  }

  render() {
    return (
      <div onLoad={this.loadStudents()}>
        <Nav />
      </div>
    );
  }
}

export default StudentListing;
