import { NavLink } from "react-router-dom";

import IconButton from "@mui/material/IconButton";

// ICONS
import TableRowsIcon from "@mui/icons-material/TableRows";
import CallIcon from "@mui/icons-material/Call";
import Logo from "./Logo";

const Navbar = ({ showMenu, setShowMenu }) => {
  return (
    <header
      id="home"
      className="h-20 flex items-center justify-between"
      style={{ zIndex: 500 }}
    >
      <Logo />
      <IconButton
        aria-label="menu"
        className="icon-btn-menu"
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        <TableRowsIcon style={{ fontSize: "2.5rem" }} />
      </IconButton>

      <ul className={`nav ${showMenu ? "nav-open" : ""} gap-8`}>
        {[
          { link: "/", name: "Home" },
          { link: "/services", name: "Services" },
          { link: "/contactus", name: "Contact" },
          { link: "/aboutus", name: "About" },
        ].map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            className="nav-link"
            onClick={() => setShowMenu(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>

      <div className="md:flex hidden contact-us items-center gap-4">
        <IconButton
          className="icon-btn"
          aria-label="call"
          style={{
            borderRadius: "0.5rem",
          }}
        >
          <CallIcon className="text-[#f5f8f5]" style={{ fontSize: "2rem" }} />
        </IconButton>
        <div
          className={`phone-number flex flex-col gap-1 leading-[1rem] text-sm`}
        >
          <span className="text-lg">Call Us</span>
          <span className="text-[#31374f]">+44 20 7946 0123</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
