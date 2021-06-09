
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
<div className='sut'>
  <div  className={colorChange ? 'navb' : ' navb2'}>
  <div class="container-fluid topbar">
 

      <div className="navbars">
      
        
        <a className="tap" href="#work">WORK</a>
        
        <a className="tap" href="#About">ABOUT ME</a>
          
        
          <a className="tap" href="#Contact" >CONTACT</a>
       
      </div>
  
  </div>
</div>
</div>



<div class={style}>
  <div  className={colorChange ? 'bar3' : 'bar4'}>
    <div onClick={menu}  className= 'bar'></div>
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