
import React from "react";

function Nav() {
  return (
<div >

<div class="navbar navbar-expand-lg navbar-dark navb">
  <div class="container-fluid">
    <a class="navbar-brand" style={{width:40,height:40,zIndex:'9'}} ></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ">
      
        <li class="nav-item">
        <a className="nav-link active" href="#work">WORK</a>
        </li>
        <li>
        <a className="nav-link active" href="#About">ABOUT ME</a>
          
        </li>
        <li class="nav-item">
          <a className="nav-link active" href="#Contact" >CONTACT</a>
        </li>
      </ul>
     
    </div>
  </div>
</div>
</div>
  );
}

export default Nav;