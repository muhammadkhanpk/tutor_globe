import { initializeApp } from "firebase/app";
// import * as firebase from "firebase";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "@firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAce-gtMJ273QgQbLbWL0cv2Hu548Y5G1o",
  authDomain: "globetrotters-ca141.firebaseapp.com",
  databaseURL: "https://globetrotters-ca141-default-rtdb.firebaseio.com",
  projectId: "globetrotters-ca141",
  storageBucket: "globetrotters-ca141.appspot.com",
  messagingSenderId: "659386832351",
  appId: "1:659386832351:web:c2c52f5b231c699007a06a",
};
// var firebaseConfig = {
//   apiKey: "AIzaSyA0qneQNfuD2dfSvI1aEBc9kWVcIITYtLk",
//   authDomain: "mzaka-76a35.firebaseapp.com",
//   databaseURL: "https://mzaka-76a35-default-rtdb.firebaseio.com",
//   projectId: "mzaka-76a35",
//   storageBucket: "mzaka-76a35.appspot.com",
// };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth, app, database };
