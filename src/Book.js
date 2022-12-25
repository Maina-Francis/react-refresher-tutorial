import React from "react";

const Book = (props) => {
  // props destructuring
  const { img, title, author } = props;

  // #clickHandler function for our button
  const clickHandler = () => {
    alert("Hello Future Microsoft engineer!");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
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
      <button type="button" onClick={() => complexExample(author)}>
        {" "}
        More Complex Example
      </button>
    </article>
  );
};

export default Book;
