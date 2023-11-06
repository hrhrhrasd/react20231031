import React, { useState } from "react";
import { Button, List, ListItem, OrderedList } from "@chakra-ui/react";

function App(props) {
  const [itmes, setItmes] = useState([]);

  function handleButtonClick(menu) {
    setItmes([...itmes, menu]);
  }

  return (
    <div>
      <Button onClick={() => handleButtonClick("커피")}>커피</Button>
      <Button onClick={() => handleButtonClick("케잌")}>케잌</Button>
      <Button onClick={() => handleButtonClick("아이스크림")}>
        아이스크림
      </Button>
      <Button onClick={() => handleButtonClick("크로아상")}>크로아상</Button>
      <Button onClick={() => handleButtonClick("단팥빵")}>단팥빵</Button>
      <OrderedList>
        {itmes.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </OrderedList>
    </div>
  );
}

export default App;
