import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from "./components/Header";
import Home from './pages/Home';
import Countries from './pages/Countries';

function App() {
  
  const closeNav = () => { document.getElementById("mySidepanel").style.width = "0" }

  return (
    <div className="App">
      {/* loader */}
      <div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="" /></div>
      </div>
      
      <Header />

      <div id="mySidepanel" className="sidepanel">
        <a className="closebtn" onClick={() => closeNav()} style={{cursor:'pointer'}}>×</a>
        <Link to="/" ><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
        <Link to="countries" ><i className="fa fa-flag" aria-hidden="true"></i> Countries</Link>
        <a href="contact.html"><i className="fa fa-phone" aria-hidden="true"></i> Contact</a>
      </div>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='countries' element={<Countries />} />

        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
