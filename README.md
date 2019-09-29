# Node Weather App


<img src="https://raw.githubusercontent.com/tomsstuff101/node-weather-app-v1/master/README-images/node%20weather%20app.png" >

### getLocation
Given a place name it returns a latitud, logitiude and exact location name using the Map box api

getWeather
Uses the DarkSky api to get the curent weather when given a latitude and longitude


### app.js

This uses the getLocation and getWeather modules described above, enhanced for the console by using 'figlet', for Ascii art style text, and 'colors' npm modules to add colour to the console output.

The console input is found by using the process.argv (argument vector) which correspods to whatever has been enetered in the terminal. Hence if

```

$node app.js chester

```

were entered in the console, process.argv[2] is 'chester'

An async/await via a promise is used to get location and weather for say 'chester' which gives temperature and probability information which, after Farenhiet to Celsius conversion, is logged to the console.

