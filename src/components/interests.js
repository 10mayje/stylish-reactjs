import react,{useEffect} from 'react';
import img from '../images/IMG_1548.png';
import img2 from '../images/IMG_4024.png';
import img3 from '../images/IMG_1877-2.png';
import img4 from '../images/IMG_1388.png';
import img5 from '../images/Screenshot.png';
import img6 from '../images/KBA_0563.png';
import img7 from '../images/The_Peaky_Blinders.png';
import "aos/dist/aos.css";
import Aos from 'aos';

const Intrest=()=>{
    useEffect(()=>{ 
      
        Aos.init({duration:500});
     
      },[]); 


    return(
        <div>
              <div className="table1">
                  <div className="one"><img data-aos="fade-up"  src={img}/></div>
                  <div className="two"><img data-aos="fade-up" src={img2}/></div>
                  <div className="three"><img data-aos="fade-up" src={img3}/></div>
                  <div className="four"><img data-aos="fade-up" src={img4}/></div>
              </div>
              <div className="table2">
                  <h1>Interests</h1>
                  <p>When I’m not working, I’m usually working out or trying my 
                      hand around a sketch. I love playing football, sometimes 
                      indulge into music with the drums. I speak at events and 
                      conferences too!</p>
              </div>
              <div className="table3">
              <div className="five"><img data-aos="fade-up"  src={img5}/></div>
                  <div className="six"><img data-aos="fade-up" src={img6}/></div>
                  <div className="seven"><img data-aos="fade-up" src={img7}/></div>
                  
                  </div>            

        </div>
    )

}
export default Intrest;