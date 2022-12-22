import React from "react";
import ReactDOM from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg"
      alt="Book image"
    />
  );
};

const Title = () => {
  return <h1>It Starts with Us: A Novel (It Ends with Us) </h1>;
};

const Author = () => {
  return <h4>Colleen Hoover</h4>;
};

export default BookList;

ReactDOM.render(<BookList />, document.getElementById("root"));
