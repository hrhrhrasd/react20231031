import { Button, useToast } from "@chakra-ui/react";

function App() {
  const toast = useToast();
  return (
    <>
      <Button
        onClick={() =>
          toast({
            title: "저장 완료",
            description: "저장 완료",
            duration: 2000,
            position: "bottom-right",
            isClosable: true,
          })
        }
      >
        토스트 띄우기
      </Button>

      <Button
        onClick={() =>
          toast({
            title: "저장 실패",
            description: "저장 실패",
            duration: 2000,
            position: "bottom-right",
            isClosable: true,
            status: "error",
          })
        }
      >
        토스트 띄우기
      </Button>
    </>
  );
}

export default App;
