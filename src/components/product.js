import react,{useEffect} from 'react';
import Img from '../images/Project.png';
import Img2 from '../images/Project2.png';
import Img3 from '../images/Etark-app.png';
import Tilt from 'react-vanilla-tilt';
import file1 from './file/Case-study-PayU.pdf';
import "aos/dist/aos.css";
import Aos from 'aos';
const PD=()=>{
    useEffect(()=>{ 
      
        Aos.init({duration:1500});
     
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

                   <h2  data-aos="new" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">PAYU NEXTGEN MERCHANTS</h2> 
                </div>
            
        </div>
        <div className="box1 b3" >
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href='https://www.behance.net/gallery/87352065/Kloh-A-Social-App-UIUX' target="_blank">
                    
                <div width="100%" data-aos="fade-up" data-aos-delay="1000">
                         <img  src={Img2}/>    
                        </div>
                    
                    </a></Tilt><h2 className="number2">02</h2> 
                    </div>
                <div className="btext">
<h2  data-aos="new" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">KLOH APP-MEET WITH PEOPLE OFFLINE</h2>

                </div>
            
            
        </div>
        <div className="box1" >
            <div><Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                <a href='https://play.google.com/store/apps/details?id=com.etark.app' target="_blank">
                <div width="100%" data-aos="fade-up" data-aos-delay="1000">
                         <img  src={Img3}/>    
                        </div>
                    
                    </a></Tilt><h2  className="number3">03</h2> 
                    </div>
                    <div className="btext">
 <h2 data-aos="new" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">ETARK-APPLICATION DESIGN + BUSINESS ADVISORY</h2>

                    </div>
           
        </div>
        
    </div>);
}
export default PD;