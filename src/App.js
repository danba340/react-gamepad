import { useState } from 'react';
import { useGamepads } from 'react-gamepads';
import './App.css';

const buttonLabels = [
  "A",
  "B",
  "X",
  "Y",
  "L1",
  "R1",
  "L2",
  "R2",
  "Back",
  "Start",
  "L3",
  "R3",
  "UP",
  "DOWN",
  "LEFT",
  "RIGHT",
  "XBOX",
]

const axesLabels = [
  "LX",
  "LY",
  "RX",
  "RY",
]

function App() {
  const [gamepads, setGamepads] = useState([]);
  useGamepads(_gamepads => {
    setGamepads(Object.values(_gamepads))
  })
  if (!gamepads) return '';
  return (
    <div
      className="App"
      style={{ background: `rgb(${128 + (gamepads[0].axes[0] * 128)},128,128)` }}
    >
      {gamepads.length && gamepads.map(gp => {
        return (
          <div>
            <div><span>ID:</span>{gp.id}</div>
            {gp.buttons.map((button, index) => {
              return (
                <div><span>{buttonLabels[index]}:</span><span>{button.value}</span></div>
              )
            })}
            {gp.axes.map((stick, index) => {
              return (
                <div><span>{axesLabels[index]}:</span><span>{stick}</span></div>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default App;
