import React, { useEffect, useState } from "react";
// import "./Navbar.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faApple, faBars, faTimes);
function Navbar() {
  const [click, setClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showToggle, setShowToggle] = useState(false);

  const handleClick = () => {
    if (showToggle) {
      setClick(!click);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("window resize");
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("windowWidth", windowWidth);
    if (windowWidth <= 690) {
      setShowToggle(true);
    } else {
      setShowToggle(false);
    }
  }, [windowWidth]);

  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand mx-3 " to="/">
              LOGO
              <FontAwesomeIcon className="mx-1" icon={["fab", "apple"]} />
            </Link>
            {showToggle && (
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleClick}
              >
                <FontAwesomeIcon icon={click ? faTimes : faBars} />
              </button>
            )}
            <div
              className={`collapse navbar-collapse${click ? " show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/products"
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/contacts"
                  >
                    Get in touch
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </Router>
    </>
  );
}

export default Navbar;
