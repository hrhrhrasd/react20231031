import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Circle,
  Flex,
  Heading,
  SimpleGrid,
  Square,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Center bg={"red"}>
        <Square bg={"blue"} w={"100px"} h={"100px"}>
          Lorem.
        </Square>
      </Center>
      <Center bg={"red.200"} h={"200px"}>
        <Circle bg={"blue"} size={"100px"}>
          <LockIcon></LockIcon>
        </Circle>
      </Center>
    </>
  );
}

export default App;
