import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        증가
      </Button>

      <Button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        감소
      </Button>
    </div>
  );
}

export default App;
