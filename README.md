
Following assumption were made to complete and implement the weather-app case study.

- The application picks the user location when/where(if the user allows location permission) possible if not the location default to Houston,Tx.
- The App was bootstrapped using facebook's very own cli tool `react-create-app` which comes with all the required config to quickly spin a react app.
- I used Material UI for building the components, due to the time constraint I did not put much effort on the CSS and leveraged out of the box Material UI components to build the UI
- I showcased my custom hook building skills by creating three separate custom hooks and coupled to the view to fetch the data/userLocation. I follow the thumb rule of separating the view from logic so that it helps to separate the concerns.
- Instead of using a icon for each type of weather, I leveraged the image provided by the Weather API to showcase the weather with a image, I felt like it quickly helps the user to get a sense of weather without actually reading the numbers.
- I focused more on the functionality over the UI design due to the time limit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

