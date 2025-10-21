import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSliders/NumbergameImageSlider";



export default function Numberguessgameinfo() {

  return (

    <div>

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        🎮 Number Guessing Game – Java Desktop Application
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
            A simple interactive game that challenges users to guess a randomly generated number. The game provides real-time feedback through a graphical interface built using Java Swing, ensuring an engaging user experience.
        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ Player login system.</p>
        <p>✔️ Random number generation logic.</p>
        <p>✔️ Graphical feedback system.</p>
        <p>✔️ Interactive and user-friendly interface.</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5">
          <strong>
            <p>🔶 Java (Swing)</p>
            <p>🔶 Apache Netbeans IDE</p> 
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

