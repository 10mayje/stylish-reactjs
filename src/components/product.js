import react,{useEffect,useState} from 'react';
import Img2 from '../images/Project.png';
import Img from '../images/Project2.png';
import Img3 from '../images/Etark-app.png';
import Img4 from '../images/cover-airtel.png';
import Tilt from 'react-vanilla-tilt';
import file1 from './file/Case-study-PayU2.pdf';
import { Waypoint } from 'react-waypoint';
import "aos/dist/aos.css";
import Aos from 'aos';
const PD=()=>{
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
      
        Aos.init({duration:1500});
     
      },[]); 

    return(<div className="containner">
           <div className="box1" data-aos="fade-up" data-aos-delay="500" >
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href='https://www.figma.com/proto/qBUVxH9AAVxRJkDrBzVuQ7/web-recharges-case-study?page-id=0%3A1&node-id=2%3A2&viewport=414%2C48%2C0.32&scaling=contain&starting-point-node-id=2%3A2' target="_blank">
                    
                <div width="100%" >
                         <img  src={Img4}/>    
                        </div>
                    
                    </a></Tilt>
                    <Waypoint
  onEnter={timer} onLeave={end}
/>
                    <div><h2 className="number">01</h2> 
                        </div>
                    </div>
                <div className="btext">
<h2  className={style}>REDESIGNING AIRTEL RECHARGES</h2>

                </div>
            
            
        </div>
        <div className="box1 b3" data-aos="fade-up" data-aos-delay="500" >
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href={file1} target="_blank">
                    
                <div width="100%" >
                         <img  src={Img}/>    
                        </div>
                    
                    </a></Tilt>
                    <Waypoint
  onEnter={timer2} onLeave={end2}
/>
   
                    <div className={style2}><h2 className="number2">02</h2> 
                        </div>
                    </div>
                <div className="btext">

                   <h2  className={style2}>PAYU NEXTGEN MERCHANTS</h2> 
                </div>
            
        </div>
        <div className="box1" data-aos="fade-up" data-aos-delay="500" >
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href='https://www.behance.net/gallery/87352065/Kloh-A-Social-App-UIUX' target="_blank">
                    
                <div width="100%" >
                         <img  src={Img2}/>    
                        </div>
                    
                    </a></Tilt>
                    <Waypoint
  onEnter={timer3} onLeave={end3}
/>
                    <div className={style3}><h2 className="number3 ex" >03</h2> 
                        </div>
                    </div>
                <div className="btext">
<h2  className={style3}>KLOH APP-MEET WITH PEOPLE OFFLINE</h2>

                </div>
            
            
        </div>
        <div className="box1 b3" data-aos="fade-up" data-aos-delay="500">
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href='https://play.google.com/store/apps/details?id=com.etark.app' target="_blank">
                <div width="100%" >
                         <img  src={Img3}/>    
                        </div>
                    
                    </a></Tilt>
                    <Waypoint
  onEnter={timer4} onLeave={end4}
/>
                    
                    <div className={style4}><h2  className="number4">04</h2> 
                        </div>
                    </div>
                    <div className="btext">
 <h2 className={style4}>ETARK-APPLICATION DESIGN + BUSINESS ADVISORY</h2>

                    </div>
           
        </div>
     
        
    </div>);
}
export default PD;