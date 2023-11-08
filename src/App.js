import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";

function App(props) {
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/main1/sub5?id=" + employeeId)
      .then(({ data }) => setEmployee(data))
      .catch(() => setEmployee(null))
      .finally(() => setIsLoading(false));
  }, [employeeId]);
  return (
    <div>
      <Select onChange={(e) => setEmployeeId(e.target.value)}>
        <option value="-1">-1</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Select>
      <Box>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {employee === null ? (
              <Text>조회 직원 없음</Text>
            ) : (
              <Text>직원 이름 : {employee}</Text>
            )}
          </>
        )}
      </Box>
    </div>
  );
}

export default App;
