import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { ref, child, get } from "firebase/database";
import {database} from "../firebase";

const useProfileDetails = (id) => {

  const [projectDetails, setProjectDetails] = useState({});
  const [clientDetails, setClientDetails] = useState({});
  const [tutorProfile, setTutor] = useState({});
  useEffect(async() => {
    setProjectDetails({});
    setClientDetails("");

    setTutor({})

    const getTutor=async ()=>{
      await  get(child(ref(database),'Tutors/' +id+ '/user'))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val(),"Tutor");


           setTutor({...snapshot.val()});

          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }

    await  getTutor();


console.log(tutorProfile,"jajaajjajajaj");

    // Getting client name
    // const getClient = async () => {
    //   const clientSnap = await getDoc(doc(db, "user_profile", userId));

    //   if (clientSnap.exists()) {
    //     setClientDetails(clientSnap.data());
    //   } else {
    //     console.log("No such document");
    //   }
    // };

    // Getting project details
    // const getProjectDetails = async () => {
    //   const projectSnap = await getDoc(
    //     doc(db, "user_profile", userId, "Projects", projectId)
    //   );

    //   if (projectSnap.exists()) {
    //     setProjectDetails(projectSnap.data());
    //   } else {
    //     console.log("No such document");
    //   }
    // };

    // getClient();
    // getProjectDetails();

  }, [id]);

  return {tutorProfile };
};

export default useProfileDetails;
