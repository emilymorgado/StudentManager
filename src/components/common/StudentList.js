import React from 'react';

const StudentList = ({ student }) => {
  const { firstName, lastName, grade, readingLevel } = student;

  return (
    <div style={styles.containerStyle}>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{grade}</p>
      <p>{readingLevel}</p>
    </div>
  );
}

const styles = {
  containerStyle: {
    height: '40px',
    fontSize: 16,
    outline: 0
  }
}

export { StudentList };
