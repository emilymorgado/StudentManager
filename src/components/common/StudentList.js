import React, { Component } from 'react';

class StudentList extends Component {
  constructor(props) {
    super(props);
    // const { firstName, lastName, grade, readingLevel, onClick } = props;
    this.state = {};
    this.openProfile = this.openProfile.bind(this);
  }

openProfile(event) {
  console.log("CLICKED")
  console.log(event)
  console.log(this)
}

render() {
  return (
    <button style={styles.containerStyle} onClick={this.openProfile}>
      <p style={styles.nameStyle}>{this.props.firstName} {this.props.lastName}</p>
      <p style={styles.gradeStyle}>{this.props.grade}</p>
      <p style={styles.readingStyle}>{this.props.readingLevel}</p>
    </button>
  );
}

}//closes Class

const styles = {
  containerStyle: {
    height: '50px',
    width: '1200px',
    block: 'inline',
    fontSize: 16,
    outline: 0,
    display: 'flex',
    color: '#444',
    border: '1px solid #dbdbdb',
    marginLeft: '80px'
  },
  nameStyle: {
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

export { StudentList };
