import {
  deleteObject,
  getDownloadURL,
  list,
  ref,
  uploadBytes,
} from "firebase/storage";

import { v4 as createId } from "uuid";

import { storage } from "../../libs/firebase";

import { Photo } from "../../types/Photo";

export const getPhoto = async () => {
  let photo: Photo = { name: "", url: "" };

  const imagesFolder = ref(storage, "profile-image");

  const image = await list(imagesFolder);

  for (let i in image.items) {
    photo.url = await getDownloadURL(image.items[i]);
    photo.name = await image.items[i].name;
  }

  return photo;
};

export const insertPhoto = async (file: File) => {
  const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];

  const photo = await getPhoto();

  if (photo.url !== "") {
    deletePhoto(photo.name);
  }

  const profileImage: Photo = {
    name: "",
    url: "",
  };

  if (allowedFormats.includes(file.type)) {
    const randomName = createId();

    let newFile = ref(storage, `profile-image/${randomName}`);
    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref);

    (profileImage.name = upload.ref.name), (profileImage.url = photoUrl);
  }

  return profileImage;
};

export const deletePhoto = async (name: string) => {
  let photoRef = ref(storage, `profile-image/${name}`);

  await deleteObject(photoRef);
};
