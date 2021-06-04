import react,{useEffect} from 'react';
import Img from '../images/Trust,satisfaction.png';
import Img2 from '../images/Privacy-trust.png';
import Img3 from '../images/Privacy-trust2.png';
import "aos/dist/aos.css";
import Aos from 'aos';
const VD=()=>{
    useEffect(()=>{ 
      
        Aos.init({duration:1000});
     
      },[]); 
    return(<div className="containner">
        <div className="box1" data-aos="fade-up" data-aos-delay="500"><div><img src={Img}/></div><h2>TRUST, SATISFACTION & LOYALTY ACROSS M-COMMERCE APPS</h2></div>
        <div className="box1 b3" data-aos="fade-up" data-aos-delay="700"><div><img src={Img2}/></div><h2>RETHINKING TRAINING EXPERIENCE IN LIBRARIES - SPRINTS AND FIELD RESEARCH</h2></div>
        <div className="box1" data-aos="fade-up" data-aos-delay="900"><div><img src={Img3}/></div><h2>PRIVACY AND TRUST IN MOBILE APPS</h2></div>
    </div>);
}
export default VD;