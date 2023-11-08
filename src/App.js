import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<Box>home</Box>} />
      <Route path={"/path1"} element={<Box>경로1</Box>} />
      <Route path={"/path2"} element={<Box>경로2</Box>} />
      <Route path={"/path3"} element={<Box>경로3</Box>} />
      <Route path={"/main1/path4"} element={<Box>경로4</Box>} />
      <Route path={"/main1/path5"} element={<Box>경로5</Box>} />
      <Route path={"/main2"}>
        <Route path={"path1"} element={<Box>경로2-1</Box>} />
        <Route path={"path2"} element={<Box>경로2-2</Box>} />
      </Route>
    </>,
  ),
);

function App(props) {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
