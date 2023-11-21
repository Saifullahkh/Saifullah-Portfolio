import React,{useEffect} from 'react'
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter, Cursor  } from 'react-simple-typewriter'
import { FaBootstrap, FaCss3, FaFacebook, FaHtml5, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa';


function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  const type = <Typewriter
  words={['Reactjs Developer.', 'UI Designer.', 'Front-end Developer.']}
  loop='true'
  typeSpeed={50}
  deleteSpeed={20}
  delaySpeed={1000}
  // onLoopDone={}
  // onType={}
/>
  return (
    <>
      <div className="container" id='home'>
        <div className='row '>
          <div className="col-6 mt-3" data-aos="fade-right">
            <h4>WELCOME TO MY WORLD</h4>
            <h1>Hi, I'm  <span className='text-danger'>Saif Ullah</span> </h1>
            <h2>a <span>{type}</span>
            <Cursor 
            cursorColor='red'
            cursorStyle='|'
            />
            </h2>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi vitae hic iure. Sequi veniam possimus magnam molestias vel asperiores minima. Impedit itaque nostrum alias repellendus libero saepe ut doloremque?
            </p>
            <a href='./images\downloadCv.jpg' download className="btn btn-danger">Download CV</a>

            <div className="row mt-5">
              <div className="col-md-6 ">
                <p>FIND ME IN</p>
                <span className='bannericon'>
                <FaFacebook />
                </span>
                <span className='bannericon'>
                <FaTwitter />
                </span>
                <span className='bannericon'>
                <FaLinkedin />
                </span>
              </div>
              <div className="col-md-6">
                <p>BEST SKILL ON</p>
                <span className='bannericon'>
                  <FaReact />
                </span>
                <span className='bannericon'>
                  <FaBootstrap />
                </span>
                <span className='bannericon'>
                  <FaHtml5 />
                </span>
                <span className='bannericon'>
                  <FaCss3 />
                </span>
                
              </div>
            </div>
          </div>

          <div className="col-md-4 offset-md-1 mt-0 " data-aos='fade-left'>
            <img src="./images\saif12.jpg"  alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
