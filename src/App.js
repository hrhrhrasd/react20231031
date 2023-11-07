import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function AComp() {
  const value = useContext(MessageContext);
  return (
    <Button onClick={() => value.setMessage("바뀐 메시지")}>
      {" "}
      메시지 변경하기{" "}
    </Button>
  );
}

function BComp() {
  // const value = useContext(MessageContext);
  // return <Text>{value.message}</Text>;
  const { message } = useContext(MessageContext);
  return <Text>{message}</Text>;
}

function App(props) {
  const [message, setMessage] = useState("초기 상태 메시지");

  return (
    <div>
      {/* 2. context에 value 넣기*/}
      <MessageContext.Provider value={{ message, setMessage }}>
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </div>
  );
}
// 1. context 만들기
const MessageContext = createContext(null);

export default App;
