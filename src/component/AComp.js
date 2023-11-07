import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { MessageContext } from "../App";

export function AComp() {
  const value = useContext(MessageContext);
  return (
    <Button onClick={() => value.setMessage("바뀐 메시지")}>
      {" "}
      메시지 변경하기{" "}
    </Button>
  );
}
