import React from "react";
import { AboutUs } from "./AboutUs";
import { Barra } from "./Barra";
import { IconosRedes } from "./IconosRedes";
import { Only } from "./Only";
import { Redes } from "./Redes";

export const Footer = () => {
  return (
    <>
      <div className="bg ">
        <ul className="nav justify-content-center ">
          <Only />
        </ul>
        <ul className="nav justify-content-center ">
          <Barra />
        </ul>
        <hr className="linea" />
        <ul className="nav justify-content-center ">
          <div className="row">
            <div className="col m-1 col-md-7 col-xl-7">
              <ul className="nav justify-content-center ">
                <IconosRedes />
              </ul>
              <ul className="nav justify-content-center ">
                <AboutUs />
              </ul>
              <ul className="nav ms-5">
                <p class="card-text">
                  <small class="text-muted ">
                    Copyright © 2018, Vodi Platform, INC, Rights Reserved
                  </small>
                </p>
              </ul>
              <ul className="nav ms-5">
                <p class="card-text">
                  <small class="text-muted ">
                    Privacy &nbsp;&nbsp;&nbsp;&nbsp; Policy
                    &nbsp;&nbsp;&nbsp;&nbsp; Ad Choice &nbsp;&nbsp;&nbsp;&nbsp;
                    Terms of Use &nbsp;&nbsp;&nbsp;&nbsp; Mobile Use Agreement
                    &nbsp;&nbsp;&nbsp;&nbsp; Careers
                  </small>
                </p>
              </ul>
            </div>
            <div className="col m-1 col-md-4 col-xl-4">
              <ul className="nav ">
                <h3 className="text-white">Watch Vodi.Anytime.Anywhere.</h3>
                <p class="card-text">
                  <small class="text-muted ">
                    Subscribe to our newsletter and get unique alerts.
                  </small>
                </p>
              </ul>
              <bottom className="btn btn-info ">SIGN UP</bottom>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};
