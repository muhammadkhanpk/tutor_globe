import React, { useState } from "react";
import "./tutorslisting.style.css";

// icons and images
import { AiOutlineSearch } from "react-icons/ai";

// data
import EmptyBtn from "../Buttons/EmptyBtn";
import ConstructorModal from "../Modals/TutorsModal";
import ToutorTable from "../Tables/TutorsTable";

// firebase
import useTutors from "../../hooks/useTutors";
import Pagination from "../Pagination/Pagination";
import { tutorData } from "./tutorData";
const TutorsListing = () => {
  // const constructors=tutorData;
  const [modal, setModal] = useState(false);
  // const { constructors } = useConstructors("user_profile");
  const { tutors } = useTutors("Tutors");

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
console.log(tutors);
  const openModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      {modal && <ConstructorModal setModal={setModal} />}
      <div className="constructors">
        <div className="table__top">
          <h2>
            Total Number of Tutors (
            {tutors && tutors.length > 0 ? tutors.length : 0})
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
        {/* <EmptyBtn
          size="large"
          title="Create a new"
          handleClick={openModal}
        /> */}
        <ToutorTable
          data={tutors}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          searchName={search}
        />
        {tutors && tutors.length > 5 && !search && (
          <Pagination
            data={tutors}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default TutorsListing;
