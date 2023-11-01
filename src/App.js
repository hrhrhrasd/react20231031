function App() {
  return (
    <>
      <MyComp name={"흥민"} address={"신촌"} city={"서울"} age={33} />
      <MyComp address={"신촌"} city={"서울"} age={33} />
      <MyComp address={"신촌"} age={22} />
    </>
  );
}

function MyComp({ name = "강인", address, city = "부산", age }) {
  return (
    <div>
      <p>
        이름 {name} 나이 {age} 주소 {city}, {address}
      </p>
    </div>
  );
}

export default App;
