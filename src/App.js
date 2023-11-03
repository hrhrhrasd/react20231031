import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  // 함수명 작성 관습
  // handle이벤트명
  function handleClick() {
    console.log("second");
  }

  function handleMouseEnter() {
    console.log("third");
  }

  function handleMouseLeave() {
    console.log("4th");
  }
  return (
    <div>
      <Button onClick={() => console.log("first")}>button1</Button>
      <Button onClick={handleClick}>button2</Button>
      <Button onMouseEnter={handleMouseEnter}>button3</Button>
      <Button onMouseLeave={handleMouseLeave}>button4</Button>
    </div>
  );
}

export default App;
