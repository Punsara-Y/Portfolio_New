import { Link } from "react-router-dom";
import Footer from "../components/Footer";



export default function Tmsbackendinfo() {

  return (

    <div className="homebg">

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        🗂️ Task Management System – Enterprise Web Application Backend
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
            The backend of Task Management System was developed using Node.js with Express.js, serving as the core for task, user, and project data management. It integrates with MongoDB for secure and efficient data storage and retrieval.
            Authentication is handled using JWT, while Express middleware ensures secure API access and error handling. The system supports CRUD operations for tasks, users, and roles, making it scalable and flexible for organizational use and also used Node Natural Language Processing(NLP) for Chatbot.

        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ REST API endpoints for task management, user authentication, and progress tracking.</p>
        <p>✔️ JWT-based login system with role-based access control.</p>
        <p>✔️ MongoDB schemas for users, tasks, and performance analytics.</p>
        <p>✔️ Data validation, logging, and error handling middleware for reliability.</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5 mb-5">
          <strong>
            <p>🔶 Node.js</p>
            <p>🔶 Node NLP</p>
            <p>🔶 MongoDB</p> 
            <p>🔶 Mongoose</p>
            <p>🔶 JSON Web Token (JWT)</p>
            <p>🔶 REST APIs</p>
            
          </strong>
        </div>
  
    <Footer/>
     </div>
    
  );
}

