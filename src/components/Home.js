import {
  Card,
  CircularProgress,
  GridList,
  GridListTile,
} from "@material-ui/core";
import React from "react";
import WeatherCard from "./common/WeatherCard";
import LocationHeader from "./LocationHeader";
import GetForecastURL from "../hooks/GetForecastURL";
import GetForecast from "../hooks/GetForecast";
import GetUserLocation from "../hooks/GetUserLocation";
function Home() {
  const userLocation = GetUserLocation();
  const { forecastURL, city, state } = GetForecastURL(userLocation);
  const weatherData = GetForecast(forecastURL);

  if (!weatherData.length) {
    return <CircularProgress />;
  }
  return (
    <Card>
      <LocationHeader city={city} state={state} />
      <GridList style={{ marginTop: "60px" }}>
        {weatherData.map((eachDay) => (
          <GridListTile key={eachDay.name}>
            <WeatherCard eachDay={eachDay} />
          </GridListTile>
        ))}
      </GridList>
    </Card>
  );
}

export default Home;
