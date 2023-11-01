function App() {
  return (
    <div>
      <MyText
        value={"My Text"}
        style={{
          color: "white",
          background: "black",
          width: "500px",
          fontSize: "2rem",
        }}
      />
    </div>
  );
}

function MyText(props) {
  return (
    <div style={props.style}>
      <p>{props.value}</p>
    </div>
  );
}

export default App;
