import React from 'react';

const Textarea = ({ value, onChange, placeholder, className }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Textarea;