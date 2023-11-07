import React, { createContext, useState } from "react";
import { AComp } from "./component/AComp";
import { BComp } from "./component/BComp";

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
export const MessageContext = createContext(null);

export default App;
