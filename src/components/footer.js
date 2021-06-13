import react,{useEffect} from 'react';

import icon from '../images/twitter (1) 1.svg';
import button from '../images/Back-to-top.png'; 
import icon2 from '../images/instagram 1.svg';
import icon3 from '../images/linkedin 1.svg';
import icon4 from '../images/dribbble-logo.svg';
import icon5 from '../images/Behance.svg';
import icon6 from '../images/medium 1.svg';

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
                <span data-aos="fade-right" data-aos-delay="520" data-aos-duration="750">Let’s build something together </span>
                <span data-aos="fade-right" data-aos-delay="720" data-aos-duration="850">that actually solves a problem, </span>
                <span data-aos="fade-right" data-aos-delay="820" data-aos-duration="950"> and creates an impact!</span>
     
                </h2>
            
         

            </div>
            <div className="fo2 ">
              <p>
         <span data-aos="fade-left" data-aos-delay="520" data-aos-duration="500">I like to interact with people and have started </span>
              <span data-aos="fade-left" data-aos-delay="720" data-aos-duration="700">posting on my social media too!</span>

              </p>
     
               <div className="icons" data-aos="fade-left" data-aos-delay="600" data-aos-duration="500">
                 <a href='https://www.behance.net/Rounak0713'  target="_blank">
                 <i class="fab fa-behance"></i>
                   </a>
                <a href='https://www.linkedin.com/in/rounak-ghosh-53a21b136/'  target="_blank">
                <i class="fab fa-linkedin-in"></i>
                </a>
                <a href='https://medium.com/@rg.uidesign'  target="_blank">
                <i class="fab fa-medium-m"></i>
                </a>
                <a href='https://dribbble.com/drifted_galaxy'  target="_blank">
                <i class="fab fa-dribbble"></i>
                </a>
                <a href='https://www.instagram.com/ronuiux/'  target="_blank">
                <i class="fab fa-instagram"></i>
                </a>
               <a href='https://twitter.com/Ronuxdesign'  target="_blank">
               <i class="fab fa-twitter"></i>
               </a>
                
                
              
              </div>
              
             
            </div>
          </div>
          <div className='fouter'>
              <div className='fo1'>
              <p className='idea' data-aos="fade-right" data-aos-delay="200" data-aos-duration="500">Have an idea?</p>
              <a style={{textDecorationLine:'none'}} href="mailto:ronuxdnr@gmail.com"><span className="span" data-aos="fade-right" data-aos-delay="400" data-aos-duration="500">ronuxdnr@gmail.com</span></a>
              </div>
               
              <div className='fo2 back'>
           
           
              <span  data-aos="fade-left" data-aos-delay="600" data-aos-duration="500"><a href="#"><img src={button}/></a></span>
              </div>



          </div>
         
          <div className="last"> <hr style={{color:"white"}} />
            <p className="copy">2021. Made with ❤️. All rights reserved</p>
          </div>  
        </div>
    )

}
export default Foot;