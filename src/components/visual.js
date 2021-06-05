import react,{useEffect} from 'react';
import Img from '../images/Trust,satisfaction.png';
import Img2 from '../images/Privacy-trust.png';
import Img3 from '../images/Privacy-trust2.png';
import Tilt from 'react-vanilla-tilt';
import "aos/dist/aos.css";
import Aos from 'aos';
const VD=()=>{
    useEffect(()=>{ 
      
        Aos.init({duration:1000});
     
      },[]); 
    return(<div className="containner">
        <div className="box1" >
            <div>
                <Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                    <a href='https://www.behance.net/gallery/63676451/AAROHAN-2018-POSTERS' onClick={()=>{
                        
                        window.open('https://www.behance.net/gallery/51355885/Aarohan-2017-Posters', '_black');
                        
                    }} >
                        <div width="100%" data-aos="fade-up" data-aos-delay="1000">
                         <img  src={Img}/>    
                        </div>
                       
                    </a>
                
                </Tilt>
            </div>
            <div className="btext">
              <h2 data-aos="fade-up" data-aos-delay="1000">TRUST, SATISFACTION & LOYALTY ACROSS M-COMMERCE APPS</h2>  
            </div>
            
        </div>
        <div className="box1 b3" >
            <div>
                <Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                    <a href='https://www.behance.net/gallery/63686341/Social-media-posts-Vol-2' onClick={()=>{
                        
                        window.open(' https://www.behance.net/gallery/56745539/Social-media-posts-vol-1', '_blank');
                        
                    }}>
                        <div width="100%" data-aos="fade-up" data-aos-delay="1000">
                         <img  src={Img2}/>    
                        </div>
                    </a>
                    
                </Tilt>
            </div>
            <div className="btext">
              <h2 data-aos="fade-up" data-aos-delay="1000">RETHINKING TRAINING EXPERIENCE IN LIBRARIES - SPRINTS AND FIELD RESEARCH</h2>  
            </div>
            
        </div>
        <div className="box1" >
            <div>
                <Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                    <a href='https://www.behance.net/gallery/63648505/AAROHAN-2018-WEBSITE-DESIGN-DEVELOPMENT'>
                    <div width="100%" data-aos="fade-up" data-aos-delay="1000">
                         <img  src={Img3}/>    
                        </div> 
                    </a>
                   
                </Tilt>
            </div>
            <div className="btext">
                 <h2 data-aos="fade-up" data-aos-delay="1000">PRIVACY AND TRUST IN MOBILE APPS</h2> 
            </div>
          
        </div>
    </div>);
}
export default VD;