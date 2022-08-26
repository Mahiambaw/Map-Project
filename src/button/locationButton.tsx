import React, { useState, useEffect } from "react";
import "./buttonStyle.css";

const Location = (props: any) => {
  const locationHanlder = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(typeof position.coords.latitude);
        const postionCoordinaties = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        props.setUserLocation(postionCoordinaties);
      });
    } else {
      return <h2>Geo Location not supported</h2>;
    }
  };

  return (
    <div>
      <button onClick={locationHanlder} className="btn btn--location">
        Take Me Home
      </button>
    </div>
  );
};
export default Location;
