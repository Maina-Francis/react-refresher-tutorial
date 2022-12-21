import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return <h4>Greetings from Francis, this is my first component.</h4>;
}

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World!");
// };

export default Greeting;

ReactDOM.render(<Greeting />, document.getElementById("root"));
