import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSliders/ChatteryImageSlider";



export default function Chatteryinfo() {

  return (

    <div>

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        💬 Chatterly – Real-Time Chat Application
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
            Chatterly is a full-stack chat application that supports real-time messaging among multiple users using WebSockets. It features group chats with message persistence via MongoDB.
        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ Live chat with instant message delivery.</p>
        <p>✔️ User Register , Login and Authentication system.</p>    
        <p>✔️ Persistent message storage.</p>
        <p>✔️ Modern minimalistic UI.</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5">
          <strong>
            <p>🔶 React.js</p>
            <p>🔶 CSS3</p>
            <p>🔶 Node.js</p>
            <p>🔶 MongoDB</p>
            <p>🔶 WebSockets</p>
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

