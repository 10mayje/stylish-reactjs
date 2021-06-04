import React from "react";
import Nav from './components/navbar';
import Main from './components/main';
import "./components/style/style.css";
import "./components/style/style2.css";
import Body from './components/body';
function App() {
  return (
    <div className="main">
      <Nav/>
    <Body/>
    <hr style={{color:"white",marginTop:"-1vh"}} />
                    <div className="bio"><h1 className="anmate-text text-moving" >I’m crafting five new products at Stylework. Stay tuned for the updates!  </h1>
                      </div>
    <hr style={{color:"white",marginTop:"-1vh"}} />
    </div>
  );
}

export default App;
