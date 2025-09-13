import React from "react";
import tripbackendimage from "../Pictures/backend.jpg";
import tripfrontendimage from "../Pictures/frontend.png";
import calimage from "../Pictures/calculator.jpg";
import portfolioimage from "../Pictures/portfolio.png";
import smsimage from "../Pictures/sms.png";
import sgcimage from "../Pictures/sgc.png";
import numbergameimag from "../Pictures/guessinggame.png";
import controlitimage from "../Pictures/Controlit.png";

export default function Home() {
  return (

    
    <div className="homebg homemargin rounded-5">
      

      <div className="mypic-container mt-5 fade-in">
        <div className="mypic"></div>
      </div>

      <div className="card about fade-in-up m-3">
        <p>
          My name is <strong>Dinuksha Punsara Yapa</strong>. I'm 22 years old and
          Computer Science graduate from the <strong>University of Bedfordshire</strong> .
        </p>
        <p>
          I have moderate knowledge in programming languages like <strong>Java</strong>,{" "}
          <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>PHP</strong>,{" "}
          <strong>SQL</strong>, <strong>C</strong>, and <strong>C++</strong>. I’m also familiar
          with frameworks such as <strong>React</strong> and <strong>Spring Boot</strong>. I'm
          actively looking for an internship to gain industry experience and grow my career.
        </p>

        
      </div>

      <h3 className="pt-4 glow-text">Some of My Projects on GitHub</h3>


<div className="project-grid mt-4">
  <div className="project-card">
    <img
      src={tripfrontendimage}
      alt="Trip App frontend"
      className="project-image"
    />
    <div className="project-content">
      <h4>Trip App Website (Frontend)</h4>
      <p>A React frontend for a travel booking system with user login and trip management features.</p>
      <a
        href="https://github.com/Punsara-Y/Trip-App-Frontend"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

  <div className="project-card">
    <img
      src={tripbackendimage}
      alt="Trip App Backend"
      className="project-image"
    />
    <div className="project-content">
      <h4>Trip App Website (Backend)</h4>
      <p>Spring Boot backend for managing users, bookings, and API endpoints for the Trip App.</p>
      <a
        href="https://github.com/Punsara-Y/Trip-App-Backend"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

    <div className="project-card">
    <img
      src={calimage}
      alt="Android Calculator"
      className="project-image"
    />
    <div className="project-content">
      <h4>Android Calculator</h4>
      <p>Spring Boot backend for managing users, bookings, and API endpoints for the Trip App.</p>
      <a
        href="https://github.com/Punsara-Y/calculator-for-android"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>


    <div className="project-card">
    <img
      src={portfolioimage}
      alt="Portfolio Website"
      className="project-image"
    />
    <div className="project-content">
      <h4>Portfolio Website</h4>
      <p>Spring Boot backend for managing users, bookings, and API endpoints for the Trip App.</p>
      <a
        href="https://github.com/D-Punsara/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>


    <div className="project-card">
    <img
      src={smsimage}
      alt="Student Management System"
      className="project-image"
    />
    <div className="project-content">
      <h4>Student Management System</h4>
      <p>Spring Boot backend for managing users, bookings, and API endpoints for the Trip App.</p>
      <a
        href="https://github.com/Punsara-Y/CODSOFT-Task_03"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>


    <div className="project-card">
    <img
      src={sgcimage}
      alt="Student Grade calculator"
      className="project-image"
    />
    <div className="project-content">
      <h4>Student Grade calculator</h4>
      <p>Spring Boot backend for managing users, bookings, and API endpoints for the Trip App.</p>
      <a
        href="https://github.com/Punsara-Y/CODSOFT-Task_02"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>


    <div className="project-card">
    <img
      src={numbergameimag}
      alt="Number Guessing Game"
      className="project-image"
    />
    <div className="project-content">
      <h4>Number Guessing Game</h4>
      <p>Spring Boot backend for managing users, bookings, and API endpoints for the Trip App.</p>
      <a
        href="https://github.com/Punsara-Y/CODSOFT-Task_01"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>


    <div className="project-card">
    <img
      src={controlitimage}
      alt="Controlit"
      className="project-image"
    />
    <div className="project-content">
      <h4>Controlit</h4>
      <p>Spring Boot backend for managing users, bookings, and API endpoints for the Trip App.</p>
      <a
        href="https://github.com/Punsara-Y/ControlIt"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

  
</div>



      <div className="pt-5 cv fade-in-up">
        <h2 className="pt-4 glow-text">My CV</h2>
        <a
          href="https://drive.google.com/file/d/1_Hq2oOwaJZRDLqiL0-O2jzYvUsn9XXaR/view?usp=sharing"
          className="btn btn-info btn-lg cvbtn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
        </a>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}
