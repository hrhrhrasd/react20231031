import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { useImmer } from "use-immer";

function App(props) {
  const [person1, setPerson1] = useState({
    name: "son",
    city: "seoul",
    email: "son@gmail",
  });

  const [person2, updatePerson2] = useImmer({
    name: "kim",
    city: "jeju",
    email: "kim@gmail",
  });

  return (
    <div>
      <Box>
        <Input
          value={person1.name}
          onChange={(e) => {
            setPerson1({ ...person1, name: e.target.value });
          }}
        />
        <Text>이름 : {person1.name}</Text>

        <Input
          value={person1.city}
          onChange={(e) => {
            setPerson1({ ...person1, city: e.target.value });
          }}
        />
        <Text>도시 : {person1.city}</Text>

        <Input
          value={person1.email}
          onChange={(e) => {
            setPerson1({ ...person1, email: e.target.value });
          }}
        />
        <Text>메일 : {person1.email}</Text>
      </Box>

      <Box>
        <Input
          value={person2.name}
          onChange={(e) => {
            updatePerson2((draft) => {
              draft.name = e.target.value;
            });
          }}
        />
        <Text>이름 : {person2.name}</Text>

        <Input
          value={person2.city}
          onChange={(e) => {
            updatePerson2((draft) => {
              draft.city = e.target.value;
            });
          }}
        />
        <Text>도시 : {person2.city}</Text>

        <Input
          value={person2.email}
          onChange={(e) => {
            updatePerson2((draft) => {
              draft.email = e.target.value;
            });
          }}
        />
        <Text>메일 : {person2.email}</Text>
      </Box>
    </div>
  );
}

export default App;
