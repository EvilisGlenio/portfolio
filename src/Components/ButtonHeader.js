import { Button, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";


export default function ButtonHeader(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onClose();
  }, [onClose]);


  return (
    <Button
      margin="0.5"
      size="md"
      variant="ghost"
      color="current"
      w={{ base: "100%" }}
      onClick={() => props.onClose && props.onClose()}
    >
      {props.content}
    </Button>
  );
}
