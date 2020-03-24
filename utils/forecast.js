// const request = require('request')
const axios = require('axios')

const forecast = (latitude, longitude, callback) => {
  const url =`https://api.darksky.net/forecast/6ab9d3cf57acdd66b685185c677ff58f/${latitude},${longitude}?units=si&lang=en`
  axios.get(url)
    .then(function (response) {
      const  newData = response.data
      const getData = newData
      const curentTemp = getData.currently.temperature
      const windSpeed = getData.currently.windSpeed
  
      // console.log(`curent temperature ${curentTemp} deegrees and wind speed is ${windSpeed}`)

      callback({
        curentTemp,
        // getData
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

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/6ab9d3cf57acdd66b685185c677ff58f/' + latitude + ',' + longitude

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

module.exports = forecast