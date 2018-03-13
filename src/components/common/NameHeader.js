import React from 'react';

const NameHeader = (props) => {
  return (
    <div>
      <h1 style={styles.headerStyle}>
        {props.name}
      </h1>
      <hr />
    </div>
  );
}

const styles = {
  headerStyle: {
    fontSize: 30,
    fontWeight: 'normal',
    color: '#444',
    textAlign: 'left',
    paddingLeft: '80px'
  }
}

export { NameHeader };
