import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [move, setMove] = useState(0);


  const moveBox = () => {
    return setMove(move + 35)
  }


  console.log(move)

  return (
    <div className="App">
      <button onClick={moveBox}>move the box</button>
      {
        move === 0 ? (
          <div className='Box' style={{ height: '153px', width: '153px', backgroundColor: 'pink' }}></div>
        ) : (
          <div className='Box' style={{ 'marginTop': move, height: '153px', width: '153px', backgroundColor: 'pink' }}>{move}</div>
        )
      }
    </div >
  );
}

export default App;
