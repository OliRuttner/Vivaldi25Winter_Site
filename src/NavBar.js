import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar">
      <a href="https://www.best.eu.org/courses/welcome.jsp">
        <img src={require("./logo.png")} alt="Logo" className="logo" />
      </a>
      <div className="links">
        <Link className="btn" to="/">Home</Link>
        <a 
        href="https://www.best.eu.org/courses/frequentlyAskedQuestions.jsp" className="btn"
        >
          FAQ
          </a>
        <a
          href="https://www.best.eu.org/courses/howToWriteAMotivationLetter.jsp"
          className="btn"
        >
          How to Write a Motivation Letter
        </a>
        <Link className="btn" to="/testimonials">Testimonials</Link>
      </div>
      
      <div className="mobile-menu">
        {/* Hamburger menu */}
        <div
          className={`ham-menu ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Off-screen menu */}
        <div className={`off-screen-menu ${menuActive ? "active" : ""}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li>
              <a 
                href="https://www.best.eu.org/courses/frequentlyAskedQuestions.jsp"
                onClick={toggleMenu}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="https://www.best.eu.org/courses/howToWriteAMotivationLetter.jsp"
                onClick={toggleMenu}
              >
                How to Write a Motivation Letter
              </a>
            </li>
            <li><Link to="/testimonials" onClick={toggleMenu}>Testimonials</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
