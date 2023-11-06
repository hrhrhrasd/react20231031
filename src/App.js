import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <Box>
        <Input
          type={"text"}
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </Box>
      <Box>
        <Input
          type={"text"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Input>
      </Box>
      <Text>
        {userName}의 email : {email}
      </Text>
    </div>
  );
}

export default App;
