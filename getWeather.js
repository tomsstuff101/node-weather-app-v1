const request = require('request')
const {promisify} = require('util')

const promisifedRequest = promisify(request)

const apiKey = "c626a74f746d221a941c09e743f9c58f"



const getWeather = async (locationInfo) => {
    try {
        let data = await promisifedRequest(
            {url:`https://api.darksky.net/forecast/${apiKey}/${locationInfo.lng},${locationInfo.lat}`, json: true}
        )
        // console.log(data.body.currently)
        // console.log(`  temp is --> ${data.body.currently.temperature}`) //  for temperature .currently.temperature
        return data.body.currently
    } catch (error) {
        console.log("oops error!")
    }
    }


module.exports = {
    getWeather
}