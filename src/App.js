function App() {
  // jsx 가 js 코드로 변환됨
  // 따라서 js 키워드 사용 불가
  return (
    <>
      {/* class 속성은 className 으로 작성 */}
      <div className="header">Lorem ipsum dolor.</div>
      {/* for >> htmlFor */}
      <label htmlFor="nameInput">이름</label>
      <input type="text" id="nameInput" />
    </>
  );
}

export default App;
