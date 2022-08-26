import React, { useState, useEffect } from "react";
import "./buttonStyle.css";
const RandomBtn = (props: any) => {
  const randomLocationHanlder = () => {
    const lng = parseInt((Math.random() * 360 - 180).toFixed(8));
    const lat = parseInt((Math.random() * 180 - 90).toFixed(8));

    const location = { lng, lat };
    props.setUserLocation(location);
  };

  return (
    <div>
      <button onClick={randomLocationHanlder} className="btn btn--random">
        Transport me some where random
      </button>
    </div>
  );
};
export default RandomBtn;
