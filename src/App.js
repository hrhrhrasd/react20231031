function App() {
  const num1 = Math.ceil(Math.random() * 6);
  const num2 = Math.ceil(Math.random() * 6);

  let messageClassName = num1 === num2 ? "win" : "lose";
  let message = num1 === num2 ? "당첨" : "꽝";

  return (
    <>
      <h1>1번 주사위 {num1}</h1>
      <h1>1번 주사위 {num2}</h1>
      <h1 className={messageClassName}>{message}</h1>
    </>
  );
}
export default App;
