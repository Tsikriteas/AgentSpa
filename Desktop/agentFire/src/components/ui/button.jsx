import React from 'react';

const Button = ({ children, onClick, className = "bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out" }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;