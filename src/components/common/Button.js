import React from 'react';

const Button = () => {
  return (
    <div>
      <button style={styles.buttonStyle}>
        SIGN IN
      </button>
    </div>
  );
}

const styles = {
  buttonStyle: {
    backgroundColor: '#73e03c',
    height: '40px',
    width: '300px',
    borderRadius: 20,
    color: '#fff',
    fontSize: 16
  }
}

export { Button };
