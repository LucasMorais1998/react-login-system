import Modal from "react-modal";

import { FaPen, FaTrashAlt, FaWindowClose } from "react-icons/fa";

import { Container, CustomLabel, ModalOptions } from "./styles";

interface IUploadProfileImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const UploadProfileImageModal = ({
  isOpen,
  onRequestClose,
}: IUploadProfileImageModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <FaWindowClose onClick={onRequestClose} className="react-modal-close" />

      <Container>
        <img src="https://placehold.jp/150x150.png" alt="" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quae.
        </p>

        <ModalOptions>
          <CustomLabel htmlFor="input-image">
            <FaPen className="change-image-icon" />
            <input type="file" id="input-image" />
          </CustomLabel>

          <FaTrashAlt className="delete-image-icon" />
        </ModalOptions>
      </Container>
    </Modal>
  );
};

export { UploadProfileImageModal };
