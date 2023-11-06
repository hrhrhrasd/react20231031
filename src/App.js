import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("hello");

  return (
    <div>
      <button
        onClick={() => {
          // text 라는 state 값 변경
          setText("greeting");
        }}
      >
        상태 변경!
      </button>
      <p>{text}</p>
    </div>
  );
}

export default App;
