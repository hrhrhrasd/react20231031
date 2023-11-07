import React from "react";
import { useImmer } from "use-immer";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";

let nextId = 0;
function App(props) {
  const [items, updateItems] = useImmer([]);

  function handleButtonClick(todo) {
    updateItems((draft) => {
      draft.push({ id: nextId, done: false, text: todo });
      nextId++;
      console.log(nextId);
    });
  }

  function handleDoneButtonClick(id) {
    updateItems((draft) => {
      const target = draft.find((elem) => elem.id === id);
      target.done = !target.done;
    });
  }

  function handleRemoveButtonClick(id) {
    updateItems((draft) => {
      for (let i = 0; i < draft.length; i++) {
        if (draft[i].id === id) {
          draft.splice(i, 1);
          break;
        }
      }
    });
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("자바공부")}>자바공부</Button>
      <Button onClick={() => handleButtonClick("점심먹기")}>점심먹기</Button>
      <Button onClick={() => handleButtonClick("잠자기")}>잠자기</Button>

      <Box>
        <UnorderedList>
          {items.map((item) => (
            <ListItem
              key={item.id}
              textDecoration={item.done ? "line-through" : "none"}
            >
              {item.text}
              <Button onClick={() => handleDoneButtonClick(item.id)}>
                완료
              </Button>
              <Button onClick={() => handleRemoveButtonClick(item.id)}>
                삭제
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;
