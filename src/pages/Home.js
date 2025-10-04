import tripbackendimage from "../Pictures/backend.jpg";
import tripfrontendimage from "../Pictures/frontend.png";
import calimage from "../Pictures/calculator.jpg";
import portfolioimage from "../Pictures/portfolio.png";
import smsimage from "../Pictures/sms.png";
import sgcimage from "../Pictures/sgc.png";
import numbergameimag from "../Pictures/guessinggame.png";
import controlitimage from "../Pictures/Controlit.png";
import chatappimage from "../Pictures/ca.png";
import frontendtech from "../Pictures/frontendtech.png"
import backendtech from "../Pictures/backengtech.png";
import tmsfrontend from "../Pictures/tmsf.png";
import tmsbackend from "../Pictures/bb.jpg";

import Swal from "sweetalert2";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Home() {

    const showPhoneNumber = () => {
      Swal.fire({
        title: "My Number 📞",
        text: "+94 70 4673 604",
        icon: "info",
        background: "#1e1e2f",
        color: "#ffffff",
        confirmButtonText: "Close",
        confirmButtonColor: "#3085d6",
      });
    };

    const showEmail = () => {
      Swal.fire({
        title: "My Mail 📩",
        text: "Yapapunsara408@gmail.com",
        icon: "info",
        background: "#1e1e2f",
        color: "#ffffff",
        confirmButtonText: "Close",
        confirmButtonColor: "#3085d6",
      });
    };

  return (

    <div className="homebg">
      <div className="mypic-container mt-5 fade-in">
        <div className="mypic"></div>
      </div>

      <div className="card fade-in-up mt-5">
        <p>
          My name is <strong>Dinuksha Punsara Yapa</strong> and
          Computer Science graduate at <strong>University of Bedfordshire , UK</strong> .
        </p>
        <p>
          I have worked with programming languages like <strong>Java</strong>,{" "}
          <strong>JavaScript</strong>, <strong>HTML</strong>,<strong>CSS</strong>, <strong>PHP</strong>,{" "}
          <strong>SQL</strong>, and <strong>C++</strong>. I’m also familiar
          with frameworks such as <strong>React , Node.js</strong> and <strong>Spring Boot</strong>. I'm
          actively looking for an internship oppotunity to gain industry experience and grow my career.
        </p>

        
      </div>

      <h3 className="pt-4 glow-text">My Projects</h3>


<div className="project-grid mt-4">

{/* Trip App Section */}

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
        href="https://github.com/Punsara-Y/Trip-App-Frontend.git"
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
        href="https://github.com/Punsara-Y/Trip-App-Backend.git"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

{/* TMS Section */}

  <div className="project-card">
    <img
      src={tmsfrontend}
      alt="TMS frontend"
      className="project-image"
    />
    <div className="project-content">
      <h4>Task Flow Pro - Task Managemenet System With AI Chatbot (Frontend)</h4>
      <p>A React frontend for task management system with user login register and Task management features with AI chatbot.</p>
      <a
        href="https://github.com/Punsara-Y/Task-manger-Frontend.git"
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
      src={tmsbackend}
      alt="TMS Backend"
      className="project-image"
    />
    <div className="project-content">
      <h4>Task Flow Pro - Task Managemenet System With AI Chatbot (Backend)</h4>
      <p>Node.js backend for managing tasks with AI chatbot for the Task Managemenet system.</p>
      <a
        href="https://github.com/Punsara-Y/Task-manger-Backend.git"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

{/* Cal Section */}
    <div className="project-card">
    <img
      src={calimage}
      alt="Android Calculator"
      className="project-image"
    />
    <div className="project-content">
      <h4>Android Calculator</h4>
      <p>Simple calculator for android developed using Java.</p>
      <a
        href="https://github.com/Punsara-Y/calculator-for-android.git"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

{/* portfolio Section */}
    <div className="project-card">
    <img
      src={portfolioimage}
      alt="Portfolio Website"
      className="project-image"
    />
    <div className="project-content">
      <h4>Portfolio Website</h4>
      <p>Personal portfolio website created uring React.js and CSS .</p>
      <a
        href="https://github.com/Punsara-Y/Portfolio_New.git"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

{/* SMS Section */}

    <div className="project-card">
    <img
      src={smsimage}
      alt="Student Management System"
      className="project-image"
    />
    <div className="project-content">
      <h4>Student Management System</h4>
      <p>Complete Student Management System developed using Java.</p>
      <a
        href="https://github.com/Punsara-Y/CODSOFT-Task_03.git"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

{/* SGC Section */}

    <div className="project-card">
    <img
      src={sgcimage}
      alt="Student Grade calculator"
      className="project-image"
    />
    <div className="project-content">
      <h4>Student Grade calculator</h4>
      <p>Student grade calculator developed using Java.</p>
      <a
        href="https://github.com/Punsara-Y/CODSOFT-Task_02.git"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

{/* Number Section */}

    <div className="project-card">
    <img
      src={numbergameimag}
      alt="Number Guessing Game"
      className="project-image"
    />
    <div className="project-content">
      <h4>Number Guessing Game</h4>
      <p>Simple number guessing game developed by Java.</p>
      <a
        href="https://github.com/Punsara-Y/CODSOFT-Task_01.git"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

{/* Controlit Section */}

    <div className="project-card">
    <img
      src={controlitimage}
      alt="Controlit"
      className="project-image"
    />
    <div className="project-content">
      <h4>Controlit</h4>
      <p>A windows application developed using Python and computer vision technologies like Mediapipe,OpenCV etc. ,for controlling PDF readers , Presentation softwares and Media players using hand gestures.</p>
      <a
        href="https://github.com/Punsara-Y/ControlIt.git"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

{/* chat app Section */}

      <div className="project-card">
    <img
      src={chatappimage}
      alt="Chatterly"
      className="project-image"
    />
    <div className="project-content">
      <h4>Chatterly</h4>
      <p>Simple chat web application for gloable room chats which is created by react.js and the used Mongodb as database.</p>
      <a
        href="https://github.com/Punsara-Y/Chat-App.git"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View on GitHub →
      </a>
    </div>
  </div>

  
</div>

{/* My service Section */}

<h3 className="pt-4 glow-text">My Services</h3>

<div className="service-grid mt-4">
  <div className="service-card">
    
    <img
      src={frontendtech}
      alt="frontend-tech"
      className="service-image"
    />
        
        <div className="service-content">

      <h1>Frontend Development</h1>

      <p><strong>HTML</strong> – Provides the structure of web pages with semantic markup.</p>
      <p><strong>CSS</strong> – Styles and designs web pages for a visually appealing user interface.</p>
      <p><strong>JavaScript</strong> – Adds interactivity and dynamic functionality to web applications.</p>
      <p><strong>React</strong> – A modern JavaScript library for building fast, reusable, and interactive user interfaces.</p>
      <p><strong>Java</strong> – Used for building dynamic frontends in enterprise-level web applications (via JavaFX, JSP, or frameworks).</p>
      <p><strong>Python</strong> – Can be used with frameworks like Tkinter or PyScript to build interactive frontend elements.</p>
      
      <h2>Contact : </h2>

        <div className="service-contact">
          <div
            onClick={showPhoneNumber}
            style={{
              cursor: "pointer",
              fontSize: "28px",
              color: "#ccc",
            }}
          >
            <FaPhone />
          </div>

          <div
            onClick={showEmail}
            style={{
              cursor: "pointer",
              fontSize: "28px",
              color: "#ccc",
            }}
          >
            <FaEnvelope />
          </div>
        </div>
    </div>
  </div>

  <div className="service-card">

    <img
      src={backendtech}
      alt="backend-tech"
      className="service-image"
    />
      
    <div className="service-content">

      <h1>Backend Development</h1>

      <p><strong>Node.js</strong> – JavaScript runtime environment for building scalable, event-driven server-side applications.</p>
      <p><strong>Java</strong> – Provides secure and reliable backend solutions with frameworks like Spring Boot.</p>
      <p><strong>PHP</strong> – A widely used server-side scripting language for building dynamic and database-driven websites.</p>
      <p><strong>Python</strong> – Used to power real-time hand gesture recognition with OpenCV and Mediapipe, processing webcam input and controlling applications through PyAutoGUI.</p>
      <p><strong>Databases</strong> – MySQL and MongoDB provide reliable storage solutions for structured and unstructured data, supporting scalable, secure, and efficient backend applications.</p>
      
      <h2>Contact : </h2>

        <div className="service-contact">
          <div
            onClick={showPhoneNumber}
            style={{
              cursor: "pointer",
              fontSize: "28px",
              color: "#ccc",
            }}
          >
            <FaPhone />
          </div>

          <div
            onClick={showEmail}
            style={{
              cursor: "pointer",
              fontSize: "28px",
              color: "#ccc",
            }}
          >
            <FaEnvelope />
          </div>
        </div>
    </div>
  </div>

</div>


      <div className="cv fade-in-up">
        <h2 className="glow-text">My CVs</h2>
        
        <a
          href="https://drive.google.com/file/d/1E6gGVe9EgSoB3dQ8hkhOO3BQ9uKkC6DN/view?usp=sharing"
          className="btn btn-info btn-lg cvbtn"
          target="_blank"
          rel="noopener noreferrer"
        >
          For Software Engineer Internship
        </a>

        <a
          href="https://drive.google.com/file/d/1Iwo8BioHqoVzse4OJi_BwABd8g0WXTdf/view?usp=sharing"
          className="btn btn-info btn-lg cvbtn"
          target="_blank"
          rel="noopener noreferrer"
        >
          For Software Engineer
        </a>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}
