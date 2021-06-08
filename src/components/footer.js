import react,{useEffect} from 'react';

import icon from '../images/twitter (1).png';
import button from '../images/Back-to-top.png'; 
import icon2 from '../images/instagram 1.png';
import icon3 from '../images/linkedin 1.png';
import icon4 from '../images/dribbble-logo.png';
import icon5 from '../images/Behance.png';
import icon6 from '../images/medium 1.png';

import "aos/dist/aos.css";
import Aos from 'aos';

const Foot=()=>{
    useEffect(()=>{ 
      
        Aos.init({duration:500});
     
      },[]); 


    return(
        <div className="bottom">
            
          <div className="fouter " id="Contact">
            <div className="fo1 ">
              <h2 >
                <span data-aos="fade-right" data-aos-delay="220" data-aos-duration="150">Let’s build something together </span>
                <span data-aos="fade-right" data-aos-delay="420" data-aos-duration="150">that actually solves a problem, </span>
                <span data-aos="fade-right" data-aos-delay="620" data-aos-duration="150"> and creates an impact!</span>
     
                </h2>
            
         

            </div>
            <div className="fo2 ">
              <p data-aos="fade-left" data-aos-delay="220" data-aos-duration="500">I like to interact with people and have started </p>
              <p data-aos="fade-left" data-aos-delay="420" data-aos-duration="500">posting on my social media too!</p>
               <div className="icons" data-aos="fade-left" data-aos-delay="600" data-aos-duration="500">
                 <a href='https://www.behance.net/Rounak0713'  target="_blank"><img  src={icon5} />
                   </a>
                <a href='https://www.linkedin.com/in/rounak-ghosh-53a21b136/'  target="_blank">
                  <img  src={icon3}/>
                </a>
                <a href='https://medium.com/@rg.uidesign'  target="_blank">
                  <img  src={icon6}/>
                </a>
                <a href='https://dribbble.com/drifted_galaxy'  target="_blank">
                   <img  src={icon4}/>
                </a>
                <a href='https://www.instagram.com/ronuiux/'  target="_blank">
                   <img  src={icon2}/>
                </a>
               <a href='https://twitter.com/Ronuxdesign'  target="_blank">
                 <img   src={icon}/> 
               </a>
                
                
              
              </div>
              
             
            </div>
          </div>
          <div className='fouter'>
              <div className='fo1'>
              <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="500">Have an idea?</p>
              <a style={{textDecorationLine:'none'}} href="mailto:ronuxdnr@gmail.com"><span className="span" data-aos="fade-right" data-aos-delay="400" data-aos-duration="500">ronuxdnr@gmail.com</span></a>
              </div>
               
              <div className='fo2 back'>
           
           
              <span data-aos="fade-left" ><a href="#"><img src={button}/></a></span>
              </div>



          </div>
         
          <div className="last"> <hr style={{color:"white",marginTop:"20vh",marginRight:'10vw'}} />
            <p className="copy">2021. Made with ❤️. All rights reserved</p>
          </div>  
        </div>
    )

}
export default Foot;