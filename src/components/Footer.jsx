import XIcon from "@mui/icons-material/X";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="up-footer">
        <div className="logo-section">
          <Logo />
          <p>
            Archi Carpenter is a London woodworking studio building custom
            furniture, fitted kitchens, doors and staircases since 2006. Every
            piece is designed, made and installed by our own craftsmen to suit
            your home and last for generations.
          </p>
        </div>

        <div className="latest-news">
          <h2>Latest News</h2>
          <ul>
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Essentials Interior Design Tips
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Functional Wall-to-Wall Shelves
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />9 Ways to Display
              Your TV
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />5 Secrets to
              Minimal Design
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Make a Huge Impact With Multiples
            </li>
            <hr />
          </ul>
        </div>

        <div className="contact-us">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              18 Timberyard Lane, London SE1, UK
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Phone: +44 20 7946 0123
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Hours: Mon–Sat, 8am to 6pm
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Email: hello@archicarpenter.co.uk
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Web: www.archicarpenter.co.uk
            </li>
            <hr />
          </ul>
        </div>

        <div className="our-services">
          <h2>Our Services</h2>
          <ul>
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Home Renovation Projects
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Commercial Carpentry
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Wood Repair & Restoration
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Woodworking and Detailing
            </li>
            <hr />
            <li>
              <KeyboardDoubleArrowRightIcon className="icon" />
              Exterior Enhancements
            </li>
            <hr />
          </ul>
        </div>
      </div>

      <div className="down-footer flex items-center justify-between bg-[#2d3243]">
        <div className="left font-normal">
          <span>© 2025 Archi Carpenter. All rights reserved.</span>
        </div>
        <div className="right">
          <IconButton className="footer-icon-btn">
            <XIcon className="icon" />
          </IconButton>
          <IconButton className="footer-icon-btn">
            <GoogleIcon className="icon" />
          </IconButton>
          <IconButton className="footer-icon-btn">
            <InstagramIcon className="icon" />
          </IconButton>
          <IconButton className="footer-icon-btn">
            <LinkedInIcon className="icon" />
          </IconButton>
          <IconButton className="footer-icon-btn">
            <YouTubeIcon className="icon" />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
