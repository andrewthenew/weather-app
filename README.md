# Weather App

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and created using [Open-Meteo.com](https://open-meteo.com)

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Task:
The test allows a number of assumptions to be made and is deliberately open ended. We would like you to document any assumptions that you made including a brief reason behind those assumptions

### Use a weather api
The choice of weather apis is open. Some free tiered examples include but are not limited to (they do require sign-up in order to obtain an API key)
- https://openweathermap.org/
- https://darksky.net/dev

### Questions
1. Display important weather information for the next 5 days for a mobile weather application
   The display should list out the weather for the next 5 days given a city as input.
2. Display the following information
   - 2.1. Best day to sell an ```umbrella```
   - 2.2. Best day to sell a ```jacket```
   
If the weather conditions are equal on all 5 days choose the first day to sell a jacket/umbrella.

### Tech Requirements
- React
- Tests: Jest + react-testing-library / enzyme (Optional)
- Code Linter
- Typescript
- hooks and functional components

### Submission
- Clean and well-structured solution
- Commit early and often. We want to be able to check your progress
- Please complete your working solution within 7 days of receiving this challenge, and be
  sure to notify us when it is ready for review.
- Please submit your code in any way you like: github or bitbucket with instructions on how to run the code and any assumptions you made.

---

## Assumptions Explanation (attempt)
- I used https://open-meteo.com as weather provider, cause those mentioned above where not working.
- For working with dates LUXON was used. MomentJS is abandoned now, so Luxon is good alternative for it.
- Making api calls - AXIOS.

So we have WeatherApp, header, main section & footer.

In **header** there is **search** input with button. It's also searchable via pressing Enter on keyboard. I've put some throttling (delay) to search api calls (3.5 sec, configurable via ```app.constants.ts```). We have 2 calls: 1st - we get location data, 2nd call - we get actual weather data, which is passed to

**Main** section - in **Cards wrapper**. We show each day info in separate card. Data is parsed via utils & we get max temperature, min temp & most weather code, by which we decide what icon to show (**vector icons** created from scratch, based on some raster images from google, could be more refined in future), min/max temperature. Also (as a bonus) I've added simple Chart (chartjs for react) with temperatures through the day.

Under Main section we have recommendations part. If we get data from ```recommendations utils (umbrella or/and jacket)```, we draw recommendations with (created) vector icons.

Simple footer.

Styling. SASS preprocessor. Used reset css before all styles. App color is reactive to system theme, responsive as well.

Tests. Jest & React Testing Library.

.

