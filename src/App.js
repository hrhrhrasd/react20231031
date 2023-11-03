import React from "react";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";

function MyBox({ color, hbg, bbg, children, w }) {
  return (
    <>
      <Card bg="blue">
        <CardHeader>Lorem.</CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
}

function App(props) {
  return (
    <div>
      <MyBox hbg={"green"} bbg={"blue"} color={"yellow"} w={"200px"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        alias beatae corporis, excepturi ipsum similique?
      </MyBox>
      <Card bg={"red"}>
        <CardBody>asdsadsad</CardBody>
      </Card>
    </div>
  );
}

export default App;
