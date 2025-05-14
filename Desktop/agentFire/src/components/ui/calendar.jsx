import React from 'react';

const Calendar = ({ selected, onSelect, className }) => {
  return (
    <div className={className}>
      <p>Placeholder for Calendar Component</p>
      <p>Selected Date: {selected ? selected.toString() : 'None'}</p>
      <button onClick={() => onSelect(new Date())}>Select Today</button>
    </div>
  );
};

export default Calendar;