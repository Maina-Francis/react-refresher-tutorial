import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// setup variables
const books = [
  {
    id: 1,
    author: "Colleen Hoover",
    title: "It Starts with Us: A Novel (It Ends with Us)",
    img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    author: "Michelle Obama ",
    title: "The Light We Carry: Overcoming in Uncertain Times",
    img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41HcM1yzHcL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 3,
    author: "Ina Garten",
    title: "Go-To Dinners: A Barefoot Contessa Cookbook",
    img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41zFito0fdL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
];

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

const Book = (props) => {
  // props destructuring
  const { img, title, author } = props;

  // #clickHandler function for our button
  const clickHandler = () => {
    alert("Hello Future Microsoft engineer!");
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title} </h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
      <button type="button" onClick={clickHandler}>
        Reference Handler
      </button>
    </article>
  );
};

export default BookList;

ReactDOM.render(<BookList />, document.getElementById("root"));
