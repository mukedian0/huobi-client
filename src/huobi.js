const restAPI = require('./rest');
class Huobi {
    constructor(option){
        this.marketAPI = new restAPI.MarketAPI(option);
        this.accountAPI = new restAPI.AccountAPI(option);
    }
}

module.exports = Huobi;