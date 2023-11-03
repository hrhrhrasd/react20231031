import * as PropTypes from "prop-types";
import { Box, Button, FormControl } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    <FormControl>
      <Button as={"a"} href={to}>
        {children}
      </Button>
    </FormControl>
  );
}

function App() {
  return (
    <>
      <MyLink to={"https://www.naver.com"}>to naver</MyLink>
      <MyLink to={"https://www.daum.net"}>to daum</MyLink>
    </>
  );
}

export default App;
