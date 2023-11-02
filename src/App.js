import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Flex w={"100%"} h={"100px"} bg={"gray.300"} gap={1} align={"center"}>
        <Box bg={"gold"}>Lorem.</Box>
        <Box bg={"blue"}>Explicabo.</Box>
        <Box bg={"red"}>Consectetur.</Box>
        <Box bg={"gray"}>Dolores.</Box>
        <Box bg={"green"}>Corporis.</Box>
      </Flex>
    </>
  );
}

export default App;
