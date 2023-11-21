import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import './MyNavbar.css'

const MyNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container">
          <a class="navbar-brand text-white fs-2" href="#">Port<span className='text-danger'>folio</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white active"  href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#feature">Feature</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href='#project'>Project</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href='#resume'>Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default MyNavbar;
