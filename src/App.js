import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function BOx() {
  return null;
}

function App(props) {
  // set 메소드로 상태 변경
  // 상태가 같은지 아닌지 판단 해서 re-render 결정

  const [number, setNumber] = useState(0);
  const [numObj, setNumObj] = useState({ number: 0 });

  function handleNumObjChange() {
    // 잘못된 예시
    // numObj.number = numObj.number + 1;
    // setNumObj(numObj);

    // 복사해서 사용
    const numObj2 = { ...numObj };
    numObj2.number = numObj2.number + 1;
    setNumObj(numObj2);
  }

  return (
    <div>
      <Box>
        <Button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          number 변경
        </Button>
        <Text>{number}</Text>
      </Box>
      <Box>
        <Button onClick={handleNumObjChange}>num 객체 변경</Button>
        <Text>{numObj.number}</Text>
      </Box>
    </div>
  );
}

export default App;
