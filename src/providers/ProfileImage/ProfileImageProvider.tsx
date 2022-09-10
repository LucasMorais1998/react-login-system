import { useEffect, useState } from "react";

import { ProfileImageContext } from "../../contexts/ProfileImage/ProfileImageContext";

export const ProfileImageProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [profileImage, setProfileImage] = useState<string>(
    "https://placehold.jp/150x150.png"
  );

  useEffect(() => {
    setProfileImage(profileImage)
  }, [profileImage]);

  return (
    <ProfileImageContext.Provider value={{ profileImage, setProfileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};
