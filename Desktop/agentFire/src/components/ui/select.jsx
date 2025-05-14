import React, { useState } from 'react';

export const Select = ({ children, className }) => {
  return <div className={`select ${className}`}>{children}</div>;
};

export const SelectTrigger = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={`select-trigger ${className}`}>
      Open
    </button>
  );
};

export const SelectValue = ({ value, className }) => {
  return <div className={`select-value ${className}`}>{value}</div>;
};