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
            
          <div className="fouter container" id="Contact">
            <div className="fo1 ">
              <h2 >
                <span data-aos="fade-right" data-aos-delay="220" data-aos-duration="150">Let’s build something together </span>
                <span data-aos="fade-right" data-aos-delay="420" data-aos-duration="150">that actually solves a problem, </span>
                <span data-aos="fade-right" data-aos-delay="620" data-aos-duration="150"> and creates an impact!</span>
     
                </h2>
              <br/>
              <br/>
              <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="500">Have an idea?</p>
              <span className="span" data-aos="fade-right" data-aos-delay="400" data-aos-duration="500">ronuxdnr@gmail.com</span>

            </div>
            <div className="fo2 ">
              <p data-aos="fade-left" data-aos-delay="220" data-aos-duration="500">I like to interact with people and have started </p>
              <p data-aos="fade-left" data-aos-delay="420" data-aos-duration="500">posting on my social media too!</p>
              <br/>
              
              <div className="icons" data-aos="fade-left" data-aos-delay="600" data-aos-duration="500">
                <img  src={icon}/>
                <img  src={icon2}/>
                <img src={icon3}/>
                <img src={icon4}/>
                <img src={icon5}/>
                <img src={icon6}/>
              
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <span data-aos="fade-left" data-aos-delay="700" data-aos-duration="500"><a href="#"><img src={button}/></a></span>
            </div>
          </div>
         
         
        </div>
    )

}
export default Foot;