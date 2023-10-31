function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);
  let message;

  if (num1 === num2) {
    message = <h1>당첨</h1>;
  } else {
    message = <h1>꽝</h1>;
  }

  return (
    <div>
      {num1 === num2 ? <h1>당첨</h1> : <h1>꽝</h1>}
      {message}
    </div>
  );
}

export default App;
