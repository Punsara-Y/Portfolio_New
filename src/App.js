import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Tripfrontendinfo from './pages/Tripfrontendinfo';
import Tripbackendinfo from './pages/Tripbackendinfo';
import Tmsfrontendinfo from "./pages/Tmsfrontinfo";
import Tmsbackendinfo from './pages/Tmsbackinfo';
import Calinfo from "./pages/Calinfo";
import Portfolioinfo from "./pages/Portfolioinfo";
import Smsinfo from "./pages/Smsinfo";
import Sgcinfo from "./pages/Sgcinfo";
import Numberguessgameinfo from "./pages/Numberguessgameinfo";
import Mathsolverinfo from "./pages/Mathsolverinfo";
import Controlitinfo from "./pages/Controlitinfo";
import Chatteryinfo from "./pages/Chatteryinfo";
import Lpsinfo from "./pages/Lpsinfo";



const App = () => {
  return (


    
    <Router>  
      <ScrollToTop />
      <Routes>

        <Route path ="/" element={<Home/>}/>
        <Route path = "/tripappfrontend" element={<Tripfrontendinfo/>}/>
        <Route path = "/tripappbackend" element={<Tripbackendinfo/>}/>
        <Route path = "/tmsfrontend" element={<Tmsfrontendinfo/>}/>
        <Route path = "/tmsbackend" element={<Tmsbackendinfo/>}/>
        <Route path = "/calinfo" element={<Calinfo/>}/>
        <Route path = "/portfolioinfo" element={<Portfolioinfo/>}/>
        <Route path = "/Smsinfo" element={<Smsinfo/>}/>
        <Route path = "/Sgcinfo" element={<Sgcinfo/>}/>
        <Route path = "/Numbergameinfo" element={<Numberguessgameinfo/>}/>
        <Route path = "/mathsolverinfo" element={<Mathsolverinfo/>}/>
        <Route path = "/controlitinfo" element={<Controlitinfo/>}/>
        <Route path = "/chatteryinfo" element={<Chatteryinfo/>}/>
        <Route path = "/lpsinfo" element={<Lpsinfo/>}/>



      </Routes>
    </Router>
    

  );
};

export default App;
