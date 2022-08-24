import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhf9VqTM2P_JWLhqnVd-mb54tW9LnFKtY",
  authDomain: "ropa-a-tu-mano.firebaseapp.com",
  projectId: "ropa-a-tu-mano",
  storageBucket: "ropa-a-tu-mano.appspot.com",
  messagingSenderId: "332168564324",
  appId: "1:332168564324:web:b4fbba1028e40048c61971",
  measurementId: "G-EVH60YZVYV"
};

export const useFirebase = () => {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  getAuth(app);
};
