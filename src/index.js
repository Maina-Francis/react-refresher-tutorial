import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>This is a book.</article>;
};

export default BookList;

ReactDOM.render(<BookList />, document.getElementById("root"));
