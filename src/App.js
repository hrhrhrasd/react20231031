import { Button } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("first")}>Lorem.</Button>
      <Button onClick={() => console.log("second")}>Beatae!</Button>
    </div>
  );
}

export default App;
