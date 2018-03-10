import React from 'react';

const Header = () => {
  return (
    <div>
      <h1 style={styles.headerStyle}>
        Welcome to BookNook!
      </h1>
    </div>
  );
}

const styles = {
  headerStyle: {
    padding: '20px',
    fontSize: 50
  }
}

export { Header };
