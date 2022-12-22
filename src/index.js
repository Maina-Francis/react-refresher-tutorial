import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// setup variables
const firstBook = {
  author: "Colleen Hoover",
  title: "It Starts with Us: A Novel (It Ends with Us)",
  img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg",
};

const secondBook = {
  author: "Michelle Obama ",
  title: "The Light We Carry: Overcoming in Uncertain Times",
  img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/41HcM1yzHcL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />

      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = (props) => {
  // console.log(props);
  // props destructuring
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title} </h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
    </article>
  );
};

export default BookList;

ReactDOM.render(<BookList />, document.getElementById("root"));
