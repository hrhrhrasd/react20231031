import { Button, Center } from "@chakra-ui/react";

function App() {
  function handleOuterBoxClick(e) {
    e.stopPropagation();
    console.log("바깥 상자 클릭");
  }
  function handleInnerBoxClick(e) {
    e.stopPropagation();
    console.log("내부 상자 클릭");
  }
  function handleButtonClick(e) {
    e.stopPropagation();
    console.log("버튼 클릭");
  }

  return (
    <>
      <Center onClick={handleOuterBoxClick} w={"200px"} h={"200px"} bg={"aqua"}>
        <Center
          onClick={handleInnerBoxClick}
          w={"100px"}
          h={"100px"}
          bg={"sandybrown"}
        >
          <Button onClick={handleButtonClick}>button</Button>
        </Center>
      </Center>
    </>
  );
}

export default App;
