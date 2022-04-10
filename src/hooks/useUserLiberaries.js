import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, query, collection, doc, getDoc } from "firebase/firestore";
import { ref, child, get } from "firebase/database";
import { database } from "../firebase";

const useUserLiberaries = (id) => {
  const [constructor, setConstructor] = useState({});
  const [projects, setProjects] = useState([]);
  const [userScrapbook, setUserScrapbook] = useState([]);

  useEffect(() => {
    //setUserScrapbook([]);
    const getUserScrapbook = async () => {
      await get(child(ref(database), "Users/" + id + "/user/scrapbook"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserScrapbook(Object.values(snapshot.val()));
            //console.log(userScrapbook);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getUserScrapbook();
  }, [id]);

  return { userScrapbook };
};

export default useUserLiberaries;
