const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=641e1a9cee577295cb1ebe65c6d71353`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}