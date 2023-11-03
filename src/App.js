import React from "react";
import { Button } from "@chakra-ui/react";

function MyComp({ children, executeClick }) {
  return <Button onClick={executeClick}>{children}</Button>;
}

function App(props) {
  function func1() {
    console.log("hello");
  }

  let func2 = () => {
    console.log("arrow function 1");
  };

  return (
    <div>
      <MyComp executeClick={func1}>button</MyComp>
      <MyComp executeClick={func2}>button2</MyComp>
      <MyComp
        executeClick={() => {
          console.log("arrow 2");
        }}
      >
        button3
      </MyComp>
    </div>
  );
}

export default App;
