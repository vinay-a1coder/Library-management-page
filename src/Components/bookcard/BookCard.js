import React from "react";
import "./BookCard.css";

export const BookCard = ({ book }) => {
  const { volumeInfo } = book;

  return (
    <div className="book-card">
      <div className="book-thumbnail">
        <img
          src={volumeInfo?.imageLinks?.thumbnail}
          alt={volumeInfo?.title}
        />
      </div>
      <div className="book-details">
        <h3 className="book-title">{volumeInfo?.title}</h3>
        <p className="book-author">By: {volumeInfo?.authors?.join(", ")}</p>
        {/* <p className="book-description">{volumeInfo?.description}</p> */}
      </div>
    </div>
  );
};

export default BookCard;
