function App() {
  const number = Math.ceil(Math.random() * 100); //1~100
  const isLarge = number > 50;
  const isSmall = number <= 50;

  return (
    <div>
      <h1>난수 : {number}</h1>
      <h1>{number > 50 ? "큰수" : "작은수"}</h1>
      <div>{number > 50 ? <BigImage /> : <SmallImage />}</div>
      <div>{isLarge && <h1>큰수</h1>}</div>
      <div>{isLarge || <h3>작은수</h3>}</div>
    </div>
  );
}

function BigImage() {
  return <h1>큰 이미지</h1>;
}

function SmallImage() {
  return <h3>작은 이미지</h3>;
}

export default App;
