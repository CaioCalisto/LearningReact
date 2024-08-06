import React, {useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  return (
      <div className="App">
        {number}
        <br/>
        <br/>
          <button onClick={() => setNumber(number + 1)}>CLICK</button>
      </div>
  );
}

export default App;
