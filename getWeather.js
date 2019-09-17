const request = require('request')
const {promisify} = require('util')

const promisifedRequest = promisify(request)

const apiKey = "c626a74f746d221a941c09e743f9c58f"



const getWeather = async () => {
    try {
        let data = await promisifedRequest(
            {url:`https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233`, json: true}
        )
        console.log(data.body.currently)
        console.log(`  temp is --> ${data.body.currently.temperature}`) //  for temperature .currently.temperature
    } catch (error) {
        console.log("oops error!")
    }
    }


module.exports = {
    getWeather
}