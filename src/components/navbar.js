
import React,{useState} from "react";
import './style/extra.css';
function Nav() {
  
  const [style,setStyle]=useState('menu-collapsed');
  const menu=()=>{
    //var element = document.getElementsByClassName("menu-collapsed");
  //element.classList.toggle("menu-expanded");
  if(style=='menu-collapsed'){
    setStyle('menu-expanded');
  }
  else{
    setStyle('menu-collapsed');
  }
  
  
  }

  return (
<div >

<div class="navbar navbar-expand-lg navbar-dark navb">
  <div class="container-fluid topbar">
 
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


<div class={style}>
  <div className='bar2'>
    <div onClick={menu} class="bar"></div>
  </div>
   
   <nav>
      <ul>
         <li><a onClick={menu} href="#work">WORK</a></li>
         <li><a onClick={menu} href="#About">ABOUT ME</a></li>
         <li><a onClick={menu} href="#Contact">CONTACT</a></li>
        
      </ul>
   </nav>
</div>

</div>
  );
}

export default Nav;