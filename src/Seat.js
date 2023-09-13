import React, { useState } from 'react';

const Seat = ({ id, available, onSeatClick }) => {
  const [isBooked, setIsBooked] = useState(!available);

  const handleClick = () => {
    if (available) {
      setIsBooked(!isBooked);
      onSeatClick(id, !isBooked);
    }
  };

  return (
    <div
      className={`seat ${isBooked ? 'booked' : 'available'}`}
      onClick={handleClick}
    >
      {id}
    </div>
  );
};

export default Seat;