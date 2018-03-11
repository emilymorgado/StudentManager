import React from 'react';

const Input = ({ placeholder, type, value, onChange }) => {
  const { divStyle, inputStyle } = styles;
  return (
    <div style={divStyle}>
      <input
        style={inputStyle}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
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
    borderRadius: 5,
    autocorrect: 'off'
  }
}

export { Input };
