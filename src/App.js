import React, { useState } from "react";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";

function App(props) {
  const [items, setItems] = useState([]);

  function handleButtonClick(menu) {
    setItems([...items, menu]);
  }

  function handleRemoveButtonClick(index) {
    setItems([...items].filter((item, i) => i !== index));
    // const nextItems = [...items];
    // nextItems.splice(index, 1);
    // setItems(nextItems);
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("커피")}>커피</Button>
      <Button onClick={() => handleButtonClick("케잌")}>케잌</Button>
      <Button onClick={() => handleButtonClick("아이스")}>아이스</Button>
      <Box>
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item}
              {index}
              <Button onClick={() => handleRemoveButtonClick(index)}>
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
