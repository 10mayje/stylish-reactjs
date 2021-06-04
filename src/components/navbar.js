
import React from "react";
function Nav() {
  return (
<div >
<nav className="navbar navbar-expand-lg navbar-dark  navb">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav  ">
        
        <a className="nav-link active" href="#work">WORK</a>
        <a className="nav-link active" href="#About">ABOUT ME</a>
        <a className="nav-link active" href="#Contact" tabindex="-1" aria-disabled="true">CONTACT</a>
      </div>
    </div>
  </div>
</nav>
</div>
  );
}

export default Nav;