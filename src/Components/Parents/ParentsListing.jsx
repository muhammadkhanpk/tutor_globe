import React, { useState } from "react";
import "./parentslisting.style.css";

// icons and images
import { AiOutlineSearch } from "react-icons/ai";

// components
import ParentsTable from "../Tables/ParentsTable";
import Pagination from "../Pagination/Pagination";

// firebase
import useParents from "../../hooks/useParents";

const ParentsListing = () => {
const { parents } = useParents("Parents");

  // const { clients } = useClients("user_profile");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  return (
    <>
      <div className="table__top">
        <h2>
         Total Number of Parents (
          {parents && parents.length ? parents.length : 0})
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
      {parents.length > 0 && (
        <ParentsTable
          data={parents}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          searchName={search}
        />
      )}
      {parents.length > 5 && !search && (
        <Pagination
          data={parents}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default ParentsListing;
