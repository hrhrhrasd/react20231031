import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  function handleNameInput(e) {
    setName(e.target.value);
  }

  return (
    <Center>
      <Box w={"480px"}>
        <FormControl mb={5}>
          <FormLabel>Name</FormLabel>
          <Input type={"text"} value={name} onChange={handleNameInput} />
          <FormHelperText>띄어쓰기 없이 입력</FormHelperText>
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>password</FormLabel>
          <Input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <FormHelperText>특수기호와 숫자 하나이상 입력</FormHelperText>
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Email</FormLabel>
          <Input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <FormHelperText>email 입력</FormHelperText>
        </FormControl>

        <Button
          colorScheme={"blue"}
          isLoading={submitting}
          /*
        onClick={e => {
          axios.post("/addUser", {
            name, email, password
          }).then(response => console.log("성공"))
            .catch(error => console.log("실패"))
            .finally(() => console.log("반드시 실행"))
        }}

                 */
        >
          가입
        </Button>
      </Box>
    </Center>
  );
}

export default App;
