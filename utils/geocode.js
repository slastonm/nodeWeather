const axios = require('axios')

const geocode = (address, callback) =>{
  const urlGeo = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWF4cXcxMjMiLCJhIjoiY2s3eGlpZnljMDAzNDNubXEyNDcwZXFtayJ9.8cBX8_9NPB41sSwUCnXn6Q&limit=1`
  axios.get(urlGeo)
  .then(function (response) {

    const data = response.data.features[0]
    const longitude = data.center[0]
    const latitude = data.center[1]
    const location = data.place_name
    // console.log(`coordinate ${longitude} and ${latitude}`)
    callback({
      longitude,
      latitude,
      location
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

module.exports = geocode;

// const request = require('request')


// const geocode = (address, callback) => {
//     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWF4cXcxMjMiLCJhIjoiY2s3eGlpZnljMDAzNDNubXEyNDcwZXFtayJ9.8cBX8_9NPB41sSwUCnXn6Q&limit=1`

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

module.exports = geocode