import { Link } from "react-router-dom";
import Footer from "../components/Footer";



export default function Tripbackendinfo() {

  return (

    <div>

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        🌍 Trip With Us – Travel Planning Web Application Backend
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
            The backend of Trip With Us was built using Java Spring Boot, providing a robust and secure foundation for managing users, trips, destinations, and feedback data. It exposes RESTful APIs consumed by the frontend for seamless integration.
            The backend includes authentication mechanisms, input validation, and database operations managed through MySQL, ensuring data consistency and reliability.

        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ REST API endpoints for trip creation, user registration, and destination management.</p>
        <p>✔️ JWT-based authentication and secure session management.</p>
        <p>✔️ Optimized database queries for trip storage and retrieval.</p>
        <p>✔️ Integrated error handling and API response management.</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5 mb-5">
          <strong>
            <p>🔶 Java Spring Boot</p>
            <p>🔶 MySQL</p> 
            <p>🔶 JSON Web Token (JWT)</p>
            <p>🔶 Hibernate ORM</p>
            <p>🔶 REST APIs</p>
          </strong>
        </div>
  
    <Footer/>
     </div>
    
  );
}

