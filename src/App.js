import React, { useState } from "react";
import * as PropTypes from "prop-types";
import { Box, Input, Text } from "@chakra-ui/react";

function MyInput({ value, onChangeText }) {
  return (
    <div>
      <Input
        value={value}
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
      />
    </div>
  );
}

function MyText({ text }) {
  return (
    <Box>
      <Text>{text}</Text>
    </Box>
  );
}

function App(props) {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <MyInput
        value={address}
        onChangeText={(text) => {
          setAddress(text);
        }}
      />
      <MyText text={address} />
      <hr />
      <MyInput
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <MyText text={email} />
    </div>
  );
}

export default App;
