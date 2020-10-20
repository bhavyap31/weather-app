import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "5px",
  },
  weatherImage: {
    display: "flex",
    justifyContent: "center",
    height: "100px",
    width: "100px",
    alignItems: "center",
    margin: "20px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  content: {
    display: "flex",
  },
});

export default function WeatherCard({
  eachDay: {
    icon,
    temperature,
    temperatureUnit,
    name,
    shortForecast,
    windSpeed,
  },
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Avatar src={icon} className={classes.weatherImage} />
        <div className={classes.textContainer}>
          <Typography gutterBottom variant="h5" component="h2">
            {temperature}°{temperatureUnit}
          </Typography>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="body1">{shortForecast}</Typography>
          <Typography variant="caption">Wind Speed: {windSpeed}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
