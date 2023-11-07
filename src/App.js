import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";
import { m } from "framer-motion";

function CComp({ message }) {
  return <Text>{message}</Text>;
}

function AComp({ message }) {
  return <CComp message={message} />;
}

function DComp({ onTextChage }) {
  return <Input onChange={(e) => onTextChage(e.target.value)} />;
}

function BComp({ onTextChange }) {
  return <DComp onTextChage={onTextChange} />;
}

function App(props) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <AComp message={message} />
      <BComp onTextChange={setMessage} />
    </div>
  );
}

export default App;
