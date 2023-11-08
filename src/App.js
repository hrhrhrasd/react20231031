import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      <Flex gap={"10px"}>
        {/* react router 사용시 a태그 사용 x
            Link Component 사용 */}
        <Box>
          <a href={"/apath"}>a이동</a>
        </Box>
        <Box>
          <a href={"/bpath"}>b이동</a>
        </Box>

        <Box>
          <Link to={"/apath"}>a이동</Link>
        </Box>
        <Box>
          <Link to={"/bpath"}>b이동</Link>
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
}

function AComp() {
  return <Box>A요소</Box>;
}

function BComp() {
  return <Box>B요소</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<HomeComponent />}>
        <Route path={"apath"} element={<AComp />} />
        <Route path={"bpath"} element={<BComp />} />
      </Route>
    </>,
  ),
);

function App(props) {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
