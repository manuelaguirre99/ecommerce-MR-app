import React from "react";

const NavBar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg NavBar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img className="logoNav" src="../imgs/MonkeyRevLogo.png" width="175px" height="150px" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About Us</a>
        </li>
        <li class="space-around">
          <a class="nav-link logoCarro" href="#">
          <svg className="logoCarro" xmlns="http://www.w3.org/2000/svg" width="18" height="18"fill="orange" class="bi bi-cart2" viewBox="0 0 18 18">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

export default NavBar