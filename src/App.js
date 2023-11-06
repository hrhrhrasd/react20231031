import React, { useState } from "react";
import { Button, Input, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const [coffees, setCoffees] = useState(["라떼"]);
  const [text, setText] = useState("");

  function handleButtonClick() {
    // coffees.push(text);
    // setCoffees(coffees);
    // 새 배열을 만들어서 set state
    const newCoffees = [...coffees];
    newCoffees.push("text");
    setCoffees(newCoffees);
  }

  return (
    <div>
      <Input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button onClick={handleButtonClick}>추가</Button>

      <List>
        {coffees.map((c, index) => {
          return <ListItem key={index}>{c}</ListItem>;
        })}
      </List>
      <List>
        {coffees.map((c, index) => (
          <ListItem key={index}>{c}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
