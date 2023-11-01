function App() {
  return (
    <div>
      <MyElem name={"흥민"} age={44} team={"토트넘"} fcolor={"blue"} />
      <MyElem name={"강인"} age={33} team={"파리"} fcolor={"red"} />
    </div>
  );
}

function MyElem({ name, age, team, fcolor }) {
  return (
    <div style={{ color: fcolor }}>
      <h1>
        name = {name} age = {age} team = {team}
      </h1>
    </div>
  );
}

export default App;
