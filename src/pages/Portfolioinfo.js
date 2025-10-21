import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSliders/PortfolioImageSlider";



export default function Portfolioinfo() {

  return (

    <div className="homebg">

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        💼 DP Yapa Portfolio – Personal Website
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
            A modern personal portfolio website built to highlight professional skills, achievements, and projects. It features smooth animations, a responsive layout, and API-based contact handling for real-time communication.
        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ Dynamic content rendering through APIs.</p>
        <p>✔️ Animated UI and navigation transitions.</p>
        <p>✔️ Fully responsive design across all devices.</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5">
          <strong>
            <p>🔶 React.js</p>
            <p>🔶 CSS3</p> 
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

