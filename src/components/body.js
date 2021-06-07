
import React, { useEffect,useState,useRef } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import UX from './uxresearch';
import PD from './product';
import VD from './visual';
import img from '../images/Contact-me.png'
import gif from '../images/Hero-animation.gif';
import './style/style.css';
import Cont3 from './container3';
import Countdown from './countdown';
import Form from './form';
import img1 from '../images/logo_mark.png';
const Body=()=>{
    
    const [nav,setNav]=useState(0);


 
    useEffect(()=>{ 
      
      Aos.init({duration:800});
     
      
    },[]); 
    
    return(
    <div className="background">
       <div  style={{position:'fixed',zIndex:'99999999',marginTop:'10px',marginLeft:'0.5vw'}}>
            <img src={img1}/>
        </div> 
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
                       <div className="bt-n" data-aos="new" data-aos-delay="1500">
                      
                       <button type="button" class="btn btn-primary btn-lg b1" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Let's talk!
</button>



<a href='#work'>
<button type="button"  class="btn btn-secondary  b2">Explore my work</button></a>
                       </div>
                       <div data-aos="new" data-aos-delay="1000">
                         
                         <h3 className="contact">Contact</h3><a style={{textDecorationLine:'none'}} href="mailto:ronuxdnr@gmail.com"> <h2 className="c2"> ronuxdnr@gmail.com</h2>  </a>
                       </div>
               </div>
               <div className="item-two " data-aos="fade-up" data-aos-duration="1000"   ><img src={gif}/></div>

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
              <Countdown/>
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





                                 {/*-- Modal --*/}
<div class="modal fade  " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{zIndex:'99999999999999'}}>
  <div class="modal-fullscreen modal-dialog" >
    <div class="modal-content " >
      <div class="modal-header">
      
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
           <div className='im'><img src={img}/><div className='top'><h6 style={{fontsize: '10px'}}>Don’t worry, I’m here to help you!</h6></div></div>
           <div>
               
             <Form/>
           </div>
      </div>
     
    </div>
  </div>
</div>

        
    </div>);
}
export default Body;