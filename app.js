const request = require('request')
const apiKey = "c626a74f746d221a941c09e743f9c58f"

//  object(conatains the api url etc) , callback funtion (which contain 'error' and 'responce')
request({url:"https://api.darksky.net/forecast/c626a74f746d221a941c09e743f9c58f/37.8267,-122.4233"}, (error, responce) => {
    if(error){
        console.log(error)
    }
    else {
        // console.log(responce)
        // need tp parse the JSON data
        const data = JSON.parse(responce.body)
        console.log(data)
    }
})