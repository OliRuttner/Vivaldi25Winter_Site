import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById("testimonials");
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <a href="https://www.best.eu.org/courses/welcome.jsp" target="_blank" rel="noopener noreferrer">
        <img src={require("./logo.png")} alt="Logo" className="logo" />
      </a>
      <div className="links">
        <Link to="/" className="button">Home</Link>
        <a
          href="https://www.best.eu.org/courses/frequentlyAskedQuestions.jsp" target="_blank"
          className="button"
        >
          FAQ
          </a>
        <a
          href="https://www.best.eu.org/courses/howToWriteAMotivationLetter.jsp" target="_blank"
          className="button"
        >
          How to Write a Motivation Letter
        </a>
        <Link to="/" onClick={scrollToTestimonials} className="button">Testimonials</Link>
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
                onClick={toggleMenu} target="_blank"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="https://www.best.eu.org/courses/howToWriteAMotivationLetter.jsp"
                onClick={toggleMenu} target="_blank"
              >
                How to Write a Motivation Letter
              </a>
            </li>
            <li><Link to="/" onClick={() => { scrollToTestimonials(); toggleMenu(); }}>Testimonials</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
