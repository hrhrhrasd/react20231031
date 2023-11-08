import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box>
        <button onClick={() => navigate("/path1?id=1")}>1번 고객 조회</button>
        <button onClick={() => navigate("/path1?id=2")}>2번 고객 조회</button>
        <button onClick={() => navigate("/path1?id=3")}>3번 고객 조회</button>

        <button onClick={() => navigate("/path2/seoul")}>seoul 조회</button>
        <button onClick={() => navigate("/path2/busan")}>busan 조회</button>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

function AComp() {
  // query string 을 얻기
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("id"));
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    axios
      .get("/api/main1/sub4?" + searchParams.toString())
      .then(({ data }) => setCustomer(data))
      .catch(() => setCustomer(null));
  }, [searchParams]);

  return (
    <Box>
      {customer === null ? (
        <Text>조회 결과 없음</Text>
      ) : (
        <Text>
          {searchParams.get("id")} 번 고객 : {customer.customerName}
        </Text>
      )}
    </Box>
  );
}

function BComp() {
  // dynamic param을 얻는 hook
  const params = useParams();
  return <Box>{params.address}</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<Home />}>
      <Route path={"path1"} element={<AComp />} />
      {/* dynamic param : spring web mvc 의 path variable 과 유사 */}
      <Route path={"path2/:address"} element={<BComp />} />
    </Route>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
