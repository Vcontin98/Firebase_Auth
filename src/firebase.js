import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWAFBiw_PnPkX10-3Eu8PeV4X97TvLlbU",
  authDomain: "fir-auth-909fe.firebaseapp.com",
  projectId: "fir-auth-909fe",
  storageBucket: "fir-auth-909fe.appspot.com",
  messagingSenderId: "515798411127",
  appId: "1:515798411127:web:8c644e22cc17e554232372"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};