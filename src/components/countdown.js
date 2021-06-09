import react,{useEffect,useState,useRef} from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import { Waypoint } from 'react-waypoint';




const Countdown=()=>{
   const [count,setCount]=useState(0);
   const [text,setText]=useState(0);

   const [count2,setCount2]=useState(0);
   const [text2,setText2]=useState(0);

   const [count3,setCount3]=useState(0);
   const [t,setT]=useState(0);
   const [text3,setText3]=useState(0);
   const [style,setStyle]=useState('k');
   
  let interval=useRef();
  let j;
  let k;
  let i=0;







  const timer=()=>{

    interval=setInterval(()=>{
      j=Math.floor(i/12);
      k=Math.floor((i*5)/24);  
     
         if(j>=2){
          setText(1);
          setStyle('animated')
          setCount(2);
        }
         else{ 
           setCount(j)
           
        }
         if(k>=5){
            setText2(1);
            setCount2(5);
        }
         else{
           setCount2(k);
        }
         if(i>=10){
           setT(1);
        }
         if(i>=24){
           setText3(1);
           setCount3(24);
           
         }
         else{
            setCount3(i);
         }

      i=i+1;
      
    },400);
    
  }


    
     useEffect(()=>{ 
      
       
       Aos.init({duration:800});
       
    
      
     },[]); 
return(

  <div>

<div class=" count">


  <div class="row ">
    <div class="col j"  data-aos="fade-up" data-aos-delay="500" >
 
 <Waypoint
  onEnter={timer} 
  
/>
<h1>{text==0?'0'+count:'02'}</h1>
      <p className={style}>years as a freelancer</p>
    </div>
    <div class="col j" data-aos="fade-up" data-aos-delay="500">
    <h1>{text==0?'0'+count:'02'}</h1>
       <p className={style}>Academic Research Projects</p>
    </div>
    <div class="col j" data-aos="fade-up" data-aos-delay="500">
    <h1>{text==0?'0'+count:'02'}</h1>
      <p className={style}>Degrees</p>
    </div>
  </div>
 
  <div class="row " >
    <div class="col j" data-aos="fade-up" data-aos-delay="600">
    <h1>{text==0?'0'+count:'02'}</h1>
     <p className={style}>Awards Won</p>
    </div>
    <div class="col j" data-aos="fade-up" data-aos-delay="600">
    <h1>{text2==0?'0'+count2:'05'}</h1>
     <p className={style}>years as of experience</p>
    </div>
    <div class="col j" data-aos="fade-up" data-aos-delay="600">
    <h1>{text3==0?(t==0?'0':'')+count3:'24'}</h1>
     <p className={style}>years lived</p>
    </div>
  </div>
 
</div>




<div class=" count2">
    <Waypoint
  onEnter={timer} 
  
/>

  <div class="row ">
    <div class="col j"  data-aos="fade-up" data-aos-delay="500" >
  

<h1>{text==0?'0'+count:'02'}</h1>
      <p className={style}>years as a freelancer</p>
    </div>
    <div class="col j" data-aos="fade-up" data-aos-delay="500">
    <h1>{text==0?'0'+count:'02'}</h1>
       <p className={style}>Academic Research Projects</p>
    </div>
   
  </div>
 
  <div class="row " >
 <div class="col j" data-aos="fade-up" data-aos-delay="500">
    <h1>{text==0?'0'+count:'02'}</h1>
      <p className={style}>Degrees</p>
    </div>


    <div class="col j" data-aos="fade-up" data-aos-delay="600">
    <h1>{text==0?'0'+count:'02'}</h1>
     <p className={style}>Awards Won</p>
    </div>

  </div>


  <div class="row " >
   
    <div class="col j" data-aos="fade-up" data-aos-delay="600">
    <h1>{text2==0?'0'+count2:'05'}</h1>
     <p className={style}>years as of experience</p>
    </div>
    <div class="col j" data-aos="fade-up" data-aos-delay="600">
    <h1>{text3==0?(t==0?'0':'')+count3:'24'}</h1>
     <p className={style}>years lived</p>
    </div>
  </div>
 
</div>















  </div>

)
}
export default Countdown;