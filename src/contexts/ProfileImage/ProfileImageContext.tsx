import { createContext } from "react";

export type ProfileImageContextType = {
  profileImage: string;
  setProfileImage: (profileImage: string) => void;
};

export const ProfileImageContext = createContext<ProfileImageContextType>(
  null!
);
