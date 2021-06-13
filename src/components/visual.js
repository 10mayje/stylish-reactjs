import {useEffect,useState} from 'react';
import Img from '../images/Visual-design.png';
import Img2 from '../images/Social-media.png';
import Img3 from '../images/Aarohan-web-design.png';
import btn1 from '../images/Vol-01.svg';
import btn2 from '../images/Vol-02.svg';
import { Waypoint } from 'react-waypoint';
import Tilt from 'react-vanilla-tilt';
import "aos/dist/aos.css";
import Aos from 'aos';
const VD=()=>{
    const isMobile = window.innerWidth <= 500;
    const [style, setStyle] = useState('invisible');
    const [style2, setStyle2] = useState('opacityhigh');
    const [style3, setStyle3] = useState('invisible');
    const [style4, setStyle4] = useState('opacityhigh');
    const [style5,setStyle5]=useState('k');
    const [style6,setStyle6]=useState('k');
    const [style7,setStyle7]=useState('k');
    const [style8,setStyle8]=useState('k');
    const [style9,setStyle9]=useState('k');
    const timer=()=>{
        setStyle5('animated');
        setStyle8('animated3');
     }
     const end=()=>{
        setStyle5('animated2');
        setStyle8('animated4');
     
     }
     const timer2=()=>{
        setStyle6('animated');
        setStyle9('animated3');
     }
     const end2=()=>{
        setStyle6('animated2');
        setStyle9('animated4');
        
     }
     const timer3=()=>{
        setStyle7('animated');
     }
     const end3=()=>{
        setStyle7('animated2');
     }
    const hover=()=>{
        if(!isMobile){
           setStyle('hoverbutton');
           setStyle2('opacitylow');}
    }
    const hout=()=>{

        if(!isMobile){

         setStyle('invisible');
        setStyle2('opacityhigh');   
        }
        
    }
    const hover2=()=>{
        if(!isMobile){
setStyle3('hoverbutton2');
        setStyle4('opacityhigh');

        }

        
 }
 const hout2=()=>{
    if(!isMobile){
         setStyle3('invisible');
     setStyle4('opacityhigh');
    }
    
 }
const check=()=>{
    if(isMobile){
       
        if(style=='hoverbutton'){
            setStyle('invisible');
        setStyle2('opacityhigh');
        }else{
          setStyle('hoverbutton');
        setStyle2('opacitylow');  
        }
        
    }
}




const check2=()=>{
    if(isMobile){
        if(style3=='hoverbutton2'){
            setStyle3('invisible');
            setStyle4('opacityhigh');
        }else{
            setStyle3('hoverbutton2');
            setStyle4('opacitylow');  
        }
        
    }
}

    useEffect(()=>{ 
      
        Aos.init({duration:1000});
     
      },[]); 
    return(<div className="containner" > 
        <div className='box1'   >
       
            <div>           <Waypoint
  onEnter={timer} onLeave={end}
  
/>
                <Tilt  style={{width:'100%'}} options={{ scale: 2, max: 15 }} >
                    
                        <div className="hover"  data-aos="fade-up" data-aos-delay="1000" >
                         <img onClick={check}
                            onMouseEnter={hover} onMouseLeave={hout} onTouchMove={hover} onTouchStart={hover} onTouchEnd={hout}  className={style2} src={Img}/> 
                         
                        </div>
                       
                   
                
                </Tilt> 

                
  <div className={style} onClick={check} onMouseEnter={hover} onMouseLeave={hout} onTouchMove={hover} onTouchStart={hover}    style={{display:"flex",flexDirection:'column',position:'absolute'}}>
                          
                         <div className='hoverbtn'><a href='https://www.behance.net/gallery/51355885/Aarohan-2017-Posters' target="_blank"><button>View Volume 01</button></a>  </div>
                         
                         <div className='hoverbtn'><a href=' https://www.behance.net/gallery/63676451/AAROHAN-2018-POSTERS' target="_blank"><button>View Volume 02</button></a></div>
                     
                    
                            
                    
                
          


                </div>
                  
     <div className={style5}>
                    <h2  className="number">01</h2> 
              </div>
              
               
            </div>
            <div className="btext">
              <h2 className={style5}>VISUAL DESIGN PROJECTS <span> HEAD, WDCT </span> </h2> 

              

            </div>
            
        </div>

        <div className="box1 b3"   >
        
            <div>              <Waypoint
  onEnter={timer2} onLeave={end2}
  
/>  
                <Tilt  style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                  
                        <div width="100%" data-aos="fade-up" data-aos-delay="1000" >
                         <img  onClick={check2} onMouseEnter={hover2} onMouseLeave={hout2} onTouchMove={hover2} onTouchStart={hover2} onTouchEnd={hout2}  className={style4} src={Img2}/> 
                           
                        </div>
                  
                    
                </Tilt>
                <div className={style3} onClick={check2}  onMouseEnter={hover2} onMouseLeave={hout2} onTouchMove={hover2} onTouchStart={hover2}style={{display:"flex",flexDirection:'column',position:'absolute'}}>
                          
                          
                            
                         <div className='hoverbtn'><a href='https://www.behance.net/gallery/56745539/Social-media-posts-vol-1' target="_blank"><button>View Volume 01</button></a>  </div>
                         
                         <div className='hoverbtn'><a href=' https://www.behance.net/gallery/63686341/Social-media-posts-Vol-2' target="_blank"><button>View Volume 02</button></a></div>
                            
                    </div>
            <div className={style6}>
                            <h2 className="number2">02</h2> 
                </div>
        
            </div>
            <div className="btext">
              <h2 className={style6}>SOCIAL MEDIA POST - COLLECTIONS</h2>  
            </div>
            
        </div>
        <div className="box1" >
            <div>
                <Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                    <a href='https://www.behance.net/gallery/63648505/AAROHAN-2018-WEBSITE-DESIGN-DEVELOPMENT' target="_blank">
                    <div width="100%" data-aos="fade-up" data-aos-delay="1000" >
                         <img  src={Img3}/>    
                        </div> 
                    </a>
                   
                </Tilt>
                <Waypoint
  onEnter={timer3} onLeave={end3}
  
/>            <div className={style7}><h2 className="number3">03</h2>
                    </div>  
            </div>
            <div className="btext">
                 <h2 className={style7}><span>WEBSITE DESIGN   </span> AAROHAN 2018</h2> 
            </div>
          
        </div>
    </div>);
}
export default VD;