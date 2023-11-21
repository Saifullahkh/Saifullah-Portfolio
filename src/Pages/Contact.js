import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

function Contact () {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="container" id='contact'>
      <h1 className="text-center my-4" data-aos='fade-up'>Contact</h1>
      <div className="row">
        <div className="col-md-4" data-aos='fade-right'>
          <div class="card bg-dark">
            {/* <img src="" class="card-img-top" alt="..." /> */}
            <div class="card-body">
              <h5 class="card-title">Saif Ullah khan</h5>
              <h6 class="card-title">ReactJs Developer </h6>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </p>
              <p>Phone: 0335-9199919</p>
              <p>Email: atifullahkhan47@gmail.com</p>
              <p>FIND ME IN</p>
              <span className="bannericon">
                <FaFacebook />
              </span>
              <span className="bannericon">
                <FaTwitter />
              </span>
              <span className="bannericon">
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-8 " data-aos='fade-left'>
          <form class="row g-3 bg-dark">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Name</label>
              <input type="email" class="form-control bg-dark text-white" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Password</label>
              <input type="password" class="form-control bg-dark text-white" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input
                type="text"
                class="form-control bg-dark text-white"
                id="email"
              
              />
            </div>
            <div class="col-md-12">
              <label for="inputCity" class="form-label">Subject</label>
              <input type="text" class="form-control bg-dark text-white" id="inputCity" />
            </div>
            <div class="col-12">
                <label  for="textarea">
                  YOUR MESSAGE
                </label>
                <textarea type="textarea"   className='form-control bg-dark text-white' style={{height: '140px'}} />
             </div>
           
            <div class="col-12 d-grid">
              <button type="submit" class="btn btn-dark ">Send Message</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
