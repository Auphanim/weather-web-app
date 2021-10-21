const request = require('postman-request')


const forecast = ((latitude, longitude, callback) => {
    const url = ('http://api.weatherstack.com/current?access_key=4ce643d044ce94b4ab1d5c0a53d27f2f&query=' + encodeURIComponent(latitude) + ','+ encodeURIComponent(longitude) + '&units=f')
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback("Unable to connect with weather service", undefined)
        } else if (body.error) {
            callback(url, undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.weather_descriptions[0] + '. The temperature is currently ' + body.current.temperature + ' degrees outside. There is currently a ' + body.current.precip + '% chance of rain.')
        }
})
})


module.exports = forecast