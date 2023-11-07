import React, { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { MessageContext } from "../App";

export function BComp() {
  // const value = useContext(MessageContext);
  // return <Text>{value.message}</Text>;
  const { message } = useContext(MessageContext);
  return <Text>{message}</Text>;
}
