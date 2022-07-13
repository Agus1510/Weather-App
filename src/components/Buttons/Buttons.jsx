import React from "react";
import "./buttons.css";
import { Link } from "react-router-dom";

function Nave() {
  return (
    <>
      <Link to="/" className="button">
        Home
      </Link>
      <a
        href="https://github.com/Agus1510"
        className="button"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </>
  );
}

export default Nave;
