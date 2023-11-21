import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Education () {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="container" id='education'>
      <h1 className="my-3 text-center" data-aos='fade-up-left'>Education Quality</h1>
      <div className="row my-5">
          <div className="col-md-4" data-aos='fade-right'>
            <div className="card bg-dark">
              <div className="card-body">
                <h4 className="card-title">BS Computer Science</h4>
                <p className="sub-title">University of ICUP(2019 - 2023)</p>
                <div className="card-text">
                  <p>
                    The traines provided bu university in order to prepare people to work in various sector of the economy or area of culture in various sector of the economy or area of culture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos='fade-up'>
            <div className="card bg-dark">
              <div className="card-body">
                <h4 className="card-title">Faculty of Science</h4>
                <p className="sub-title">
                  Paadise Children Acadmey(2017 - 2019)
                </p>
                <div className="card-text">
                  <p>
                    The traines provided bu university in order to prepare people to work in various sector of the economy or area of culture in various sector of the economy or area of culture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos='fade-left'>
            <div className="card bg-dark">
              <div className="card-body">
                <h4 className="card-title">Matric</h4>
                <p className="sub-title">
                  Khyber Education Acadmey(2016 - 2017)
                </p>
                <div className="card-text">
                  <p>
                    The traines provided bu university in order to prepare people to work in various sector of the economy or area of culture in various sector of the economy or area of culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      
   
  );
}

export default Education;
