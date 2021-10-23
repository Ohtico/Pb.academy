import React from "react";

export const Carrousel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://res.cloudinary.com/ohtico/image/upload/v1635003465/2014_Women_s_Six_Nations_Championship_-_France_Italy__51_x5zakk.jpg"
              className="d-block w-100"
              alt="rugby"
            />
            <div className="carousel-caption  d-none d-md-block">
              <h3 className="fw-light">Coming Soon</h3>
              <p> Live starts in 7 days 17h 58 mn 41s</p>
              <h2 className="fw-bold ">Rugby Union World Cup</h2>
              <p> LIVE coverage on the 24th of June 2018</p>
              <button type="button" className="btn btn-outline-light ">
                {" "}
                <span>
                  <i className="material-icons " id="car">
                    add
                  </i>{" "}
                </span>{" "}
                GET NOTIFIED
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/ohtico/image/upload/v1635002992/buccaneers-eagles-nfl_gtobzg.jpg"
              className="d-block w-100"
              alt="nfl"
            />
            <div className="carousel-caption text-dark d-none d-md-block">
            <h3 className="fw-light">Coming Soon</h3>
              <p> Live starts in 7 days 17h 58 mn 41s</p>
              <h2 className="fw-bold ">NFL Union World Cup</h2>
              <p> LIVE coverage on the 24th of June 2018</p>
              <button type="button" className="btn btn-outline-dark ">
                {" "}
                <span>
                  <i className="material-icons " id="car">
                    add
                  </i>{" "}
                </span>{" "}
                GET NOTIFIED
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/ohtico/image/upload/v1635002989/Tiger-Woods.-Foto-Tannen-Mauri-EFE_iaxvvp.jpg"
              className="d-block w-100"
              alt="golf"
            />
            <div className="carousel-caption text-dark d-none d-md-block">
            <h3 className="fw-light">Coming Soon</h3>
              <p> Live starts in 7 days 17h 58 mn 41s</p>
              <h2 className="fw-bold ">GOLF Union World Cup</h2>
              <p> LIVE coverage on the 24th of June 2018</p>
              <button type="button" className="btn btn-outline-light  ">
                {" "}
                <span>
                  <i className="material-icons " id="car">
                    add
                  </i>{" "}
                </span>{" "}
                GET NOTIFIED
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
