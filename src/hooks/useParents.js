import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, where } from "firebase/firestore";
import { ref, child, get } from "firebase/database";
import {database} from "../firebase";
const useParents = (document) => {
  const [clients, setClients] = useState([]);
  const [parents, setParents] = useState([]);

  useEffect(() => {

    setParents([]);
    const getParents=async ()=>{
      get(child(ref(database),"Parents"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setParents(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
    console.log(parents);
getParents();
    // const clientsQuery = query(
    //   collection(db, document),
    //   where("isClient", "==", true)
    // );
    // const unsubscribe = onSnapshot(clientsQuery, (querySnapshot) => {
    //   querySnapshot.forEach((val) => {
    //     setClients((prev) => [...prev, val.data()]);
    //   });
    // });

    // return () => unsubscribe();
  }, [document]);

  return { parents };
};

export default useParents;
