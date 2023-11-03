import React from "react";

function App(props) {
  function handlClick(e) {
    e.preventDefault();
    console.log("다른 일을 시킴");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("다른 일을 시킴");
  }

  return (
    <div>
      <a href="http://www.naver.com" onClick={handlClick}>
        naver
      </a>
      <div>
        <form
          action="https://search.naver.com/search.naver"
          onSubmit={handleSubmit}
        >
          <input type="text" name={"query"} />
          <button>검색</button>
        </form>
      </div>
    </div>
  );
}

export default App;
