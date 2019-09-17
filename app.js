const request = require('request')
const {promisify} = require('util')

const promisifedRequest = promisify(request)

const apiKey = "c626a74f746d221a941c09e743f9c58f"


const getWeather = async () => {
    let data = await promisifedRequest(
        {url:`https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`, json: true}
    )
    console.log(data.body.currently)
}

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



