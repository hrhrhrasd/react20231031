function App() {
  function handleClick(e) {
    e.preventDefault();
    window.location.href = "https://www.naver.com";
  }

  return (
    <>
      <a href="https://www.daum.net" onClick={handleClick}>
        daum 이동
      </a>
    </>
  );
}

export default App;
