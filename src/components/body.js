import React, { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";

import btnreq from "../images/send-req-def.svg";
import btnreq2 from "../images/send-req.svg";
import btnreq3 from "../images/back-work.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import UX from "./uxresearch";
import PD from "./product";
import VD from "./visual";
import img from "../images/Contact-me.png";
import gif from "../images/Hero-animation.gif";
import "./style/style.css";
import Cont3 from "./container3";
import Countdown from "./countdown";

import img1 from "../images/logo_mark.png";
import imgbtn from "../images/Let's-talk.svg";
import "./style/navigation.css";
const Body = () => {
  const [nav, setNav] = useState(0);
  const [model, setModel] = useState("mo");
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [r, setR] = useState(0);
  const [style, setStyle] = useState("k");
  const [style2, setStyle2] = useState("k");
  const [s, setS] = useState("a");
  const [last, setLast] = useState("a");
  const [style3, setStyle3] = useState("k");
  const [input, setInput] = useState("button");
  const [input2, setInput2] = useState("button2");
  const click = () => {
    if (text == "") {
      setStyle("id");
    }
    if (text2 == "") {
      setStyle2("id2");
    }
  };
  const close = () => {
    setS("a");
  };
  const short = () => {
    setStyle3("modelanimation");
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (text == null && text2 == null) {
      setR(0);
    } else {
      /*
      emailjs.sendForm('service_mty4gyp', 'template_mqdw5en', e.target, 'user_TLmvK5IREb4yuPyoXDbAQ')
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);

        }, function (error) {
          console.log('FAILED...', error);

        });
      e.target.reset();*/
    }

    setText("");
    setText2("");
    setR(0);
    setS("b");
  };

  const check = () => {
    if (text !== "") {
      setInput("buttoncolor");
    } else {
      setInput("button");
    }
  };
  const check2 = () => {
    if (text2 !== "") {
      setInput2("buttoncolor2");
    } else {
      setInput2("button2");
    }
  };
  useEffect(() => {
    if (text !== "") {
      setInput("buttoncolor");
    } else {
      setInput("button");
    }
    if (text2 !== "") {
      setInput2("buttoncolor2");
    } else {
      setInput2("button2");
    }
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className="background">
      <div className="topicon">
        <a href="#" style={{ cursor: "pointer" }}>
          <img src={img1} />
        </a>
      </div>
      <div className="container-one">
        <div className="item-one ">
          <h1>
            <span data-aos="new" data-aos-delay="50">
              👋
            </span>
            <span data-aos="new" data-aos-delay="100">
              H
            </span>
            <span data-aos="new" data-aos-delay="150">
              i
            </span>
            <span data-aos="new" data-aos-delay="200">
              ,{" "}
            </span>
            <span data-aos="new" data-aos-delay="250">
              I
            </span>
            <span data-aos="new" data-aos-delay="300">
              ’
            </span>
            <span data-aos="new" data-aos-delay="350">
              m
            </span>
            <span data-aos="new" data-aos-delay="400">
              {" "}
              R
            </span>
            <span data-aos="new" data-aos-delay="450">
              o
            </span>
            <span data-aos="new" data-aos-delay="500">
              n
            </span>
          </h1>
          <span className="t-text" data-aos="new" data-aos-delay="600">
            I help purpose-driven organizations{" "}
          </span>
          <span className="t-text" data-aos="new" data-aos-delay="600">
            to achieve clarity on product-
          </span>

          <span className="t-text" data-aos="new" data-aos-delay="800">
            problems,clarity on innovative concepts,
          </span>
          <span className="t-text" data-aos="new" data-aos-delay="800">
            {" "}
            and clarity on user needs by{" "}
          </span>
          <span className="t-text" data-aos="new" data-aos-delay="1000">
            delivering clear,hard-hitting insights{" "}
          </span>
          <span className="t-text" data-aos="new" data-aos-delay="1000">
            that drive business goals and{" "}
          </span>
          <span className="t-text" data-aos="new" data-aos-delay="1200">
            {" "}
            meaningful impacts. Also, I design and{" "}
          </span>
          <span className="t-text" data-aos="new" data-aos-delay="1200">
            can animate to make things more{" "}
          </span>
          <span className="t-text" data-aos="new" data-aos-delay="1400">
            {" "}
            exciting!
          </span>
          <div className="bt-n" data-aos="new" data-aos-delay="1500">
            {/*
                                  <button type="button" class=" b1" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Let's talk!
</button>
    
                   
                   */}
            <div className="talkbutton">
              <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                Let’s talk!
              </button>
            </div>

            <a href="#work">
              <button type="button" class="  b2">
                Explore my work
              </button>
            </a>
          </div>
          <div data-aos="new" data-aos-delay="1000">
            <h3 className="contact">Contact</h3>

            <h2 className="c2">
              {" "}
              <a
                style={{ textDecorationLine: "none", color: "#EDEFF3" }}
                href="mailto:ronuxdnr@gmail.com"
              >
                ronuxdnr@gmail.com
              </a>
            </h2>
          </div>
        </div>
        <div className="item-two " data-aos="fade-up" data-aos-duration="1000">
          <img src={gif} />
        </div>
      </div>
      {/* secound fase */}
      <div className="container-two" data-aos="new" data-aos-delay="100">
        <h2>
          Most of the time, I’m either designing or conducting research for
          purpose -driven organizations.
        </h2>
      </div>

      <Cont3 />

      {/* third fase*/}
      <Countdown />
      {/* fourth fase*/}
      <div className="system" id="work">
        <h1 className="head" data-aos="new" data-aos-delay="200">
          Selected Work
        </h1>
        <p className="dis" data-aos="new" data-aos-delay="200">
          Here’s some of my work, in the case you wanna have a look 👀
        </p>
        <div className="navigation" data-aos="new" data-aos-delay="200">
          <div className="n">
            <button
              className={nav == 0 ? "white" : "black"}
              onClick={() => setNav(0)}
            >
              UX RESEARCH
            </button>
          </div>
          <div className="n">
            <button
              className={nav == 1 ? "white" : "black"}
              onClick={() => setNav(1)}
            >
              PRODUCT DESIGN
            </button>
          </div>
          <div className="n">
            <button
              className={nav == 2 ? "white" : "black"}
              onClick={() => setNav(2)}
            >
              VISUAL DESIGN
            </button>
          </div>
        </div>

        <div class="example-two">
          <header class="example-two-header">
            <nav class="vertical-align-middle scroll">
              <div className="n nav-item">
                <button
                  className={nav == 0 ? "white" : "black"}
                  onClick={() => setNav(0)}
                >
                  UX RESEARCH
                </button>
              </div>
              <div className="n nav-item">
                <button
                  className={nav == 1 ? "white" : "black"}
                  onClick={() => setNav(1)}
                >
                  PRODUCT DESIGN
                </button>
              </div>
              <div className="n nav-item">
                <button
                  className={nav == 2 ? "white" : "black"}
                  onClick={() => setNav(2)}
                >
                  VISUAL DESIGN
                </button>
              </div>
            </nav>
          </header>
        </div>

        <hr style={{ color: "white", marginTop: "0vh" }} />
        <div className="frame" data-aos="fade-up" data-aos-delay="200">
          {nav == 0 ? <UX /> : <div style={{ diaplay: "none" }}></div>}{" "}
          {nav == 2 ? <VD /> : <div style={{ diaplay: "none" }}></div>}
          {nav == 1 ? <PD /> : <div style={{ diaplay: "none" }}></div>}
        </div>
      </div>

      {/*-- Modal --*/}

      <div className={s}>
        <div
          class="modal fade  "
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{
            zIndex: "99999999999999",
            background: "rgba(21, 23, 24, 0.6)",
          }}
        >
          <div class="modal-fullscreen modal-dialog">
            <div class="modal-content ">
              <button
                type="button"
                class="btn-close cross"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div class="modal-body">
                <div className="im">
                  <img className="submitimg" src={img} />
                  <div className="top">
                    <h6>Don’t worry, I’m here to help you!</h6>
                  </div>
                </div>
                <div>
                  <div className="from">
                    <div className="texttop">
                      <h1>Don’t worry, I’m here to help you!</h1>
                      <p>
                        My diverse range of expertise is here to assist you with
                        solving your problems through UX Research, Interface and
                        interaction design, motion design or even end-to-end
                        product design projects!
                      </p>
                    </div>
                    <div className="inputtext">
                      <form onSubmit={sendEmail}>
                        <label className="calllabel">
                          What do you want me to call you?
                        </label>
                        <br />

                        <div class={input}>
                          <input
                            id={style}
                            onMouseEnter={check}
                            onMouseLeave={check}
                            onFocus={check}
                            placeholder={
                              style == "id"
                                ? "This is important to be filled up!"
                                : "Tell me your name"
                            }
                            type="text"
                            name="name"
                            value={text}
                            onChange={(e) => {
                              if (e.target.value !== "" || text !== "") {
                                setInput("buttoncolor");
                              } else {
                                setInput("button");
                              }

                              setText(e.target.value);
                            }}
                            required
                          />
                        </div>
                        <br />

                        <label className="solvelabel">
                          What do you want me to build/solve?
                        </label>
                        <br />

                        <div className={input2}>
                          <textarea
                            id={style2}
                            onMouseEnter={check2}
                            onMouseLeave={check2}
                            onFocus={check2}
                            placeholder={
                              style == "id"
                                ? "This is important to be filled up!"
                                : "Tell me what you want to solve"
                            }
                            name="message"
                            onChange={(e) => {
                              if (e.target.value !== "" || text2 !== "") {
                                setInput2("buttoncolor2");
                              } else {
                                setInput2("button2");
                              }

                              setText2(e.target.value);
                            }}
                            required
                          >
                            {text2}
                          </textarea>
                        </div>

                        {text == "" || text2 == "" ? (
                          <div className="submitbutton">
                            <button type="button" onClick={click}>
                              Send your requirement{" "}
                            </button>
                          </div>
                        ) : (
                          <div className="submitbutton2">
                            <button
                              type="submit"
                              onClick={short}
                              data-bs-toggle="modal"
                              data-bs-target="#example"
                            >
                              Send your requirement
                            </button>
                          </div>
                        )}

                        {/*{text==''||text2==''?<button type='button'  style={{background: '#656971'}} >Send your requirement</button>:
                 <button type='submit'  data-bs-toggle="modal" data-bs-target="#example"   >Send your requirement</button>}
                  */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={last}>
        <div
          class="modal fade  "
          id="example"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ zIndex: "99999999999999" }}
        >
          <div class="modal-fullscreen contax  modal-dialog">
            <div class="modal-content ">
              <button
                type="button"
                class="btn-close cross2"
                onClick={() => window.location.reload()}
                data-bs-dismiss="modal"
                data-dismiss="model"
                aria-label="Close"
              ></button>

              <div class="modal-body">
                <div className="ondone">
                  <img className="img" src={img} />
                  <h2>I’ll go through your requirements and get back you.</h2>
                  <p>
                    Alternatively, you can reach out to me on{" "}
                    <span className="no">+91-8017697352</span>
                  </p>

                  {/*
                  <button  onClick={() => window.location.reload()} className='fbt' data-bs-dismiss="modal">
                    <img src={btnreq3} />
                 </button>*/}
                  <div className="submitbutton2">
                    <button
                      type="button"
                      onClick={() => window.location.reload()}
                      data-bs-dismiss="modal"
                    >
                      Back to seeing my work!{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
