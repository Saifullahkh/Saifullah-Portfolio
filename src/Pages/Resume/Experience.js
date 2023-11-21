import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='container my-4' id='experience'>
      <h1 className='my-5 text-center' data-aos='fade-up'>Job Experience</h1>
      <div className="row" data-aos='fade-right'>
        <h4>ReactJS Developer</h4>
        <h6>Tasks</h6>
        <p>-https://saifullah-weatherapp.netlify.app <br />
        -https://saifullah-travel-website.netlify.app </p>
      </div>
    </div>
  )
}

export default Experience
