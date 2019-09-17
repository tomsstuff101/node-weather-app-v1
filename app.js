const {getWeather} = require('./getWeather')
const {getLocation} = require('./getLocation')
const colors = require('colors')
const figlet = require('figlet')
const {promisify} = require ('util')

const promisifiedFiglet = promisify(figlet)




const fToC = (far) => {
        return (Math.floor((far - 32) * (5/9)))
}

let myWeatherLocation = process.argv[2]

const main = async (place) => {

    const location = await getLocation(place)
    const weather = await getWeather(location)
    const theLocation = location.name.red
    const theTemp = fToC(weather.temperature)
    const chanceOfRain = weather.precipProbability

    console.clear()

    const data = await promisifiedFiglet("Get the Weather")
    console.log(`\n*****************************************************************************`.green)
    console.log(data)
    console.log(`The temperature in ${theLocation} is ${theTemp}\u00B0C`.blue)
    console.log(`and the proabilty of rain is ${chanceOfRain}`.blue)
    console.log(`\n*****************************************************************************`.green)

}




main(myWeatherLocation)



// **** CALLBACK METHOD

//  object(conatains the api url etc) , callback funtion (which contain 'error' and 'responce')
// request({url:`https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`, json: true}, (error, responce) => {
//     if(error){
//         console.log(error)
//     }
//     else {
//         // console.log(responce)
//         // need to parse the JSON data

//         // const data = JSON.parse(responce.body)   added JSON: true to 'request' which dose this for us 
//         const data = responce.body   

//         // console.log(`  temp is --> ${data.currently.temperature}`) //  for temperature .currently.temperature

//         console.log({temp: data.currently.temperature, rain: data.currently.precipProbability})
//     }
// })



