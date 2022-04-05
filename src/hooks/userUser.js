import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, doc, getDoc } from "firebase/firestore";
import { ref, child, get } from "firebase/database";
import { database } from "../firebase";

const useUser = (id) => {
  const [constructor, setConstructor] = useState({});
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({});
    const getUser = async () => {
      await get(child(ref(database), "Users/" + id + "/user"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            setUser(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    // setConstructor({});
    // const getConstructor = async () => {
    //   const snap = await getDoc(doc(db, "user_profile", id));

    //   if (snap.exists()) {
    //     setConstructor(snap.data());
    //   } else {
    //     console.log("No such document");
    //   }
    // };

    // const getProjects = async () => {
    //   const projectsQuery = query(
    //     collection(db, `user_profile/${id}/Projects`)
    //   );
    //   onSnapshot(projectsQuery, (projectsQuerySnapshot) => {
    //     setProjects([]);
    //     projectsQuerySnapshot.forEach((projectVal) => {
    //       setProjects((prev) => [
    //         ...prev,
    //         {
    //           id: projectVal.id,
    //           projectData: projectVal.data(),
    //         },
    //       ]);
    //     });
    //   });
    // };

    // getConstructor();
    // getProjects();

    getUser();
  }, [id]);

  return { user };
};

export default useUser;
