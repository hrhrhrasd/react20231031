function App() {
  return (
    <div>
      <MyComponent1 />
    </div>
  );
}

function MyComponent1() {
  const address = "seoul";
  const contry = "korea";
  const phone = "010";
  const age = 33;
  const randomNumber = Math.random();
  return (
    <>
      <h1>age : {age}</h1>
      <h1>address : {address}</h1>
      <h1>contry : {contry}</h1>
      <h1>phone : {phone}</h1>
      <h1>random : {randomNumber}</h1>
      <h1>1~10 : {Math.ceil(randomNumber * 10)}</h1>
    </>
  );
}

export default App;
