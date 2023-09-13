import React from 'react';
import "./styles.css";
import SeatingLayout from './SeatingLayout';

function App() {
  return (
    <div className="App">
      <h1>Seat Booking System</h1>
      <SeatingLayout rows={5} cols={10} />
    </div>
  );
}

export default App;