import logo from './logo.svg';
import './App.css';
import React from "react";






function App() {
  const [time, setTime] = React.useState(0);
  const [timeOn, setTimeOn] = React.useState(false);

  React.useEffect(() => {
    let interval;

    if(timeOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      },10)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[timeOn])

  return (
    <div className="App">
      <div>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timeOn && time == 0 &&(
          <button onClick={() => setTimeOn(true)}>Start</button>
        )}
        {timeOn && (
          <button onClick={() => setTimeOn(false)}>Pause</button>
        )}
        {!timeOn && time !== 0 && (
          <button onClick={() => setTimeOn(true)}>Resume</button>
        )}
        {!timeOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
      </div>
    </div>
  );
}
export default App;
