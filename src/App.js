import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // 첫번째 파라미터(setup) : The function with your Effect's logic, 부작용이 있는 함수
  // 두번째 파라미터 : setup을 실행시키는 값의 나열(배열)
  //                빈 배열이면 첫 렌더링 때만 실행
  //                안쓰면 리렌더링 할때마다 (별로없음)
  useEffect(() => {
    console.log("effect 함수 실행");
  }, [number, text]);
  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
      <Input onChange={(e) => setText(e.target.value)} />
      <Text>{text}</Text>
    </div>
  );
}

export default App;
