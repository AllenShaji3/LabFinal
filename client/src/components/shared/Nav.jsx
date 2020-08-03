import React from 'react';
import { Link } from 'react-router-dom';
function Nav () {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/" className="navbar-brand">SCMBlog</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
        
      <li className="nav-item">
        <Link href="/" className="nav-link">Home</Link>
      </li>

      <li className="nav-item">
        <Link href="/about" className="nav-link">About</Link>
      </li>

      <li className="nav-item">
        <Link href="/contact" className="nav-link">Contact</Link>
      </li>

    </ul> 

    <ul class="navbar-nav">
      
        <li class="nav-item">
          <Link to="/logout" class="nav-link">
            <i class="fa fa-sign-out"></i>
            Logout
          </Link>
        </li>
      
        <li class="nav-item">
        <Link to="/register" class="nav-link">
            <i class="fa fa-user-plus"></i>
            Register
          </Link>
        </li>

        <li class="nav-item">
        <Link to="/login" class="nav-link">
            <i class="fa fa-sign-in"></i>
            Login
          </Link>
        </li>
      
    </ul>
  </div>
</nav>
    );
}

export default Nav;