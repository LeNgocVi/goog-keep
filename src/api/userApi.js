import firebase from "firebase";
import { auth, db } from "../firebase";
const userApi = {
  getUser: () => {
    // TODO: Call API to get current user
    return new Promise((resolve, reject) => {
      // reject(new Error('MY CUSTOM ERROR'));
      // return;

      // Wait 500ms --> return result
      setTimeout(() => {
        const currentUser = auth.currentUser;

        resolve({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
        });
      }, 500);
    });
  },
};

export default userApi;
