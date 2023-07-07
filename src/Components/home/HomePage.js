import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../newNavbar/Navbar";
import BookCard from "../bookcard/BookCard";
import "./HomePage.css";
// import Card from "../Card";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB0TaBPQr4uVLnDpsdq22138uANTWt-awM`
      )
      .then((res) => setSearchResults(res.data.items || []))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="book-cards-container">
          {searchResults.map((book) => (
            <BookCard key={book.id} book={book} />
            // <Card />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
