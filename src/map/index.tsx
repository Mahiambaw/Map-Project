import React, { useState, useEffect } from "react";

import {
  useJsApiLoader,
  GoogleMap,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
// import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import GoogleMapReact from "google-map-react";

import { API_KEY } from "../env";
import { containerStyle, center, options } from "./setting";
import "./containerStyles.css";

import Location from "../button/locationButton";
import RandomBtn from "../button/randomButton";

const Map: React.FC = (props: any) => {
  const [userLocation, setUserLocation] = useState<any>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });
  const { lat, lng } = userLocation ? userLocation : center;
  console.log(lat);
  const mapLocation = userLocation != null ? userLocation : center;

  const mapRef = React.useRef<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;
  };

  if (!isLoaded) return <div>Map loading ....</div>;
  return (
    <div className="top-container">
      <div className="dummy-container">
        <div className="inner-container">
          <h2 className="text">Map Project</h2>
          <div className="map-container">
            <GoogleMap
              mapContainerStyle={containerStyle}
              options={options as google.maps.MapOptions}
              center={mapLocation}
              zoom={12}
              onLoad={onLoad}
            >
              {userLocation ? <Marker position={userLocation} /> : null}
            </GoogleMap>
            <Location setUserLocation={setUserLocation}></Location>
            <RandomBtn setUserLocation={setUserLocation}></RandomBtn>
          </div>

          <p className="text-description">
            Latitude:{lat}, longitude:{lng}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
