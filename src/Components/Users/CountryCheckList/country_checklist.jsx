import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useParams, useHistory } from "react-router-dom";
import useUserCountryChecklist from "../../../hooks/useUserCountryChecklist";
import "./country_checklist.css";
function CountryCheckList() {
  const { userId } = useParams();
  const history = useHistory();
  const countryChecklist = useUserCountryChecklist(userId);
  //console.log("country checklists by khan", countryChecklist);
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="table__top">
        <h2>
          Total Number of User Country CheckList ({countryChecklist.length})
        </h2>
        <div className="search">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>
      <div className="country_row">
        {countryChecklist
          .filter((country) => country.Country.toLowerCase().includes(search))
          .map((country, index) => {
            return (
              <div
                className="country_card"
                key={index}
                onClick={() =>
                  history.push({
                    pathname: "/questionare/" + userId,
                    state: { country },
                  })
                }
              >
                <h3>
                  {country.Country}
                  <span> {Math.round(country.percentage)}%</span>
                </h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CountryCheckList;
