import { Box, FormControl, Select } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder={"선택하세요"}>
            <option value="value1">Lorem.</option>
            <option value="value2">Nemo.</option>
            <option value="value3">Fugit!</option>
            <option value="value4">Dolorem?</option>
            <option value="value5">Deserunt.</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
