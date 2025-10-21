import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSliders/ControlitImageSlider";



export default function Controlitinfo() {

  return (

    <div>

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        ✋ Controlit – Real-Time Gesture Recognition Windows Application
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
            A real-time hand gesture recognition system built for Windows using OpenCV and Mediapipe. It allows users to control media players, PDF readers, and presentations through specific hand gestures. Visual and voice feedback enhances interactivity and accessibility.
        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ Real-time gesture tracking and recognition.</p>
        <p>✔️ Visual and auditory feedback for performed actions.</p>    
        <p>✔️ Lightweight design optimized for responsiveness.</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5">
          <strong>
            <p>🔶 Python</p>
            <p>🔶 Tkinter</p>
            <p>🔶 OpenCV</p>
            <p>🔶 Mediapipe</p>
            <p>🔶 PyAutoGUI</p> 
            <p>🔶 Pyttsx3</p>
            <p>🔶 Threading</p>
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

