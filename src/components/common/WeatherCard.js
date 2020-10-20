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
    height: "10vh",
    width: "10vh",
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
  details: {
    textAlign: "left",
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
          <Typography className={classes.details} variant="body2">
            {name}
          </Typography>
          <Typography className={classes.details} variant="caption">
            {shortForecast}
          </Typography>
          <Typography className={classes.details} variant="caption">
            Wind Speed: {windSpeed}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
