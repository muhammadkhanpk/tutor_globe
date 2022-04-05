import { useEffect, useState } from "react";
import { ref, child, get } from "firebase/database";
import {database} from "../firebase";

const usePendingProfiles = (document) => {
  const [projects, setProjects] = useState([]);
  const [tutorProfiles, setTutorProfiles] = useState([]);

  useEffect(() => {
    setTutorProfiles([]);

    const getTutors=async ()=>{
     await get(child(ref(database),"Tutors"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
         setTutorProfiles(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
    getTutors();
    console.log(tutorProfiles);


  }, [document]);

  return {
    tutorProfiles,
  };
};

export default usePendingProfiles;
