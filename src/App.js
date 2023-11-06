import React from "react";
import { List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "buger", "apple", "kimchi"];
  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));
  const arr2 = ["son", "lee", "kim"];
  const arr3 = ["a", "b", "c"];
  const arr4 = [
    { id: 0, name: "라떼" },
    { id: 1, name: "에스프레소" },
  ];

  return (
    <div>
      <List>{listItems}</List>
      <p>---------------------</p>
      <List>
        {arr2.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      <List>
        {arr3.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
