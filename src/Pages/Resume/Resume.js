import React,{useEffect} from 'react';
import './Resume.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Link, Outlet } from 'react-router-dom';

function Resume () {


  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="container" id='resume'>
    <h1 className='text-center my-4' data-aos='fade-up'>My Resume</h1>
      <div className="row" data-aos='fade-up-right'>
        <div className="col">
          <ul class="nav nav-justified ">
            <li class="nav-item">
              <a class="nav-link active"  href='#education'>Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  href='#skill'>Professional Skill</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"  href='#experience'>Experience</a>
            </li>
          </ul>


           {/* <nav className='nav nav-justified'>
            <Link className='link' to=''>Education</Link>
            <Link className='link' to='skill'>Professional Skill</Link>
            <Link className='link' to='experience'>Experience</Link>
          </nav>
          <Outlet /> */}
        </div>
      </div>
    </div>
  );
}

export default Resume;
