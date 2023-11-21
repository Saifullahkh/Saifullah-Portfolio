import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skill() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="container" id='skill'>
        <div className='row mt-5 '>
          <h2 className='my-4 text-center' data-aos='fade-up'>Development Skill</h2>
          <div className="col-md-6 mb-5" data-aos='fade-right'>
            <p className='mb-0 mt-3'>REACT</p>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{width: "100%"}}>100%</div>
            </div>

            <p className='mb-0 mt-3'>HTML 5</p>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{width: "95%"}}>95%</div>
            </div>

            <p className='mb-0 mt-3'>CSS 3</p>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{width: "80%"}}>80%</div>
            </div>

            <p className='mb-0 mt-3'>JAVASCRIPT</p>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{width: "75%"}}>75%</div>
            </div>

            <p className='mb-0  mt-3'>BOOTSTRAP 5</p>
            <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{width: "95%"}}>95%</div>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Skill
