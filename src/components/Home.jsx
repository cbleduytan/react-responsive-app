import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" to="/signin">
            Sign In
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/">
            Sign Up
          </a>
        </li>
      </ul>
    </>
  );
}

export default Home;
