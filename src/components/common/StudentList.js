import React from 'react';

const StudentList = ({ firstName, lastName, grade, readingLevel, onClick }) => {
  const { containerStyle, nameStyle, gradeStyle, readingStyle } = styles;

  return (
    <button style={containerStyle} onClick={onClick}>
      <p style={nameStyle}>{firstName} {lastName}</p>
      <p style={gradeStyle}>{grade}</p>
      <p style={readingStyle}>{readingLevel}</p>
    </button>
  );
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
