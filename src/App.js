import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tripfrontendinfo from './pages/Tripfrontendinfo';
import ScrollToTop from './components/ScrollToTop';
import Tripbackendinfo from './pages/Tripbackendinfo';


const App = () => {
  return (


    
    <Router>  
      <ScrollToTop />
      <Routes>

        <Route path ="/" element={<Home/>}/>
        <Route path = "/tripappfrontend" element={<Tripfrontendinfo/>}/>
        <Route path = "/tripappbackend" element={<Tripbackendinfo/>}/>


      </Routes>
    </Router>
    

  );
};

export default App;
