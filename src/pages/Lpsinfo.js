import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSliders/LpsImageSlider";



export default function Lpsinfo() {

  return (

    <div className="homebg">

      <div className="p-3">
        <Link className="homebtn" to="/">🔙</Link>
      </div>

      <h1 className="glow-text2">
        💰 Local Goods Price Tracker – Real-Time Local Market App
      </h1>


      <h3 className="pt-5 glow-text">About Project</h3>

      <div className="card2 fade-in-up mt-5">
        <p>
Commodity Price Tracker is a full-stack mobile application that connects local users and registered stores to monitor and update real-time commodity prices. Users can view all available stores, check their buying price lists, and receive instant notifications whenever a store updates its prices. Store owners can easily manage and update their price data through a simple interface. The app ensures real-time synchronization between stores and users for accurate market transparency.        </p>
      </div>

      <h3 className="pt-5 glow-text">Key Implementations</h3>
     
      <div className="card2 fade-in-up mt-5">
        <strong>
        <p>✔️ Secure user and store registration/login system.</p>
        <p>✔️ Real-time commodity price updates using Firestore.</p>    
        <p>✔️ Push notifications sent to all users when a store updates prices.</p>
        <p>✔️ Home screen displaying all registered stores with their details.</p>
        <p>✔️ Store dashboard for adding and managing commodity prices.</p>
        <p>✔️ Responsive cross-platform mobile app (Android).</p>
        <p>✔️ Firebase + Node.js backend integration for notification management and database operations.</p>
        </strong>
      </div>

      <h3 className="pt-5 glow-text">Used Technologies</h3>

        <div className="card2 fade-in-up mt-5">
          <strong>

            <p>🔶 React Native (Expo)</p>
            <p>🔶 React Navigation</p>
            <p>🔶 Firebase Authentication</p>
            <p>🔶 Firebase Firestore</p>
            <p>🔶 Firebase Cloud Messaging</p>
            <p>🔶 Node.js</p> 
            <p>🔶 Firebase Admin SDK</p>
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

