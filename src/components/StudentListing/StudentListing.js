import React, { Component } from 'react';
import axios from 'axios';
import StudentProfile from '../StudentProfile/StudentProfile';
import { Nav, NameHeader, StudentList } from '../common';

class StudentListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      open: false,
      firstName: '',
      lastName: '',
      username: '',
      id: ''
    };
    this.loadStudents = this.loadStudents.bind(this);
    this.renderStudents = this.renderStudents.bind(this);
    this.openProfile = this.openProfile.bind(this);
  }

  loadStudents() {
    if (this.state.students.length === 0) {
      const payload = {
        url: 'https://api-qa.booknooklearning.com/schools/32/students',
        auth: this.props.token
      };

      axios.get(payload.url, {
        'headers': {'Authorization': payload.auth}})
      .then(res => {this.setState({ students: res.data })})
      .catch(err => {console.log(err)})
    }
  }

  renderStudents() {
    return this.state.students.map(student =>
      (
        <StudentList
          key={student.id}
          id={student.id}
          firstName={student.first_name}
          lastName={student.last_name}
          grade={student.grade_level.sequence}
          readingLevel={student.reading_level.sequence}
          onClick={event => this.openProfile(student, event)}
        />
    ));
  }

  openProfile(student, event) {
    this.setState({
      open: true,
      firstName: student.first_name,
      lastName: student.last_name,
      username: student.username,
      id: student.id
    });
  }

  render() {
    if (this.state.open === false) {
      return (
        <div onLoad={this.loadStudents()}>
          <Nav />
          <NameHeader name={'Emily Morgado'} />
          <div style={styles.containerStyle}>
            <p style={styles.studentStyle}>STUDENTS</p>
            <p style={styles.gradeStyle}>GRADE</p>
            <p style={styles.readingStyle}>READING LEVEL</p>
          </div>
          <div>
            {this.renderStudents()}
          </div>
        </div>
      );
    } else {
      return (
        <StudentProfile
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          username={this.state.username}
          id={this.state.id}
          token={this.props.token}
        />
      );
    }
  }
}

const styles = {
  containerStyle: {
    height: '50px',
    width: '1200px',
    block: 'inline',
    fontSize: 16,
    outline: 0,
    display: 'flex',
    color: '#444',
    marginLeft: '80px'
  },
  studentStyle: {
    marginLeft: '10px',
    textAlign: 'left',
    width: '400px'
  },
  gradeStyle: {
    width: '400px'
  },
  readingStyle: {
    width: '400px'
  }
};

export default StudentListing;
