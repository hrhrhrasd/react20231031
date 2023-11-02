import React from "react";
import {
  Box,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Center>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
            <FormHelperText>띄어쓰기 없이 입력</FormHelperText>
          </FormControl>
        </Box>
      </Center>
      <Center m={"50px"}>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>선택</FormLabel>
            <RadioGroup>
              <Flex gap={5}>
                <Radio value={"value1"}>Lorem.</Radio>
                <Radio value={"value2"}>Consequatur?</Radio>
                <Radio value={"value3"}>Aliquid?</Radio>
                <Radio value={"value4"}>Quae.</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>
        </Box>
      </Center>
      <Center m={"50px"}>
        <Box w={"480px"}>
          <FormControl>
            <FormLabel>여러개 선택</FormLabel>
            <Flex gap={5}>
              <Checkbox>Lorem.</Checkbox>
              <Checkbox>Labore?</Checkbox>
              <Checkbox>Rerum!</Checkbox>
            </Flex>
          </FormControl>
        </Box>
      </Center>
    </div>
  );
}

export default App;
