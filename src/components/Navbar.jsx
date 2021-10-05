import React from 'react';
import Header from './Header';
import '../App.css';

function Navbar() {
  return (
    <>
    <div className="header" id="header"> 
    <nav class="navbar navbar-expand-lg">
        <div className="container p-2">
  <a class="navbar-brand font-weight-bold text-white" href="#">Medilab<span className="plus-nav">+</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto text-uppercase">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Testimonail</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
   </div>
  </div>
</nav>
<Header/>
</div>
    </>
  );
}

export default Navbar;

