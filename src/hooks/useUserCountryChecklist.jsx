import { child, get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";

function useUserCountryChecklist(id) {
  const [countryChecklist, setCountryChecklist] = useState([]);
  useEffect(() => {
    const getAllCountryChecklists = async () => {
      await get(child(ref(database), "Users/" + id + "/user/countries")).then(
        (snapshot) => {
          if (snapshot.exists()) {
            snapshot.forEach((childSnap) => {
              //for id
              const id = childSnap.key;
              const data = childSnap.val();
              //console.log("abc", data.ScrapCountry);
              setCountryChecklist((pre) => [...pre, data]);
              //console.log(countryChecklist);
            });
          } else {
            console.log("No data is available iii");
          }
        }
      );
    };
    getAllCountryChecklists();
  }, [id]);
  return countryChecklist;
}

export default useUserCountryChecklist;
