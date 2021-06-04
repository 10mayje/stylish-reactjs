import react,{useEffect} from 'react';


import "aos/dist/aos.css";
import Aos from 'aos';



const Cont3=()=>{
    useEffect(()=>{ 
      
        Aos.init({duration:1000});
     
      },[]); 

    return(

        <div className="container-three" id="About">
        <div className="item-3" >
          <h1 >
            <span data-aos="new" data-aos-delay="100">My </span>
            <span data-aos="new" data-aos-delay="150">friends </span>
            <span data-aos="new" data-aos-delay="200">call </span>
            <span data-aos="new" data-aos-delay="250">me </span>
            <span data-aos="new" data-aos-delay="300">Ron, </span>
            <span data-aos="new" data-aos-delay="350">wish </span>
            <span data-aos="new" data-aos-delay="400">I </span>
            <span data-aos="new" data-aos-delay="450">starred </span>
            <span data-aos="new" data-aos-delay="500">in </span>
            <span data-aos="new" data-aos-delay="550">Harry </span>
            <span data-aos="new" data-aos-delay="600">Potter </span>
            <span data-aos="new" data-aos-delay="650">though </span>
        
          </h1>

        </div>
         <div className="item-3" >
             <p>

     <span data-aos="new" data-aos-delay="200">A little bit about me. I started my career as a freelancer in </span>
           <span data-aos="new" data-aos-delay="400">graphics design when I discovered UI and slowly started  </span>
           <span data-aos="new" data-aos-delay="600">thinking about user experience. I’ve done my master’s </span>
           <span data-aos="new" data-aos-delay="800">in Human-computer Interaction from University of York,   </span>
           <span data-aos="new" data-aos-delay="1000">United Kingdom, the time which got me hooked to user </span>
           <span data-aos="new" data-aos-delay="1200"> experience research. After a considerable amount of academic </span>
           <span data-aos="new" data-aos-delay="1400">research, I started my journey as a UX-er in industry.</span>
           <span data-aos="new" data-aos-delay="1600"> Although my expertise lies in UX, I love aesthetics and </span>
           <span data-aos="new" data-aos-delay="1800"> hence like contributing to design in every way possible </span>
           <span data-aos="new" data-aos-delay="1800"> (yes, including motion).</span>  
           <br/>
           <br/>
            <span data-aos="new" data-aos-delay="1900" >      
           I prefer outcomes which can influence human behaviours </span>
           <span data-aos="new" data-aos-delay="2000">and have a meaningful impact. Occasionally, I draw :)</span> 
             </p>
      
          
         </div>
      </div>

    );
}
export default Cont3;