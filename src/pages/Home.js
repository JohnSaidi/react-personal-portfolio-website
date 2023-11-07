import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is John</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          {/* <LinkedInIcon />
          <EmailIcon />
          <GithubIcon /> */}

          <a href="https://www.linkedin.com/in/johnsaidifortunato/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>

          <EmailIcon />

          <a href="https://github.com/JohnSaidi" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>


        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, Semantic UI, BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Fast Api, Flask, Vercel, SQLite, MySQL, Firebase
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Python, Java, C++, Lua, JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
