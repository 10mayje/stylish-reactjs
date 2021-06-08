import emailjs from 'emailjs-com';
import React, { useEffect,useState,useRef } from "react";
import img from '../images/Contact-me.png';
import bt from '../images/send request def.png';
import bt2 from '../images/send req.png';
import bt3 from '../images/send req2.png'
const Form=()=>{
    const [text,setText]=useState('');
    const [text2,setText2]=useState('');
    const [r,setR]=useState(0);
    const [style,setStyle]=useState('k');
    const [style2,setStyle2]=useState('k');
   const click=()=>{
     if(text==''){
       setStyle('id')
     }
     if(text2==''){
       setStyle2('id2')
     }
   } 
   const sendEmail=(e)=>{
       e.preventDefault();
       
      
       
       if(text==null && text2==null){
           setR(0)
       }
       else{
                emailjs.sendForm('service_mty4gyp','template_mqdw5en',e.target ,'user_TLmvK5IREb4yuPyoXDbAQ')
    .then(function(response) {
       alert('SUCCESS!', response.status, response.text);
       
    }, function(error) {
       alert('FAILED...', error);
       
    });
    e.target.reset()
       }
  
    setText('');
    setText2('');
    setR(0);
    
   }
  return(
      <div className="from">
          <div className="texttop">
              <h1>Don’t worry, I’m here to help you!</h1>
              <p>My diverse range of expertise is here to assist 
                  you with solving your problems through UX Research, 
                  Interface and interaction design, motion design or
                   even end-to-end product design projects!</p>
          </div>
          <div className="inputtext">
             <form onSubmit={sendEmail} >
                 <label>What do you want me to call you?</label><br/>
              
                    <input id={style} placeholder={style=='id'?'This is important to be filled up!':'Tell me your name'} type='text' name='name' value={text} onChange={(e)=>{
                     setText(e.target.value);
                   
                
                }} required />
                
                <br/>
                 <label>What do you want me to build/solve?</label><br/>
                 <textarea id={style2} placeholder={style=='id'?'This is important to be filled up!':'Tell me what you want to solve'} name='message' onChange={(e)=>{
                    setText2(e.target.value);
                  
                 }
                   } required>{text2}</textarea><br/>
                 {text==''||text2==''?<button type='button' onClick={click} style={{background: '#656971'}} >Send your requirement</button>:
                 <button type='submit'  data-bs-toggle="modal" data-bs-target="#example"   >Send your requirement</button>}
             </form>

          </div>



         <div className='style'>

               <div class="modal fade  " id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{zIndex:'99999999999999'}}>
  <div class="modal-fullscreen modal-dialog"  >
    <div class="modal-content " >
      <div class="modal-header">
      
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div className='ondone'>
              <img src={img} />
              <h2>I’ll go through your requirements and get back you.</h2>
              <p>Alternatively, you can reach out to me on   <span className='no'>+91-8017697352</span></p>


                 
               <button type="button"  data-bs-dismiss="modal">Back to seeing my work!</button>
                
              
          </div>
      </div>
     
    </div>
  </div>
</div>
         </div>
        
      </div>
  )
}


export default Form;