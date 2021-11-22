import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="auto" maxW="900px" maxH="600px" background="pGray.800">
        <ModalBody m="0" p="0">
          <Image src={imgUrl} objectFit="contain" />
        </ModalBody>
        <ModalFooter
          borderBottomLeftRadius="5px"
          borderBottomEndRadius="5px"
          display="flex"
          justifyContent="flex-start"
          background="pGray.800"
          px="0.5rem"
          py="0.6rem"
          h="32px"
        >
          <Link
            href={imgUrl}
            color="pGray.50"
            fontSize=".8rem"
            isExternal
            fontWeight="700"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
