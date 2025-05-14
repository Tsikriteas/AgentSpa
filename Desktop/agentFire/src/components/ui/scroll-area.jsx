import React from 'react';

export const ScrollArea = ({ children, className }) => {
  return <div className={`scroll-area ${className}`}>{children}</div>;
};

export const ScrollBar = ({ className }) => {
  return <div className={`scroll-bar ${className}`}></div>;
};