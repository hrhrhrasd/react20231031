import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  const message = useContext(MessageContext);
  return <Text>받은 메시지 : {message}</Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App(props) {
  const [message, setMessage] = useState("첫 메시지");
  // message state를 CComp에 전달하기
  // 1. context 만들기 : createContext();
  // 2. context에 state 넣기 : <Context.Provider value={state} />
  // 3. tree안에 사용하기 : useContext(Context);

  return (
    <div>
      <Button onClick={() => setMessage("바뀐 메시지")}>button</Button>
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </div>
  );
}

// context 이름 : ...Context  대문자로 시작
const MessageContext = createContext(null);

export default App;
