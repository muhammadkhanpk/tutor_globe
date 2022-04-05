import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, doc, getDoc } from "firebase/firestore";
import { ref, child, get } from "firebase/database";
import {database} from "../firebase";

const useParent = (id) => {
  const [client, setClient] = useState({});
  const [projects, setProjects] = useState([]);
  const [parent, setParent] = useState({});

  useEffect(() => {

setParent({});

    const getParent=async ()=>{
    await  get(child(ref(database),'Parents/' + id+ '/user'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        setParent((snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }





    // const getClient = async () => {
    //   const snap = await getDoc(doc(db, "user_profile", id));

    //   if (snap.exists()) {
    //     setClient(snap.data());
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

    // getClient();
    // getProjects();
    getParent();
  }, [id]);

  return {  parent };
};

export default useParent;
