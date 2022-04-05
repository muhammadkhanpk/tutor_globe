// import { storage, db, auth } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import axios from "axios";

// import {
//   collection,
//   addDoc,
//   doc,
//   updateDoc,
//   setDoc,
//   serverTimestamp,
// } from "firebase/firestore";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// const addCommantries = async (
//   commantry,
//   selectedType,
//   file,
//   clientId,
//   projectId,
//   clientName,
//   width
// ) => {
//   if (file && file.name) {
//     const storageRef = ref(storage, file.name);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log("Upload is " + progress + "% done");
//         width = progress;
//       },
//       (error) => {
//         console.log(error);
//       },
//       async () => {
//         await getDownloadURL(uploadTask.snapshot.ref).then(
//           async (downloadURL) => {
//             const clientRef = `user_profile/${clientId}`;
//             const projectRef = `Projects/${projectId}`;
//             await addDoc(
//               collection(db, `${clientRef}/${projectRef}/Comments`),
//               {
//                 comment: commantry,
//                 file: downloadURL,
//                 fileType: selectedType,
//                 clientId,
//                 projectId,
//                 clientName,
//                 createdAt: serverTimestamp(),
//               }
//             )
//               .then((res) => {
//                 // console.log("Success", res);
//                 alert("Uploaded successfully");
//               })
//               .catch((err) => {
//                 console.log("error", err);
//               });
//           }
//         );
//       }
//     );
//   } else {
//     const clientRef = `user_profile/${clientId}`;
//     const projectRef = `Projects/${projectId}`;
//     await addDoc(collection(db, `${clientRef}/${projectRef}/Comments`), {
//       comment: commantry,
//       clientId,
//       projectId,
//       clientName,
//       createdAt: serverTimestamp(),
//     })
//       .then(() => {
//         alert("Uploaded successfully");
//       })
//       .catch((err) => {
//         console.log("error", err);
//       });
//   }
// };

// const updateProjectStatus = async (userId, projectId, value) => {
//   await updateDoc(doc(db, "user_profile", userId, "Projects", projectId), {
//     project_status: value,
//   });
// };

// const createConstructor = async (name, email, password) => {
//   await createUserWithEmailAndPassword(auth, email, password)
//     .then(async (userCredential) => {
//       const userId = userCredential.user.uid;
//       await setDoc(doc(db, "user_profile", userId), {
//         first_name: name,
//         email,
//         password,
//         id: userId,
//         isClient: false,
//         createdAt: serverTimestamp(),
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const sendNotification = (selectedOptions, message) => {
//   selectedOptions.forEach(async (user) => {
//     const notificationRef = `user_profile/${user.id}/notifications`;
//     await addDoc(collection(db, notificationRef), {
//       notification: message,
//       createdAt: serverTimestamp(),
//     })
//       .then((res) => {
//         console.log("Success", res);
//       })
//       .catch((err) => {
//         console.log("error", err);
//       });
//   });
// };

// const sendMail = (email, msg) => {
//   axios
//     .get("http://localhost:4000/functions/sendEmail", {
//       email: email,
//       msg: msg,
//     })
//     .then((res) => {
//       console.log("Email send Successfully");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const addConstructorToProject = (
//   constructors,
//   userId,
//   projectId,
//   projectDetails
// ) => {
//   constructors.forEach(async (constructor) => {
//     await setDoc(
//       doc(
//         db,
//         "user_profile",
//         userId,
//         "Projects",
//         projectId,
//         "Constructors",
//         constructor.id
//       ),
//       {
//         id: constructor.id,
//         name: constructor.value,
//         createdAt: serverTimestamp(),
//       }
//     );
//     await setDoc(
//       doc(db, "user_profile", constructor.id, "Projects", projectId),
//       {
//         id: constructor.id,
//         projectId: projectId,
//         clientId: userId,
//         createdAt: serverTimestamp(),
//         project_status: projectDetails.project_status,
//         name_of_project: projectDetails.name_of_project,
//       }
//     );
//   });
// };

// const makeAdmin = (selectedUsers) => {
//   selectedUsers.forEach(async (user) => {
//     await updateDoc(doc(db, "user_profile", user.id), {
//       isAdmin: true,
//       updatedAt: serverTimestamp(),
//     });
//   });
// };

// export {
//   addCommantries,
//   updateProjectStatus,
//   createConstructor,
//   sendNotification,
//   sendMail,
//   addConstructorToProject,
//   makeAdmin,
// };
