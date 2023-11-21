import React,{useEffect} from 'react';
import './Feature.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FaBars, FaGlobe, FaMobile, FaMicrosoft, FaGripfire} from 'react-icons/fa'
import { FaMaximize} from 'react-icons/fa6'

function Feature () {


  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="container " id='feature'>
      <h1 className='text-center mt-5' data-aos='fade-up'>Feature</h1>
      <div className="row">
        <h3 className='my-5' data-aos='fade-right'> What I do</h3>
        <div className="col-md-4 mt-4" data-aos='fade-right'>
          <div class="card card1 bg-dark">
            <div class="card-body">
              <span className='featureicon'><FaMobile /></span>
              <h5 class="card-title">Web Development</h5>
              <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title
                Some quick example text to build on the card title and m
                Some quick example text to build on the card title and m
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4" data-aos='fade-up'>
          <div class="card card1 bg-dark">
            <div class="card-body">
              <span className='featureicon'><FaGripfire /></span>
              <h5 class="card-title">UI/UX Design</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title
                Some quick example text to build on the card title and m
                Some quick example text to build on the card title and m
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4" data-aos='fade-left'>
          <div class="card card1 bg-dark">
            <div class="card-body" >
              <span className='featureicon'><FaGlobe /></span>
              <h5 class="card-title">Hosting Website</h5>
              <p class="card-text">
                Some quick example text to build on the card title and Some quick example text to build on the card title and m
                Some quick example text to build on the card title and m
                Some quick example text to build on the card title and mmake up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Feature;
