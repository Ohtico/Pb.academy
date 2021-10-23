import React from "react";

export const Live = () => {
  return (
    <>
      <h4 class="text-muted d-flex justify-content-center">LIVE NOW</h4>
      <div class="card mb-3" style={{ maxWidth: "540px;" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://cdn-1.motorsport.com/images/amp/YMdnbzl2/s500/sebastien-ogier-julien-ingrass.jpg"
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
                  Racing MotorSports - Le Mans
                </small>
              </p>
              <h6 class="card-title">
                2018 Le Mans 24 Hour - Car GT Onboards, Race Timing and
                Commentary
              </h6>
              <p class="card-text">
                <small class="text-muted">
                  on <strong> XtremeSports3</strong>{" "}
                </small>
                <span>
                  {" "}
                  <button class="btn btn-danger btn-sm d-flex align-items-center float-end">
                    {" "}
                    <i className="material-icons " id="car">
                      play_circle_outline
                    </i>{" "}
                    Watch now!{" "}
                  </button>{" "}
                </span>
              </p>
              <p class="card-text">
                <small class="text-muted">1,02K viewers</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style={{ maxWidth: "540px;" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://cdn.dmcl.biz/media/image/218781/o/GettyImages-1173908776.jpg"
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
                  Rugby - Africa
                </small>
              </p>
              <h6 class="card-title">
                Rugby Africa Gold Cup/2019 Qualifiers - Namibia vs Uganda
              </h6>
              <p class="card-text">
                <small class="text-muted">
                  on <strong> KweseRug</strong>{" "}
                </small>
                <span>
                  {" "}
                  <button class="btn btn-danger btn-sm d-flex align-items-center float-end">
                    {" "}
                    <i className="material-icons " id="car">
                      play_circle_outline
                    </i>{" "}
                    Watch now!{" "}
                  </button>{" "}
                </span>
              </p>
              <p class="card-text">
                <small class="text-muted">21K viewers</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style={{ maxWidth: "540px;" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://i.eurosport.com/2018/06/27/2362090-49140570-2560-1440.jpg"
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
                  Rugby - Africa
                </small>
              </p>
              <h6 class="card-title">National Cup 2018: Fans Eye View</h6>
              <p class="card-text">
                <small class="text-muted">
                  on <strong> RTower 1989</strong>{" "}
                </small>
                <span>
                  {" "}
                  <button class="btn  btn-danger d-flex align-items-center float-end btn-sm">
                    {" "}
                    <i className="material-icons " id="car">
                      play_circle_outline
                    </i>{" "}
                    Watch now!{" "}
                  </button>{" "}
                </span>
              </p>
              <p class="card-text">
                <small class="text-muted">944 viewers</small>
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
