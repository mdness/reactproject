import React from 'react'
import ReactLogo from '../media/ReactLogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons' 

const NavBar = () => {
  return (
    <div >
      <div className= "d-flex justify-content-center mt-80">
        <a href="#"><img src={ReactLogo} alt="RÉGIS" className="Logo"/></a>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a class="nav-link" href="#">Conocenos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Prendas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact us</a>
      </li>
    </ul> 
    <FontAwesomeIcon icon ={faCartShopping} className='cartShopping'/>
  </div>
</nav>
    </div>
  )
}

export default NavBar