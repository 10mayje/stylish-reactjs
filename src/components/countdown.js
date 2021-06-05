import react,{useEffect,useState,useRef} from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';

const Countdown=()=>{
   const [count,setCount]=useState(0);
   
     
     const Time=()=>{
          let i;
          setCount(2);
     }
  
     useEffect(()=>{ 
       
       Aos.init({duration:800});
       
      
       
        
      
     },[]); 
return(
<div class=" count">
  <div class="row ">
    <div class="col j"  data-aos="fade-up" data-aos-delay="500" >
       <h1>02</h1>
       <p>years as a freelancer</p>
    </div>
    <div class="col j" data-aos="fade-up" data-aos-delay="500">
    <h1>02</h1>
       <p>Academic Research Projects</p>
    </div>
    <div class="col j" data-aos="fade-up" data-aos-delay="500">
    <h1>02</h1>
       <p>Degrees</p>
    </div>
  </div>
  <div class="row " >
    <div class="col j" data-aos="fade-up" data-aos-delay="600">
    <h1>02</h1>
       <p>Awards Won</p>
    </div>
    <div class="col j" data-aos="fade-up" data-aos-delay="600">
    <h1>05</h1>
       <p>years as of experience</p>
    </div>
    <div class="col j" data-aos="fade-up" data-aos-delay="600">
    <h1>24</h1>
       <p>years lived</p>
    </div>
  </div>
 
</div>
)
}
export default Countdown;