import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <InstagramIcon />
        <TwitterIcon /> */}
        {/* <FacebookIcon /> */}
        
        
        <a href="https://www.linkedin.com/in/johnsaidifortunato/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>

        <a href="https://github.com/JohnSaidi" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>

      </div>
      <p> &copy; 2023 John Saidi | Credit Pedrotech</p>
    </div>
  );
}

export default Footer;
