import React, { Component } from 'react';
import axios from 'axios';
import { Nav, NameHeader, StudentList } from '../common';

class StudentListing extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
    this.loadStudents = this.loadStudents.bind(this);
    this.renderStudents = this.renderStudents.bind(this);
  }

  loadStudents() {
    if (this.state.students.length == 0) {
      const payload = {
        url: 'https://api-qa.booknooklearning.com/schools/32/students',
        auth: this.props.token
      };

      axios.get(payload.url, {
        'headers': {'Authorization': payload.auth}})
      .then(res => {
        this.setState({ students: res.data })
      })
      .catch(err => {console.log(err)})
    }
  }

  renderStudents() {
    return this.state.students.map(student =>
      (
        <StudentList
          key={student.id}
          firstName={student.first_name}
          lastName={student.last_name}
          grade={student.grade_level.sequence}
          readingLevel={student.reading_level.sequence}
        />
    ))}

  render() {
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
}

export default StudentListing;
