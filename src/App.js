function App() {
  const myStyle = {
    width: "400px",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={myStyle}>
      <MyComp />
      <MyComp />
      <MyComp />
    </div>
  );
}

function MyComp() {
  const myStyle2 = {
    width: "50px",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    borderRadius: "10px",
  };
  const name = "흥민";
  return <div style={myStyle2}>{name}</div>;
}

export default App;
