import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Project () {

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="container my-4" id='project'>
      <div className="row">
        <h1 className="text-center my-3" data-aos='fade-up'>My Project</h1>
        <Slider  {...settings}>
        <div className="col-md-3 gap-3">
          <div class="card  bg-dark">
            <img src="./images\img4.jpeg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Travel & Stay website</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
        <div class="card bg-dark">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Ecommerce Website</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3" >
        <div class="card bg-dark">
            <img src="./images\img2.avif" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">CRUD Web Application</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3" >
        <div class="card bg-dark">
            <img src="./images\img3.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Weather App</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  );
}

export default Project;
