import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";

import { v4 as createId } from "uuid";

import { storage } from "../libs/firebase";

import { Photo } from "../types/Photo";
