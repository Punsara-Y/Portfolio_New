import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSliders/MathsolverImageSlider";



export default function mathsolverinfo() {

  return (

    <div>

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        🧮 Math Solver – Java Desktop Application
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
            An educational quiz-style math game that generates random math questions using external APIs. Players answer within a time limit and receive scores based on performance, making learning interactive and competitive.
        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ Player registration and login system.</p>
        <p>✔️ Integration with math question API.</p>    
        <p>✔️ Random question fetching logic from API.</p>
        <p>✔️ Level-based math challenges.</p>
        <p>✔️ Real-time scoring and time tracking.</p>
        <p>✔️ Player Leaderboard with Mysql Database .</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5">
          <strong>
            <p>🔶 Java (Swing)</p>
            <p>🔶 APIs</p>
            <p>🔶 Mysql</p>
            <p>🔶 Therading</p>
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

