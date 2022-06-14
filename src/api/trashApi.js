import { auth, db } from "../firebase";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

const trashApi = {
  getTrash: () => {
    // TODO: Call API to get current user
    return new Promise((resolve, reject) => {
      // reject(new Error('MY CUSTOM ERROR'));
      // return;

      // Wait 500ms --> return result
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("users")
          .doc(currentUser.uid)
          .collection("trash")
          .get()
          .then((query) => {
            query.forEach((doc) => {
              const data1 = doc.data();
              data1.id = doc.id;
              a.push(data1);
            });

            resolve(a);
          });
      }, 500);
    });
  },
  addTrash: (newTrash) => {
    // TODO: Call API to get current user
    return new Promise((resolve, reject) => {
      // reject(new Error('MY CUSTOM ERROR'));
      // return;

      // Wait 500ms --> return result
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("users")
          .doc(currentUser.uid)
          .collection("trash")
          .doc(newTrash.id)
          .set(newTrash)
          .then((docReff) => {
            console.log("ok");

            const docRef = db
              .collection("users")
              .doc(currentUser.uid)
              .collection("trash")
              .get()
              .then((query) => {
                query.forEach((doc) => {
                  const data1 = doc.data();
                  data1.id = doc.id;
                  a.push(data1);
                });

                resolve(a);
              });
          });
      }, 500);
    });
  },
  deleteTrash: (Trash) => {
    // TODO: Call API to get current user
    return new Promise((resolve, reject) => {
      // reject(new Error('MY CUSTOM ERROR'));
      // return;

      // Wait 500ms --> return result
      setTimeout(() => {
        const currentUser = auth.currentUser;
        var a = [];
        const docRef = db
          .collection("users")
          .doc(currentUser.uid)
          .collection("trash")
          .doc(Trash)
          .delete()
          .then((doc) => {
            const docRef = db
              .collection("users")
              .doc(currentUser.uid)
              .collection("trash")
              .get()
              .then((query) => {
                query.forEach((doc) => {
                  const data1 = doc.data();
                  data1.id = doc.id;
                  a.push(data1);
                });

                resolve(a);
              });
          });
      }, 500);
    });
  },
};
export default trashApi;
