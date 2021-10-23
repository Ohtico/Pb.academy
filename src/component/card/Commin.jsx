import React from "react";

export const Commin = () => {
  return (
    <>
      <h4 class="text-muted d-flex ">COMING SOON</h4>
      <div class="card mb-3" style={{ maxWidth: "540px;" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://res.cloudinary.com/ohtico/image/upload/v1635007057/trfec_kaakww.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
                <small class="text-muted">
                  {" "}
                  <span className="bg-danger text-white p-1 rounded">
                    LIVE
                  </span>{" "}
                  Racing MotorSports - WC
                </small>
              </p>
              <h6 class="card-title">World Cup Endurance, Spain</h6>
              <p class="card-text">
                <small class="text-muted">
                  time left <strong> 4 min 12 sec</strong>{" "}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style={{ maxWidth: "540px;" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://res.cloudinary.com/ohtico/image/upload/v1635006995/trfec_ejh2d0.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
                <small class="text-muted">Racing MotorSports - Le Mans</small>
              </p>
              <h6 class="card-title">
                College World Series: Texas Tech vs Florida
              </h6>
              <p class="card-text">
                <small class="text-muted">
                  time left <strong> 2 hours 15 min 57 sec</strong>{" "}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style={{ maxWidth: "540px;" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://res.cloudinary.com/ohtico/image/upload/v1635007102/trfec_sva94e.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text">
                <small class="text-muted">Racing MotorSports - Le Mans</small>
              </p>
              <h6 class="card-title">
                MLB Baseball: Chicago Cubs at St. Louis Cardinals
              </h6>
              <p class="card-text">
                <small class="text-muted">
                  time left <strong> 1 day 10 hours 58 min 09 sec</strong>{" "}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <h6 class="text-muted d-flex float-end">
            VIEW ALL{" "}
            <i className="material-icons " id="car">
              chevron_right
            </i>
          </h6>
    </>
  );
};
