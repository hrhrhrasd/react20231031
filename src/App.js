import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ address, onChangeText }) {
  return (
    <div>
      <Input
        value={address}
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
      />
    </div>
  );
}

function MyText({ address }) {
  return (
    <Box>
      <Text>{address}</Text>
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("");

  return (
    <div>
      <MyInput
        address={address}
        onChangeText={(text) => {
          setAddress(text);
        }}
      />
      <MyText address={address} />
    </div>
  );
}

export default App;
