function App() {
  return (
    <>
      <MyComp value={"흥민"} address={"신촌"} />
      <MyComp value={"강인"} address={"강남"} />
    </>
  );
}

function MyComp({ address, value }) {
  return (
    <div>
      <h1>
        {value} : {address}거주
      </h1>
    </div>
  );
}

export default App;
