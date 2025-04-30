import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';
import { useState } from 'react';

const App = () => {
  const [isLightOn, setIsLightOn] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const [numbers, setNumbers] = useState<number[]>([])

  const handleLightMode = () => {
    setIsLightOn(!isLightOn)
  }
  
  const handleCount = () => {
    setCount(count => count + 1)
  }


  const handleLottoNumbers = () => {
    const numbers = []
    for (let i = 0; i < 7; i++ ) {
      numbers.push(Math.floor(Math.random() * 10) + 1 )
    }
    setNumbers(numbers)
  }

  /* Your states here */

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle onLight={handleLightMode} />
      <div   style={{
          backgroundColor: isLightOn ? "white" : "black",
          color: isLightOn ? "black" : "white",
        }} >Change this background color using the style attribute
      </div>


      <h2>Lotto Numbers</h2>
      <LottoNumbers randomNumber={handleLottoNumbers} />
      <div className="output">{numbers.map((n, i) => (
        <span key={i}>{n}</span>
      ))}</div>

      <h2>Click Counter</h2>
      <ClickCounter onCounter={handleCount} />
      <div className="output">{count}</div>
    </div>
  );
};

export default App;