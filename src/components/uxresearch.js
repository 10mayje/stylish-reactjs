import react,{useEffect,useState} from 'react';

import Tilt from 'react-vanilla-tilt';

import Img from '../images/Trust,satisfaction.png';
import Img2 from '../images/Privacy-trust.png';
import Img3 from '../images/Privacy-trust2.png';
import Img4 from '../images/Ecogrocer-app.png';
import file1 from './file/Cross-cultural research - Rounak Ghosh.pdf';
import file2 from './file/CASE STUDY-UX in Libraries.pdf';
import { Waypoint } from 'react-waypoint';
import "aos/dist/aos.css";
import Aos from 'aos';
const UX=()=>{
    const [style,setStyle]=useState('k');
    const [style2,setStyle2]=useState('k');
    const [style3,setStyle3]=useState('k');
    const [style4,setStyle4]=useState('k');
    const timer=()=>{
       setStyle('animated');
    }
    const end=()=>{
        setStyle('animated2');
    }
    const timer2=()=>{
        setStyle2('animated');
     }
     const end2=()=>{
        setStyle2('animated2');
    }
     const timer3=()=>{
        setStyle3('animated');
     }
     const end3=()=>{
        setStyle3('animated2');
    }
     const timer4=()=>{
        setStyle4('animated');
     }
     const end4=()=>{
        setStyle4('animated2');
    }

    useEffect(()=>{ 
      
        Aos.init({duration:1000});
     
      },[]); 
    return(<div className="containner">
        <div className="box1" data-aos="fade-up" data-aos-delay="500" >
            <div>
                
                <Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href={file1} target="_blank">
                <div width="100%" >
                         <img  src={Img}/>    
                        </div>
                    </a></Tilt>
                    <Waypoint
  onEnter={timer} onLeave={end}
/>
                   <div className={style}><h2 className="number">01</h2> 
                       </div> 
                    </div>

                    <div className="btext" style={{display:'flex'}}>
                     <h2 className={style}>TRUST, SATISFACTION & LOYALTY ACROSS M-COMMERCE APPS</h2>   
                    </div>
            
        </div>
        <div className="box1 b3" data-aos="fade-up" data-aos-delay="500" >
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}><a href={file2} target="_blank">
            <div width="100%">
                         <img  src={Img2}/>    
                        </div>
                </a></Tilt>
                <Waypoint
  onEnter={timer2} onLeave={end2}
/>
               <div className={style2}><h2 className="number2">02</h2>
                   </div>  
                </div>

                <div className="btext">
               <h2 className={style2}>RETHINKING TRAINING EXPERIENCE IN LIBRARIES - SPRINTS AND FIELD RESEARCH</h2>     
                </div>
            
        </div>
        <div className="box1" data-aos="fade-up" data-aos-delay="500" >
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href='https://blog.prototypr.io/a-step-away-from-privacy-hoax-d6e29ced0488' target="_blank">
                <div width="100%">
                         <img  src={Img3}/>    
                        </div>
                    </a></Tilt>
                    <Waypoint
  onEnter={timer3} onLeave={end3}
/>
                    <div className={style3}><h2 className="number3">03</h2> 
                        </div>
                    </div>

                    <div className="btext">

                               <h2 className={style3}>PRIVACY AND TRUST IN MOBILE APPS</h2>     
                    </div>

        </div>
       {/* <div className="box1 b3" data-aos="fade-up" data-aos-delay="500">
            <div>                   <Waypoint
  onEnter={timer4} onLeave={end4}
/><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href='https://blog.prototypr.io/ecogrocer-app-an-ux-case-study-2e2a9dba5d8e' target="_blank">
                <div width="100%" >
                         <img  src={Img4}/>    
                        </div>
                    </a></Tilt>
 
                    <div className={style4}><h2  className="number4">04</h2> 
                        </div>
                    </div>

                    <div className="btext">
                    <h2 className={style4}>ECOGROCER MOBILE APP - A VIEW INTO USER RESEARCH</h2>      
                    </div>
           
        </div>*/} 
    </div>);
}
export default UX;