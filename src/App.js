import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function MyComp1({ onClick }) {
  return (
    <Box>
      <Button onClick={onClick}>button</Button>
    </Box>
  );
}

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}
function App(props) {
  const [message, setMessage] = useState("hello");

  function handleButtonClick() {
    setMessage("change");
  }

  return (
    <div>
      {/* Mycomp1의 버튼 클릭시 MyComp2의 텍스트가 바뀌는 코드 */}
      <MyComp1 onClick={handleButtonClick}></MyComp1>
      <MyComp2 message={message}></MyComp2>
    </div>
  );
}

export default App;
