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
   const [counter, setCounter] = useState(0);
  
  let j;
  let k;
  let i=0;

const timer=()=>{
  console.log('off')
  setCounter(0);
  setT(0);
  setStyle('k');
}





  useEffect(() => { 
   
    Aos.init({duration:800});
    const timer =
      counter < 60 && setInterval(() => {
        
        
        setCounter(counter + 1);
        i=counter;
        j=Math.floor(i/12);
        k=Math.floor((i*5)/24); 
        if(j>=2){
          setText(1);
          setStyle('animated9')
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
         
      
      
      
      }, 150);
    return () => clearInterval(timer);
  }, [counter]);
    
 
return(

  <div>

<div class=" count">


  <div class="row ">
    <div class="col countext"  data-aos="fade-up" data-aos-delay="500" >
 
 <Waypoint
  onEnter={timer} 
  
/>
<h1>0{count}</h1>
      <p className={style}>years as a freelancer</p>
    </div>
    <div class="col countext" data-aos="fade-up" data-aos-delay="500">
    <h1>0{count}</h1>
       <p className={style}>Academic Research Projects</p>
    </div>
    <div class="col countext" data-aos="fade-up" data-aos-delay="500">
    <h1>0{count}</h1>
      <p className={style}>Degrees</p>
    </div>
  </div>
 
  <div class="row " >
    <div class="col countext" data-aos="fade-up" data-aos-delay="600">
    <h1>0{count}</h1>
     <p className={style}>Awards Won</p>
    </div>
    <div class="col countext" data-aos="fade-up" data-aos-delay="600">
    <h1>0{count2}</h1>
     <p className={style}>years as of experience</p>
    </div>
    <div class="col countext" data-aos="fade-up" data-aos-delay="600">
    <h1>{count3<10?'0':''}{count3}</h1>
     <p className={style}>years lived</p>
    </div>
  </div>
 
</div>




<div class=" count2">
    <Waypoint
  onEnter={timer}
  onLeave={timer} 
  
/>

  <div class="row ">
    <div class="col countext"  data-aos="fade-up" data-aos-delay="500" >
  

<h1>0{count}</h1>
      <p className={style}>years as a freelancer</p>
    </div>
    <div class="col countext" data-aos="fade-up" data-aos-delay="500">
    <h1>0{count}</h1>
       <p className={style}>Academic Research Projects</p>
    </div>
   
  </div>
 
  <div class="row " >
 <div class="col countext" data-aos="fade-up" data-aos-delay="500">
    <h1>0{count}</h1>
      <p className={style}>Degrees</p>
    </div>


    <div class="col countext" data-aos="fade-up" data-aos-delay="600">
    <h1>0{count}</h1>
     <p className={style}>Awards Won</p>
    </div>

  </div>


  <div class="row " >
   
    <div class="col countext" data-aos="fade-up" data-aos-delay="600">
    <h1>0{count2}</h1>
     <p className={style}>years as of experience</p>
    </div>
    <div class="col countext" data-aos="fade-up" data-aos-delay="600">
    <h1>{count3<10?'0':''}{count3}</h1>
     <p className={style}>years lived</p>
    </div>
  </div>
 
</div>





  </div>

)
}

const Countdown2=()=>{
  const [c,setC]=useState(0);
  const timer=()=>{
    setC(1);
  }


  return(
    <div>
       <Waypoint
  onEnter={timer} 
  
/>
<Countdown/>  
      
    </div>

  );

}


export default Countdown2;