import react,{useEffect,useState} from 'react';
import Img from '../images/Visual-design.png';
import Img2 from '../images/Social-media.png';
import Img3 from '../images/Aarohan-web-design.png';

import Tilt from 'react-vanilla-tilt';
import "aos/dist/aos.css";
import Aos from 'aos';
const VD=()=>{
    const [style, setStyle] = useState('invisible');
    const [style2, setStyle2] = useState('p');
    const [style3, setStyle3] = useState('invisible');
    const [style4, setStyle4] = useState('p');
    const hover=()=>{
           setStyle('hoverbutton');
           setStyle2('z');
    }
    const hout=()=>{
        setStyle('invisible');
        setStyle2('p');
    }
    const hover2=()=>{
        setStyle3('hoverbutton2');
        setStyle4('z');
 }
 const hout2=()=>{
     setStyle3('invisible');
     setStyle4('p');
 }


    useEffect(()=>{ 
      
        Aos.init({duration:1000});
     
      },[]); 
    return(<div className="containner">
        <div className='box1'   onMouseOver={hover} onMouseOut={hout} onTouchEnd={hout}>
        <div className={style}  style={{display:"flex",flexDirection:'column'}}>
                          
                          <a href='https://www.behance.net/gallery/51355885/Aarohan-2017-Posters' target="_blank"> <button className='bt-1'>View Volume 1</button>    </a> 
                     
                           <a href='https://www.behance.net/gallery/63676451/AAROHAN-2018-POSTERS' target="_blank"> <button className='bt-2'>View Volume 2</button>   </a>
                            
                    </div>
            <div>
                <Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }} >
                    
                        <div width="100%" data-aos="fade-up" data-aos-delay="1000" >
                         <img  className={style2} src={Img}/> 
                         
                        </div>
                       
                   
                
                </Tilt> 
              
                <h2  className="number">01</h2>  
            </div>
            <div className="btext">
              <h2 data-aos="new" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">VISUAL DESIGN PROJECTS <span> HEAD, WDCT </span> </h2>  
            </div>
            
        </div>
        <div className="box1 b3"   onMouseOver={hover2} onMouseOut={hout2} onTouchEnd={hout2}>
        <div className={style3} style={{display:"flex",flexDirection:'column'}}>
                          
                          <a href='https://www.behance.net/gallery/56745539/Social-media-posts-vol-1' target="_blank"> <button className='bt-1'>View Volume 1</button>    </a> 
                     
                           <a href='https://www.behance.net/gallery/63686341/Social-media-posts-Vol-2' target="_blank"> <button className='bt-2'>View Volume 2</button>   </a>
                            
                    </div>
            <div>
                <Tilt style={{width:'100%'}} options={{ scale: 2, max: 15 }}>
                  
                        <div width="100%" data-aos="fade-up" data-aos-delay="1000" >
                         <img className={style4} src={Img2}/> 
                           
                        </div>
                  
                    
                </Tilt><h2 className="number2">02</h2> 
            </div>
            <div className="btext">
              <h2 data-aos="new" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">SOCIAL MEDIA POST - COLLECTIONS</h2>  
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
                   
                </Tilt> <h2 className="number3">03</h2> 
            </div>
            <div className="btext">
                 <h2 data-aos="new" data-aos-delay="1000" data-aos-anchor-placement="top-bottom"><span>WEBSITE DESIGN   </span> AAROHAN 2018</h2> 
            </div>
          
        </div>
    </div>);
}
export default VD;