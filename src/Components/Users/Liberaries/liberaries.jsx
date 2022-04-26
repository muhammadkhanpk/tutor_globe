import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useUserLiberaries from "../../../hooks/useUserLiberaries";
import { AiOutlineSearch } from "react-icons/ai";

import "./liberaries.css";
function Liberaries() {
  const { userId } = useParams();
  const [search, setSearch] = useState("");
  const { userScrapbook } = useUserLiberaries(userId);
  return (
    <div>
      <div className="table__top">
        <h2>
          Total Number of User Liberaries (
          {userScrapbook && userScrapbook.length ? userScrapbook.length : 0})
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
      <div className="row">
        {userScrapbook &&
          userScrapbook
            .filter((book, index) => {
              return (
                book.ScrapName.toLowerCase().includes(search) ||
                book.ScrapCurrency.toLowerCase().includes(search) ||
                book.ScrapCurrency.toLowerCase().includes(search) ||
                book.ScrapTitle.toLowerCase().includes(search)
              );
            })
            .map((book, index) => {
              return (
                <div className="col-sm-3" key={index}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={book.ScrapPicture}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <div className="card-title">
                        <h4>
                          <span>Country: </span>
                          {book.ScrapCountry}
                        </h4>
                      </div>
                      <p>
                        <span>Title: </span>
                        {book.ScrapTitle}
                      </p>
                      <p>
                        <span>Name: </span>
                        {book.ScrapName}
                      </p>
                      <p>
                        <span>Currency: </span>
                        {book.ScrapCurrency}
                      </p>
                      <p>
                        <span>Language: </span>
                        {book.ScrapLanguage}
                      </p>
                      <p>
                        <span>Name of Local People: </span>
                        {book.ScrapNameOfLocalPeople}
                      </p>
                      <p>
                        <span>Popular Food: </span>
                        {book.ScrapPopularFood}
                      </p>
                      <p>
                        <span>Popular Product: </span>
                        {book.ScrapPopularProduct}
                      </p>
                      <p>
                        <span>Song Listed: </span>
                        {book.ScrapSongListed}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Liberaries;
