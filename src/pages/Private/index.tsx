import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ProfileImageContext } from "../../contexts/ProfileImage/ProfileImageContext";

import { getPhoto } from "../../services/Photo/photo";

import { BsCameraFill } from "react-icons/bs";

import { Header } from "../../components/Header";
import { UploadProfileImageModal } from "../../components/UploadProfileImageModal";

import { Container } from "./styles";

const Private = () => {
  const [isUploadProfileImageModalOpen, setIsUploadProfileImageModalOpen] =
    useState(false);

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

  const handleOpenUploadProfileImageModal = () => {
    setIsUploadProfileImageModalOpen(true);
  };

  const handleCloseUploadProfileImageModal = () => {
    setIsUploadProfileImageModalOpen(false);
  };

  return (
    <>
      <Header />
      <Container>
        <h1>Private Page</h1>
        <div className="profile-image">
          <img src={profileImage} alt="profile image" />
          <div
            className="change-profile-image"
            onClick={handleOpenUploadProfileImageModal}
          >
            <BsCameraFill className="change-profile-image-icon" />
          </div>
        </div>

        <p>
          Name: <span>{`${user?.firstName} ${user?.lastName}`}</span>
        </p>
        <p>
          Company: <span>{user?.company}</span>
        </p>
        <p>
          Email: <span>{user?.email}</span>
        </p>
      </Container>

      <UploadProfileImageModal
        isOpen={isUploadProfileImageModalOpen}
        onRequestClose={handleCloseUploadProfileImageModal}
      />
    </>
  );
};

export { Private };
