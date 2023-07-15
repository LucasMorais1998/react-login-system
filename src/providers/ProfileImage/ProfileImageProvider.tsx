import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../contexts/Auth/AuthContext';
import { ProfileImageContext } from '../../contexts/ProfileImage/ProfileImageContext';

export const ProfileImageProvider = ({ children }: { children: JSX.Element }) => {
  const [profileImage, setProfileImage] = useState<string>('https://placehold.jp/150x150.png');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setProfileImage(profileImage);

    if (user?.profileImage) user.profileImage = profileImage;
  }, [profileImage]);

  return (
    <ProfileImageContext.Provider value={{ profileImage, setProfileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};
