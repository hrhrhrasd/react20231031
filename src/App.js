function App() {
  const myStyle = {
    color: "white",
    backgroundColor: "black", // lowerCamelCase
    fontSize: "70px",
    textAlign: "center",
  }; //js object

  return (
    <>
      {/* style 속성은 객체로 주어야 함 */}
      <div style={myStyle}>Lorem ipsum dolor.</div>
      <br />
      <div
        style={{
          color: "white",
          backgroundColor: "black",
          fontSize: "70px",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor.
      </div>
    </>
  );
}
export default App;
