import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>모달 열기</Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset={"slideInBottom"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>모달의 제목</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            aperiam assumenda consequatur cupiditate enim id illum itaque labore
            minima molestiae mollitia officia placeat quia, quisquam reiciendis,
            repellat voluptatem. Nam, vero!
          </ModalBody>
          <ModalFooter>
            <Button colorSchem={"blue"} onClick={onClose}></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
