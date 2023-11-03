import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  function hadleClick(e) {
    // 브라우저는 이벤트 핸들러 메소드에
    // event 객체를 파라미터로 넣어줌
    // console.log(e);
    console.log(e.target);
  }
  return (
    <div>
      <Button onClick={hadleClick}>button1</Button>
      <Button onClick={hadleClick}>button2</Button>
    </div>
  );
}

export default App;
