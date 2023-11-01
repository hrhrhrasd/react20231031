function App() {
  return (
    <div>
      <MyComp
        m={"30px"}
        p={"10px"}
        color={"gold"}
        bg={"black"}
        text={"hello react"}
      />
      <MyComp m={"30px"} p={"10px"} color={"gold"} bg={"black"} />
      <MyComp p={"10px"} color={"gold"} text={"hello react"} />
      <MyComp m={"30px"} bg={"black"} text={"hello react"} />
    </div>
  );
}

function MyComp({
  m = "20px",
  p = "30px",
  color = "green",
  bg = "red",
  text = "hello world",
}) {
  return (
    <div
      style={{
        margin: m,
        padding: p,
        color: color,
        background: bg,
      }}
    >
      <p>{text}</p>
    </div>
  );
}

export default App;
