import { types } from "../types/types";
import { auth } from "../firebase/firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { uiFinishLoading, uiStartLoading } from "./ui";
import Swal from "sweetalert2";
import { noteLogout } from "./notes";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(uiStartLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName));
        dispatch(uiFinishLoading());
      })
      .catch((e) => {
        dispatch(uiFinishLoading());
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    console.log();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
        Swal.fire("Error", e.message, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logout());
    dispatch(noteLogout());
  };
};

export const logout = () => ({
  type: types.logout,
});
