import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, doc, getDoc } from "firebase/firestore";
import { ref, child, get, } from "firebase/database";
import {database} from "../firebase";

const useTutor = (id) => {
  const [constructor, setConstructor] = useState({});
  const [projects, setProjects] = useState([]);
  const [tutor, setTutor] = useState({});

  useEffect(() => {

    setTutor({})
    const getTutor=async ()=>{
      await  get(child(ref(database),'Tutors/' + id+ '/user'))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            setTutor((snapshot.val()));
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }


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

    getTutor()

  }, {tutor});

  return { tutor, };
};

export default useTutor;
