
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

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);





  return (
<div >

<div  className={colorChange ? 'navbar navbar-expand-lg navbar-dark navb' : 'navbar navbar-expand-lg navbar-dark navb2'}>
  <div class="container-fluid topbar">
 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ">
      
        <li >
        <a className="nav-link active" href="#work">WORK</a>
        </li>
        <li>
        <a className="nav-link active" href="#About">ABOUT ME</a>
          
        </li>
        <li>
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