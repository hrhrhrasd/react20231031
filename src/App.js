function App() {
  return (
    <div>
      <MyElem
        p={"5px"}
        m={"5px"}
        color={"green"}
        bg={"yellow"}
        text={"hello"}
      />
      <MyElem p={"10px"} m={"10px"} color={"red"} bg={"blue"} text={"world"} />
    </div>
  );
}

function MyElem({ p, m, color, bg, text }) {
  return (
    <div
      style={{
        padding: p,
        margin: m,
        color: color,
        background: bg,
      }}
    >
      <p>{text}</p>
    </div>
  );
}

export default App;
