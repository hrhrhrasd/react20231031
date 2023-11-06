import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [message, setMessage] = useState("");
  const [obj, setObj] = useState({ message: "" });

  function handleObjChange(e) {
    // const objClone = { ...obj };
    // objClone.message = e.target.value;
    setObj({ ...obj, message: e.target.value });
  }

  return (
    <div>
      <Box>
        <Input onChange={(e) => setMessage(e.target.value)} />
        <Text>{message}</Text>
      </Box>
      <Box>
        <Input onChange={handleObjChange} />
        <Text>{obj.message}</Text>
      </Box>
    </div>
  );
}

export default App;
