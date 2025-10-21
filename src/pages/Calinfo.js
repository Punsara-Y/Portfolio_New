import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSliders/CalImageSlider";



export default function Calinfo() {

  return (

    <div>

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        🧮 Simple Calculator – Android Application
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
            A mobile calculator app designed for performing basic arithmetic operations. The app features a minimalist design with smooth user interaction and accurate calculations.
        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ Basic operations (add, subtract, multiply, divide).</p>
        <p>✔️ Error handling for invalid inputs.</p>
        <p>✔️ Clean , Simple and responsive UI design.</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5">
          <strong>
            <p>🔶 Java</p>
            <p>🔶 Android Studio</p> 
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

