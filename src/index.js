import React from "react";
import ReactDom from "react-dom";

//CSS
import "./components/index.css";

import { books } from "./components/books";
//setup bars

/* const description =
  "Naruto has proven to the world that you have to keep triying and doing your best to be who you want to be";
const character = "Naruto";
const img =
  "https://i1.wp.com/www.mexmads.com/wp-content/uploads/2020/04/YPD3NNJ4OZFU5CLBPWHI5RVU3A.jpg?fit=980%2C528"; */

//Components
const Booklist = () => {
  //Este sería como el contedor
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>; //su propiedad es book
      })}
    </section>
  );
};

const Book = ({ img, character, description }) => {
  //las propiedades son las características de mi funcion/clase, en este caso son en forma de objeto, así que puedo desestructurar
  //event: attribute, eventHandler
  //onClick onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };

  const complexExample = (character) => {
    console.log(character);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(character);
      }}
    >
      <img src={img} width="400" alt="" />
      <h1 onClick={() => alert(character)}>
        <strong>{character}</strong>
      </h1>
      <p>{description}</p>
      <button onClick={clickHandler} type="button">
        Touch it
      </button>{" "}
      <br />
      <button type="button" onClick={() => complexExample(character)}>
        More complex example
      </button>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
