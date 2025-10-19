import { Link,useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSliders/TripAppImageSlider";



export default function Tripfrontendinfo() {

    const navigate = useNavigate();


  return (

    <div>

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        🌍 Trip With Us – Travel Planning Web Application Frontend
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
          The frontend of Trip With Us was developed with React.js to deliver a dynamic and interactive user experience. It allows users to search destinations, plan trips, view maps, and explore travel routes in real time. The interface is designed with smooth navigation, reusable components, and responsive layouts to ensure optimal performance across devices.
          Integrated Google Maps API enhances usability by providing route visualization and location-based suggestions.
        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ Dynamic trip cards, route displays, and interactive map components.</p>
        <p>✔️ State management using React Hooks and Context API.</p>
        <p>✔️ Responsive layout and animated transitions for a smooth UI experience.</p>
        <p>✔️ Integrated contact and feedback forms connected to backend APIs.</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5">
          <strong>
            <p>🔶 React.js</p>
            <p>🔶 CSS3</p> 
            <p>🔶 HTML5</p>
            <p>🔶 Google Maps API</p>
            <p>🔶 REST APIs</p>
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

