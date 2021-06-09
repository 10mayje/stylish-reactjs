import emailjs from 'emailjs-com';
import React, { useState } from "react";
import img from '../images/Contact-me.png';
import btnreq from '../images/send-req-def.svg';
import btnreq2 from '../images/send-req.svg';
import btnreq3 from '../images/back-work.png';

const Form = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [r, setR] = useState(0);
  const [style, setStyle] = useState('k');
  const [style2, setStyle2] = useState('k');
  const [style3, setStyle3] = useState('k');
  const click = () => {
    if (text == '') {
      setStyle('id')
    }
    if (text2 == '') {
      setStyle2('id2')
    }
  }
  const short = () => {
    setStyle3('modelanimation');
  }
  const sendEmail = (e) => {
    e.preventDefault();



    if (text == null && text2 == null) {
      setR(0)
    }
    else {
      /*  emailjs.sendForm('service_mty4gyp','template_mqdw5en',e.target ,'user_TLmvK5IREb4yuPyoXDbAQ')
.then(function(response) {
 alert('SUCCESS!', response.status, response.text);
 
}, function(error) {
 alert('FAILED...', error);
 
});
e.target.reset();*/
    }

    setText('');
    setText2('');
    setR(0);


  }
  return (
   <div>
     
   </div>
  )
}


export default Form;