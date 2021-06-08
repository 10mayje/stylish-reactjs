import React from "react";
import Nav from './components/navbar';

import Intrest from './components/interests';
import "./components/style/style.css";
import "./components/style/style2.css";
import Body from './components/body';
import Foot from './components/footer';
function App() {
  return (
    <div className="main">
      <Nav/>
    <Body/>
    <hr className='an-text' style={{color:"white"}} />
                    <div className="bio"><h1 className="anmate-text text-moving" ><span>Currently, </span>I’m crafting five new products at Stylework. Stay tuned for the updates!  </h1>
                      </div>
    <hr style={{color:"white",marginTop:"1vh"}} />
    <Intrest/>
    
    <Foot/>
   
    </div>
    
  );
}

export default App;
