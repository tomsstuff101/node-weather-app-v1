const {getWeather} = require('./getWeather.js')



getWeather()






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



