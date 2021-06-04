
import React, { useEffect,useState,useRef } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import UX from './uxresearch';
import PD from './product';
import VD from './visual';
import img from '../images/Interests.png';
import icon from '../images/twitter (1).png';
import button from '../images/Back-to-top.png'; 
import icon2 from '../images/instagram 1.png';
import icon3 from '../images/linkedin 1.png';
import icon4 from '../images/dribbble-logo.png';
import icon5 from '../images/Behance.png';
import icon6 from '../images/medium 1.png';
import Nav from "./navbar";
import gif from '../images/Hero-animation.gif';
import './style/style.css';
import Cont3 from './container3';
const Body=()=>{
    const [dis, setDis] = useState('');
    const [value,setValue]=useState('');
    const [nav,setNav]=useState(0);
    let i=0;
    
    const array=[
    {text:"years as a freelancer",value:"02"},
    {text:"Academic Research Projects",value:"02"},
    {text:"Degrees",value:"02"},
    {text:"Awards Won",value:"02"},
    {text:"years as of experience",value:"05"},
    {text:"years lived",value:"24"}
  ]
  
  let interval=useRef();
  const timer=()=>{

    interval=setInterval(()=>{
     
        setDis(array[i].text,1000);
        setValue(array[i].value,1000);
        i++;
        if(i==6){
          i=0;
        }
    },1000);
    
  }
 
    useEffect(()=>{ 
      
      Aos.init({duration:800});
      timer(); 
      return()=>{
        clearInterval(interval.current);
      }     
      
    },[]); 
    
    return(
    <div className="background">
        
        <div className="container-one" > 
               <div className="item-one "  >
                  <h1><span data-aos="new" data-aos-delay="50">👋</span>
                  <span data-aos="new" data-aos-delay="100" >H</span>
                  <span data-aos="new" data-aos-delay="150">i</span>
                  <span data-aos="new" data-aos-delay="200">, </span>
                  <span data-aos="new" data-aos-delay="250">I</span>
                  <span data-aos="new" data-aos-delay="300">’</span>
                  <span data-aos="new" data-aos-delay="350">m</span>
                  <span data-aos="new" data-aos-delay="400"> R</span>
                  <span data-aos="new" data-aos-delay="450">o</span>
                  <span data-aos="new" data-aos-delay="500">n</span>
                    </h1>
                   <span className="t-text" data-aos="new" data-aos-delay="600">I help purpose-driven organizations </span>
                    <span className="t-text"data-aos="new" data-aos-delay="600" >to achieve clarity on product-</span>
                     
                     <span className="t-text" data-aos="new" data-aos-delay="800">problems,clarity on innovative concepts,</span>
                     <span className="t-text"data-aos="new" data-aos-delay="800"> and clarity on user needs by  </span> 
                     <span className="t-text"data-aos="new" data-aos-delay="1000">delivering clear,hard-hitting insights </span> 
                     <span className="t-text"data-aos="new" data-aos-delay="1000">that drive business goals and </span>
                      <span className="t-text"data-aos="new" data-aos-delay="1200"> meaningful impacts. Also, I design and  </span>  
                       <span className="t-text" data-aos="new" data-aos-delay="1200">can animate to make things more </span> 
                       <span className="t-text" data-aos="new" data-aos-delay="1400"> exciting!</span> 
                       <div className="t-text"className="bt-n" data-aos="new" data-aos-delay="1500">
                       <button type="button" class="btn btn-primary btn-lg b1">Let's talk!</button>
<button type="button" class="btn btn-secondary btn-lg b2">Explore my work</button>
                       </div>
                       <div data-aos="new" data-aos-delay="1600">
                         
                         <h3 className="contact">Contact</h3><h2 className="c2"> ronuxdnr@gmail.com</h2>
                       </div>
               </div>
               <div className="item-two " data-aos="new" data-aos-duration="1000"   ><img src={gif}/></div>

          </div>
          {/* secound fase */}
          <div className="container-two"  data-aos="new" data-aos-delay="100">
            <h2>
            Most of the time, I’m either designing
            or conducting research for purpose -driven organizations.
            </h2>

          </div>
             <Cont3/>

             {/* third fase*/}
              {/* fourth fase*/}
              <div className="system" id="work">
             <h1 className="head" data-aos="new" data-aos-delay="200">Selected Work</h1>
             <p className="dis" data-aos="new" data-aos-delay="200">Here’s some of my work, in the case you wanna have a look 👀</p>
             <div className="navigation" data-aos="new" data-aos-delay="200">
                <div className="n"><button className={nav==0?"white":"black"} onClick={()=>setNav(0)} >UX RESEARCH</button></div>
                <div className="n" ><button className={nav==1?"white":"black"} onClick={()=>setNav(1)}>PRODUCT DESIGN</button></div>
                <div className="n"><button className={nav==2?"white":"black"}   onClick={()=>setNav(2)}>VISUAL DESIGN</button></div>
                  
             </div>  <hr style={{color:"white",marginTop:"0vh"}}/>
             <div className="frame" data-aos="fade-up" data-aos-delay="200">
                     {nav==0?<UX/>:<div style={{diaplay:'none'}}></div>} {nav==2?<VD/>:<div style={{diaplay:'none'}}></div>}
                     {nav==1?<PD/>:<div style={{diaplay:'none'}}></div>}
                    </div>

                    
                  
          </div>       
        
    </div>);
}
export default Body;