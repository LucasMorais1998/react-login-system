import { FormEvent, useContext, useEffect, useState } from "react";

import Modal from "react-modal";

import loadingImg from "../../assets/images/loading.jpg";

import { FaPen, FaTrashAlt, FaWindowClose } from "react-icons/fa";

import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ProfileImageContext } from "../../contexts/ProfileImage/ProfileImageContext";

import { getPhoto, insertPhoto } from "../../services/Photo/photo";

import { Container, CustomLabel, ModalOptions } from "./styles";

interface IUploadProfileImageModalProps {
  isOpen: boolean;

  onRequestClose: () => void;
}

const UploadProfileImageModal = ({
  isOpen,

  onRequestClose,
}: IUploadProfileImageModalProps) => {
  const [hasImage, setHasImage] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const { user } = useContext(AuthContext);
  const { profileImage, setProfileImage } = useContext(ProfileImageContext);

  useEffect(() => {
    (async () => {
      const dataBaseImage = await getPhoto();

      if (dataBaseImage.url !== "") {
        setProfileImage(dataBaseImage.url);
      }
    })();
  }, [profileImage]);

  const handleImageSubit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setHasImage(true);

    const formDate = new FormData(e.currentTarget);
    const file = formDate.get("image") as File;

    if (file) {
      setIsUploading(true);

      let { url } = await insertPhoto(file);

      setIsUploading(false);

      if (user?.profileImage === undefined) {
        user!.profileImage = url;

        setProfileImage(user!.profileImage);
      }

      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <FaWindowClose onClick={onRequestClose} className="react-modal-close" />

      <Container isUploading={isUploading}>
        <img src={isUploading ? loadingImg : profileImage} alt="" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          quae.
        </p>

        <ModalOptions onSubmit={handleImageSubit}>
          <CustomLabel htmlFor="input-image">
            <FaPen className="change-image-icon" />
            <input
              type="file"
              id="input-image"
              name="image"
              onInput={() => setHasImage(true)}
            />
          </CustomLabel>

          <FaTrashAlt className="delete-image-icon" />

          {hasImage && (
            <input className="submit-image-icon" type="submit" value="Enviar" />
          )}
        </ModalOptions>
      </Container>
    </Modal>
  );
};

export { UploadProfileImageModal };
