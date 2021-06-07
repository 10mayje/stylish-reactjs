import react,{useEffect} from 'react';

import Tilt from 'react-vanilla-tilt';

import Img from '../images/Trust,satisfaction.png';
import Img2 from '../images/Privacy-trust.png';
import Img3 from '../images/Privacy-trust2.png';
import Img4 from '../images/Ecogrocer-app.png';
import file1 from './file/Cross-cultural research - Rounak Ghosh.pdf';
import file2 from './file/CASE STUDY-UX in Libraries.pdf';

import "aos/dist/aos.css";
import Aos from 'aos';
const UX=()=>{
    useEffect(()=>{ 
      
        Aos.init({duration:1000});
     
      },[]); 
    return(<div className="containner">
        <div className="box1" >
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href={file1} target="_blank">
                <div width="100%" data-aos="fade-up" data-aos-delay="1000">
                         <img  src={Img}/>    
                        </div>
                    </a></Tilt><h2 className="number">01</h2> 
                    </div>

                    <div className="btext">
                     <h2 data-aos="new" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">TRUST, SATISFACTION & LOYALTY ACROSS M-COMMERCE APPS</h2>   
                    </div>
            
        </div>
        <div className="box1 b3" >
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}><a href={file2} target="_blank">
            <div width="100%" data-aos="fade-up" data-aos-delay="1000">
                         <img  src={Img2}/>    
                        </div>
                </a></Tilt><h2 className="number2">02</h2> 
                </div>

                <div className="btext">
               <h2 data-aos="new" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">RETHINKING TRAINING EXPERIENCE IN LIBRARIES - SPRINTS AND FIELD RESEARCH</h2>     
                </div>
            
        </div>
        <div className="box1" >
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href='https://blog.prototypr.io/a-step-away-from-privacy-hoax-d6e29ced0488' target="_blank">
                <div width="100%" data-aos="fade-up" data-aos-delay="1000" >
                         <img  src={Img3}/>    
                        </div>
                    </a></Tilt><h2 className="number3">03</h2> 
                    </div>

                    <div className="btext">

                               <h2 data-aos="new" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">PRIVACY AND TRUST IN MOBILE APPS</h2>     
                    </div>

        </div>
        <div className="box1 b3" >
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href='https://blog.prototypr.io/ecogrocer-app-an-ux-case-study-2e2a9dba5d8e' target="_blank">
                <div width="100%" data-aos="fade-up" data-aos-delay="1000">
                         <img  src={Img4}/>    
                        </div>
                    </a></Tilt><h2  className="number4">04</h2> 
                    </div>

                    <div className="btext">
                    <h2 data-aos="new" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">ECOGROCER MOBILE APP - A VIEW INTO USER RESEARCH</h2>      
                    </div>
           
        </div>
    </div>);
}
export default UX;