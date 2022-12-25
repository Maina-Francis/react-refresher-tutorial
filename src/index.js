import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./booksData";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // console.log(book);
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

export default BookList;

ReactDOM.render(<BookList />, document.getElementById("root"));
