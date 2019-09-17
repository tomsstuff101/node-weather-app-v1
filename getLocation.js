const request = require('request')
const {promisify} = require('util')

const promisifedRequest = promisify(request)

const apiPublicToken= "pk.eyJ1IjoidG9tODk2NTQ3IiwiYSI6ImNrMG5xa3pocjAyOGUzZXM4bTYxbmd6aWcifQ.y4dFL2pAeFzR8XMfH-LvSQ"

const getLocation = async (place) => {
    try {
        let data = await promisifedRequest(
            {url:`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${apiPublicToken}`, json: true}
        )
        // console.log(`Place  -->${place}`)
        const info = data.body.features[0]
       return({
            name: info.place_name, 
            lat:info.center[0], 
            lng:info.center[1]
        })
    } catch (error) {
        console.log("error")
    }
    }




module.exports = {
    getLocation
}

