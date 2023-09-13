import React, { useState } from 'react';
import Seat from './Seat';

const SeatingLayout = ({ rows, cols }) => {
  const [seats, setSeats] = useState(
    new Array(rows * cols).fill(true) // Assuming all seats are initially available
  );

  const handleSeatClick = (id, isBooked) => {
    const newSeats = [...seats];
    newSeats[id] = isBooked;
    setSeats(newSeats);
  };

  return (
    <div className="seating-layout">
      {seats.map((available, id) => (
        <Seat
          key={id}
          id={id}
          available={available}
          onSeatClick={handleSeatClick}
        />
      ))}
    </div>
  );
};

export default SeatingLayout;