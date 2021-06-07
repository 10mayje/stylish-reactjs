import React, { useEffect,useState,useRef } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import UX from './uxresearch';
import PD from './/product';
import VD from './product';
import img from '../images/Interests.png';
import icon from '../images/twitter (1).png';
import button from '../images/Back-to-top.png'; 
import icon2 from '../images/instagram 1.png';
import icon3 from '../images/linkedin 1.png';
import icon4 from '../images/dribbble-logo.png';
import icon5 from '../images/Behance.png';
import icon6 from '../images/medium 1.png';
import Nav from "./navbar";
import gif from './style/Hero-animation.gif'

const Main=()=> {
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
    return (
      <div >
          <div className="container-one" > 
               <div className="item-one"  >
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
                   <p data-aos="new" data-aos-delay="600">I help purpose-driven organizations to</p>
                    <p data-aos="new" data-aos-delay="800" style={{zIndex:'9999',background:'#26282B'}}>achieve clarity on product-problems,
                     </p>
                     <p data-aos="new" data-aos-delay="1000">clarity on innovative concepts, and</p>
                     <p data-aos="new" data-aos-delay="1200">clarity on user needs by delivering clear,</p> 
                     <p data-aos="new" data-aos-delay="1400">hard-hitting insights that drive</p> 
                     <p data-aos="new" data-aos-delay="1600"> business goals and meaningful impacts.</p>
                      <p data-aos="new" data-aos-delay="1800">Also, I design and can animate to make</p>  
                       <p data-aos="new" data-aos-delay="2000">things more exciting!</p> 
                       <div className="bt-n" data-aos="new" data-aos-delay="2200">
                       <button type="button" class="btn btn-primary btn-lg b1">Let's talk!</button>
<button type="button" class="btn btn-secondary btn-lg b2">Explore my work</button>
                       </div>
                       <div data-aos="new" data-aos-delay="2400">
                         
                         <h3 className="contact">Contact</h3><h2 className="c2"> ronuxdnr@gmail.com</h2>
                       </div>
               </div>
               <div className="item-two" data-aos="new" data-aos-duration="1000"   ><img src={gif}/></div>

          </div>
          <div className="container-two"  data-aos="new" data-aos-delay="100">
            <h2>
            Most of the time, I’m either designing
            or conducting research for purpose -driven organizations.
            </h2>

          </div>
          <div className="container-three" id="About">
            <div className="item-3" >
              <h1 >
                <span data-aos="new" data-aos-delay="200">My </span>
                <span data-aos="new" data-aos-delay="300">friends </span>
                <span data-aos="new" data-aos-delay="400">call </span>
                <span data-aos="new" data-aos-delay="500">me </span>
                <span data-aos="new" data-aos-delay="600">Ron, </span>
                <span data-aos="new" data-aos-delay="700">wish </span>
                <span data-aos="new" data-aos-delay="800">I </span>
                <span data-aos="new" data-aos-delay="900">starred </span>
                <span data-aos="new" data-aos-delay="1000">in </span>
                <span data-aos="new" data-aos-delay="1100">Harry </span>
                <span data-aos="new" data-aos-delay="1200">Potter </span>
                <span data-aos="new" data-aos-delay="1300">though </span>
            
              </h1>

            </div>
             <div className="item-3" >
               <p data-aos="new" data-aos-delay="200">A little bit about me. I started my career as a freelancer in </p>
               <p data-aos="new" data-aos-delay="400">graphics design when I discovered UI and slowly started  </p>
               <p data-aos="new" data-aos-delay="600">thinking about user experience. I’ve done my master’s </p>
               <p data-aos="new" data-aos-delay="800">in Human-computer Interaction from University of York,   </p>
               <p data-aos="new" data-aos-delay="1000">United Kingdom, the time which got me hooked to user </p>
               <p data-aos="new" data-aos-delay="1200"> experience research. After a considerable amount of academic </p>
               <p data-aos="new" data-aos-delay="1400">research, I started my journey as a UX-er in industry.</p>
               <p data-aos="new" data-aos-delay="1600"> Although my expertise lies in UX, I love aesthetics and </p>
               <p data-aos="new" data-aos-delay="1800"> hence like contributing to design in every way possible </p>
               <p data-aos="new" data-aos-delay="1800"> (yes, including motion).</p>

               <br/> 
                <p data-aos="new" data-aos-delay="1900">
              
               I prefer outcomes which can influence human behaviours </p>
               <p data-aos="new" data-aos-delay="2000">and have a meaningful impact. Occasionally, I draw :)</p> 
              
             </div>
          </div>
          <div className="container count " data-aos="new" data-aos-delay="200">
              <h2 >{value}</h2>
              <p >{dis}</p>
          </div>
          <div className="system" id="work">
             <h1 className="head" data-aos="new" data-aos-delay="200">Selected Work</h1>
             <p className="dis" data-aos="new" data-aos-delay="200">Here’s some of my work, in the case you wanna have a look 👀</p>
             <div className="navigation" data-aos="new" data-aos-delay="200">
                <div className="n"><button onClick={()=>setNav(0)} >UX RESEARCH</button></div>
                <div className="n" ><button onClick={()=>setNav(1)}>PRODUCT DESIGN</button></div>
                <div className="n"><button onClick={()=>setNav(2)}>VISUAL DESIGN</button></div>
                  
             </div>  <hr style={{color:"white"}}/>
             <div className="frame" data-aos="fade-up" data-aos-delay="200">
                     {nav==0?<UX/>:<div style={{diaplay:'none'}}></div>} {nav==2?<VD/>:<div style={{diaplay:'none'}}></div>}
                     {nav==1?<PD/>:<div style={{diaplay:'none'}}></div>}
                    </div>

                    <hr style={{color:"white"}} />
                    <div className="bio"><h1 className="anmate-text text-moving" >I’m crafting five new products at Stylework. Stay tuned for the updates!  </h1>
                      </div>
                    <hr style={{color:"white"}} />
                  
          </div>
          <div className='cont-3' data-aos="fade-up" data-aos-delay="1000">
            <img src={img}/>
          </div>
          <hr style={{color:"white",marginTop:"-1vh"}} />
          <div className="fouter" id="Contact">
            <div className="fo1">
              <h2 >
                <span data-aos="fade-right" data-aos-delay="120" data-aos-duration="150">Let’s build something together that actually solves a problem, </span>
                <span data-aos="fade-right" data-aos-delay="120" data-aos-duration="150"> and creates an impact!</span>
     
                </h2>
              <br/>
              <br/>
              <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="500">Have an idea?</p>
              <span className="span" data-aos="fade-right" data-aos-delay="200" data-aos-duration="500">ronuxdnr@gmail.com</span>

            </div>
            <div className="fo2">
              <p data-aos="fade-left" data-aos-delay="120" data-aos-duration="500">I like to interact with people and have started posting on my social media too!</p>
              <br/>
              <br/>
              <div className="icons" data-aos="fade-left" data-aos-delay="200" data-aos-duration="500">
                <img src={icon}/>
                <img src={icon2}/>
                <img src={icon3}/>
                <img src={icon4}/>
                <img src={icon5}/>
                <img src={icon6}/>
              
              </div>
              <br/>
              <br/>
              <span data-aos="fade-left" data-aos-delay="200" data-aos-duration="500"><a href="#"><img src={button}/></a></span>
            </div>
          </div>
         
          <div> <hr style={{color:"white",marginTop:"20vh"}} />
            <p className="copy">2021. Made with ❤️. All rights reserved</p>
          </div>
          
      </div>
    );
  }
  
  export default Main;