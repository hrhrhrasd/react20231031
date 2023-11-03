import { useState } from "react";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  let result = number1 + number2;

  function handleChange1(e) {
    setNumber1(Number(e.target.value));
  }

  function handleChange2(e) {
    setNumber2(Number(e.target.value));
  }

  return (
    <>
      <input type="number" onChange={handleChange1} /> +
      <input type="number" onChange={handleChange2} />= {result}
    </>
  );
}

export default App;
