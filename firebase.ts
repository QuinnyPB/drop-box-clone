import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrvxkjokdP1wZnX-xhw3kFNztIsvx3DU4",
  authDomain: "dropbox-clone-42e9a.firebaseapp.com",
  projectId: "dropbox-clone-42e9a",
  storageBucket: "dropbox-clone-42e9a.appspot.com",
  messagingSenderId: "634835450531",
  appId: "1:634835450531:web:7a930b6a5b8d46db49dd16",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
