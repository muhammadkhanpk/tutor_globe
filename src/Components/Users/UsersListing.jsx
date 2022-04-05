import React, { useState } from "react";
import "./Userlisting.style.css";

// icons and images
import { AiOutlineSearch } from "react-icons/ai";

// components
import UsersTable from "../Tables/UsersTable";
import Pagination from "../Pagination/Pagination";

// firebase
import useUsers from "../../hooks/useUsers";

const UsersListing = () => {
  const { users } = useUsers("Users");

  // const { clients } = useClients("user_profile");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  return (
    <>
      <div className='table__top'>
        <h2>
          Total Number of Users ({users && users.length ? users.length : 0})
        </h2>
        <div className='search'>
          <AiOutlineSearch />
          <input
            type='text'
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>
      {users.length > 0 && (
        <UsersTable
          data={users}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          searchName={search}
        />
      )}
      {users.length > 5 && !search && (
        <Pagination
          data={users}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default UsersListing;
