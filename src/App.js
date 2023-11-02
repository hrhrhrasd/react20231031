import { Box, FormControl, FormLabel, Textarea } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <FormLabel>제목</FormLabel>
          <Textarea placeholder={"내용을 입력하세요"} h={"300px"}></Textarea>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
