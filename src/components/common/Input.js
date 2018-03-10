import React from 'react';

const Input = () => {
  return (
    <div style={styles.divStyle}>
      <input style={styles.inputStyle} />
    </div>
  );
}

const styles = {
  divStyle:{
    paddingBottom: '20px'
  },
  inputStyle: {
    height: '25px',
    width: '370px',
    fontSize: 16,
    fontWeight: 'none',
    padding: 10,
    paddingRight: 28,
    paddingLeft: 28,
    borderRadius: 5
  }
}

export { Input };
