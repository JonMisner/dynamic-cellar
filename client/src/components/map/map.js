import React from "react";
import "./map.css";
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import mapStyles from "./mapStyles";

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const apiKey =
  "https://maps.googleapis.com/maps/api/js?key=" +
  process.env.REACT_APP_GOOGLE_MAPS_API_KEY +
  "&v=3.exp&libraries=geometry,drawing,places";

export default function Map() {
  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  Geocode.setLanguage("en");

  const wineList = [
    {
      name: "Menti",
      vintage: 2018,
      address:
        "UFFICI /HEADQUARTER, via Dr. Bruzzo, 24, 36053 Gambellara VI, Italy",
      // coords: {lat: 45.4598, lng: 11.3401}
    },
    {
      name: "Raventos i Blanc",
      vintage: 2017,
      address:
        "Plaça del Roure, S/N, 08770 Sant Sadurní d'Anoia, Barcelona, Spain",
      // coords: { lat: 41.4263208, lng: 1.7845831 }
    },
    {
      name: "Mirco Mariotti",
      vintage: "NV",
      address: "Via Rosa Bardelli, 12, 44011 Argenta FE, Italy",
      // coords: { lat: 44.6596655, lng: 11.7785897 }
    },
    {
      name: "Txakoli Ameztoi",
      vintage: 2019,
      address: "Lugar Barrio Eitzaga, 10, 20808 Eitzaga, SS, Spain",
      // coords: { lat: 43.2938, lng: -2.1983 }
    },
    {
      name: "Domaine Mercouri",
      vintage: 2017,
      address: "Korakochori 271 00, Greece",
      // coords: { lat: 37.75, lng: 21.58333 }
    },
  ];

  wineList.map((wine) => {
    Geocode.fromAddress(wine.address).then(
      (response) => {
        // const { lat, lng } = response.results[0].geometry.location;
        wine.coords = response.results[0].geometry.location;
        return wine;
      },
      (error) => {
        console.error(error);
      }
    );
  });
  console.log(wineList);

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        className="map"
        defaultZoom={3}
        defaultCenter={{ lat: 0, lng: 0 }}
        options={options}
      >
        {wineList.map((wine) => {
          return (
            <Marker position={wine.coords}>
              <InfoWindow>
                <div>
                  {wine.name} {wine.vintage}
                </div>
              </InfoWindow>
            </Marker>
          );
        })}
      </GoogleMap>
    ))
  );

  return (
    <MapWithAMarker
      googleMapURL={apiKey}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `500px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}
