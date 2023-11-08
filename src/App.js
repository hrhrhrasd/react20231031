import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";

function App(props) {
  const [employeeId, setEmployeeId] = useState(0);
  const [employee, setEmployee] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [employeeIdList, setEmployeeIdList] = useState([]);

  useEffect(() => {
    axios.get("/api/main1/sub7").then(({ data }) => setEmployeeIdList(data));
  }, []);

  useEffect(() => {
    if (employeeId !== 0) {
      setIsLoading(true);
      axios
        .get("/api/main1/sub5?id=" + employeeId)
        .then(({ data }) => setEmployee(data))
        .catch(() => setEmployee(null))
        .finally(() => setIsLoading(false));
    }
  }, [employeeId]);

  return (
    <div>
      <Select onChange={(e) => setEmployeeId(e.target.value)}>
        {employeeIdList.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </Select>

      <Box>
        {employeeId === 0 ? (
          <Text>어서오세요</Text>
        ) : (
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
        )}
      </Box>
    </div>
  );
}

export default App;
