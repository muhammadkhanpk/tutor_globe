import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, where } from "firebase/firestore";
import { ref, child, get } from "firebase/database";
import {database} from "../firebase";
const useTutors = (document) => {
  const [constructors, setConstructors] = useState([]);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    setTutors([]);
    const getTutors=async ()=>{
      get(child(ref(database),"Tutors"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setTutors(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
    console.log(tutors);
    getTutors();
    // const constructorsQuery = query(
    //   collection(db, document),
    //   where("isClient", "==", false)
    // );
    // const unsubscribe = onSnapshot(constructorsQuery, (querySnapshot) => {
    //   setConstructors([]);
    //   querySnapshot.forEach((val) => {
    //     setConstructors((prev) => [...prev, val.data()]);
    //   });
    // });

    // return () => unsubscribe();
  }, [document]);

  return { tutors };
};

export default useTutors;
