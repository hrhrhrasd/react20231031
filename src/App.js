import {
  Box,
  FormControl,
  FormLabel,
  Image,
  SimpleGrid,
  Switch,
} from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <Image src={"https://bit.ly/dan-abramov"}></Image>
      </Box>
      <Box>
        <Image boxSize={"100px"} src={"https://bit.ly/dan-abramov"} />
      </Box>
      <Box>
        <Image
          boxSize={"100px"}
          src={"https://bit.ly/dan-abramov"}
          borderRadius={"full"}
        />
      </Box>
      <Box>
        <Image
          boxSize={"100px"}
          src={"asd"}
          fallbackSrc={"https://via.placeholder.com/150"}
        />
      </Box>
    </div>
  );
}

export default App;
