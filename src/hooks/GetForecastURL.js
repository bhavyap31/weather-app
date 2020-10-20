import React from "react";
import { get } from "lodash";
import { WEATHER_API } from "../constants/apis";
import { DEFAULT_LAT, DEFAULT_LNG } from "../constants/defaults";

export default function GetForecastURL({ lat, lng }) {
  lat = DEFAULT_LAT; //lat || DEFAULT_LAT;
  lng = DEFAULT_LNG; // lng || DEFAULT_LNG;
  const [forecastURL, setForecastURL] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  React.useEffect(() => {
    if (lat && lng) {
      fetch(`${WEATHER_API}/${lng},${lat}`)
        .then((res) => res.json())
        .then((responseAsJson) => {
          setForecastURL(get(responseAsJson, "properties.forecast"));
          setCity(
            get(responseAsJson, "properties.relativeLocation.properties.city")
          );
          setState(
            get(responseAsJson, "properties.relativeLocation.properties.state")
          );
        })
        .catch((err) => {
          console("Unable to fetch URL", err);
        });
    }
  }, [lat, lng]);

  return {
    city,
    state,
    forecastURL,
  };
}
