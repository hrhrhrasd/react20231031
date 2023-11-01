function App() {
  return (
    <>
      <h1
        className={"note"}
        style={{
          background: "blue",
          color: "white",
        }}
        title={"제목요소"}
      >
        Lorem.
      </h1>
      <p title={"문단요소"}>Lorem ipsum dolor.</p>
      <MyComp title={"myComp"} name={"흥민"} />
      <MyComp title={"myComp2"} name={"강인"} />
    </>
  );
}

//  함수 인자로
//  사용한 곳 에서 넘긴 property들이 객체형태로 담김
function MyComp(props) {
  console.log(props);
  return (
    <div>
      <h1 title={props.title} name={props.name}>
        hello
      </h1>
    </div>
  );
}
export default App;
