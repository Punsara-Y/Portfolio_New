import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSliders/TmsImageSlider";



export default function Tripfrontendinfo() {

  return (

    <div className="homebg">

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        🗂️ Task Management System – Enterprise Web Application Frontend
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
            The frontend of the Task Management System was developed using React.js to create an intuitive and responsive user dashboard for different roles—Admin, Owner, and Employee. The design emphasizes usability and clarity, enabling users to easily assign, track, and update daily tasks.
            Interactive tables, modals, and forms were implemented using Tailwind CSS to provide a clean, modern, and consistent look across the platform.
        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ Role-based dashboards for owners, employees, and admins.</p>
        <p>✔️ Task creation, progress tracking, and filtering features.</p>
        <p>✔️ Responsive, mobile-friendly interface with CSS3 styling.</p>
        <p>✔️ Real-time updates using asynchronous API calls.</p>
        <p>✔️ Real-time Email notifications send for users.</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5">
          <strong>
            <p>🔶 React.js</p>
            <p>🔶 CSS3</p> 
            <p>🔶 Axios</p>
            <p>🔶 React Router</p>
            <p>🔶 REST APIs</p>
            <p>🔶 G-mail Client</p>

          </strong>
        </div>

      <h3 className="pt-5 glow-text">Gallery</h3>

        <div>         
          <ImageSlider />
        </div>
  
    <Footer/>
     </div>
    
  );
}

