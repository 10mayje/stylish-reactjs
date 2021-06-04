import react,{useEffect} from 'react';
import Img from '../images/Project.png';
import Img2 from '../images/Project2.png';
import Img3 from '../images/Etark-app.png';

import "aos/dist/aos.css";
import Aos from 'aos';
const PD=()=>{
    useEffect(()=>{ 
      
        Aos.init({duration:1000});
     
      },[]); 

    return(<div className="containner">
        <div className="box1" data-aos="fade-up" data-aos-delay="500"><div><img src={Img}/></div><h2>PAYU NEXTGEN MERCHANTS</h2></div>
        <div className="box1 b3" data-aos="fade-up" data-aos-delay="700"><div><img src={Img2}/></div><h2>KLOH APP-MEET WITH PEOPLE OFFLINE</h2></div>
        <div className="box1" data-aos="fade-up" data-aos-delay="900"><div><img src={Img3}/></div><h2>ETARK-APPLICATION DESIGN + BUSINESS ADVISORY</h2></div>
        
    </div>);
}
export default PD;