const BaseAPI = require('./base');

class MarketAPI extends BaseAPI{
    constructor(option){
        super(option);
    }

    async getKLines(){
        
    }
}

module.exports = MarketAPI;