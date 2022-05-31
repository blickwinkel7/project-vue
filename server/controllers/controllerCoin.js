"use strict"
const axios = require("axios");

class Controller {
    static getCoints (req, res, next ){
        const options = {
            method: 'GET',
            url: 'https://coingecko.p.rapidapi.com/coins/markets',
            params: {vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc'},
            headers: {
              'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
              'X-RapidAPI-Key': 'f93fe3d93cmsh189899b81c7d667p1dc482jsnebe354ed7918'
            }
          };
          
          axios.request(options).then(function (response) {
             res.status(200).json({
                 coins:response.data
             })
          }).catch(function (error) {
              console.error(error);
          });
    }
}

module.exports = Controller