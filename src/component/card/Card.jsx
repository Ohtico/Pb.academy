import React from "react";
import { Commin } from "./Commin";
import { Live } from "./Live";

export const Card = () => {
  return (
    <>
      <div className="row m-2">
        <div className="col">
          <Live />
        </div>
        <div className="col">
          <Commin />
        </div>
      </div>
    </>
  );
};
