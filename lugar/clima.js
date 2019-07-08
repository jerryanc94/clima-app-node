const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0ddd253914a929047888053ab38849f0&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}