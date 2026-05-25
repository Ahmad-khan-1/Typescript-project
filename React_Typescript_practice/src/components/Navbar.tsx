import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        backgroundColor: "black",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Home
      </Link>

      <Link
        to="/about"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        About
      </Link>

      <Link
        to="/contact"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
