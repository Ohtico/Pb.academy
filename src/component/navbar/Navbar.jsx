import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg">
        <div className="container-fluid ">
          <a className="navbar-brand text-white ms-5" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  className="nav-link active text-white ms-5"
                  aria-current="page"
                  href="#"
                >
                  Watch
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  text-white ms-2"
                  aria-current="page"
                  href="#"
                >
                  NFL
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  text-white ms-2"
                  aria-current="page"
                  href="#"
                >
                  NHL
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  text-white ms-2"
                  aria-current="page"
                  href="#"
                >
                  NBA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ms-2" href="#">
                  Soccer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ms-2" href="#">
                  NASCAR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ms-2" href="#">
                  Golf
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white ms-2"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MORE
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Beisbol
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Tennis
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Quemados
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ms-5" href="#">
                  Replays
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ms-3" href="#">
                  Highlights
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ms-3" href="#">
                  Guide
                </a>
              </li>
              <li className="nav-item ms-5">
                <a className="nav-link text-white ms-5" href="#">
                  <i className="material-icons" id="car">
                    search
                  </i>
                </a>
              </li>

              <li className="nav-item">
                <a
                  class="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <i className="material-icons text-white" id="car">
                    notifications
                  </i>
                  <span
                    class="position-absolute top-1 start-98 translate-middle badge rounded-pill bg-primary"
                    id="numCar"
                  >
                    3
                  </span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white ms-2"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="https://www.ibei.org/images/4611/person_box.png" className="rounded-circle" alt="user" width="32"  />
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Editar Perfil
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Ver Perfil
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
