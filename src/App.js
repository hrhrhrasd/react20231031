import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";

function HomeComponent() {
  // 경로 이동시 useNavigate hook 사용
  const navigate = useNavigate();
  return (
    <Box>
      <Flex gap={"10px"}>
        <Box>
          <Button onClick={() => (window.location.href = "/apath")}>
            a로 이동
          </Button>
        </Box>
        <Box>
          <Button onClick={() => (window.location.href = "/bpath")}>
            b로 이동
          </Button>
        </Box>

        <Box>
          <Button onClick={() => navigate("/apath")}>a로 이동</Button>
        </Box>
        <Box>
          <Button onClick={() => navigate("/bpath")}>b로 이동</Button>
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
