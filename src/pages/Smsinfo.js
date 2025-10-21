import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSliders/SmsImageSlider";



export default function Smsinfo() {

  return (

    <div className="homebg">

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        🧑‍🏫 Student Management System – Java Desktop Application
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
            A complete Learning Management System (LMS)-style desktop app built with Java and MySQL. It supports student registration, login, and admin-based course management.
        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ Student registration and login system.</p>
        <p>✔️ Course and student management (Add, Edit, Delete).</p>
        <p>✔️ MySQL integration for persistent storage.</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5">
          <strong>
            <p>🔶 Java</p> 
            <p>🔶 MySQL</p>
            
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

