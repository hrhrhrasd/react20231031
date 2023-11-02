import {
  Box,
  FormControl,
  FormLabel,
  SimpleGrid,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl as={SimpleGrid} columns={2}>
          <FormLabel>동의하기</FormLabel>
          <Switch />
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
