import React, { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import { clear } from "@testing-library/user-event/dist/clear";

function App(props) {
  // 상태(state)가 변경되면 component를 다시 그림 ( re render)

  // state : react가 관리하는 component의 값

  // state를 얻는 방법 : useState();

  const [message, setMessage] = useState(""); // 배열을 리턴, index[0] : 현재 상태
  // index[1] : state를 변경 할 수 있는 메소드

  let text = "초기 메세지";
  function handleInputChange(e) {
    text = e.target.value;
    console.log(text);
    setMessage(text);
  }
  return (
    <div>
      <Input onChange={handleInputChange} />
      <p>{text}</p>
      <Button onClick={() => setMessage("")}>초기화</Button>
      <p>{message}</p>
    </div>
  );
}

export default App;
