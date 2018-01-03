const Huobi = require('./index');
const _ = require('lodash');

let config = {
    "access_key": "83966273-3dd72abb-040af927-a7a0a",
    "secretkey": "7dec98b0-3e6e9ef3-8ab0ec95-e1320",
    "trade_password": "123456"
}
let huobi = new Huobi(config);
(async()=>{
    let accounts = await huobi.accountAPI.getAccounts();
    console.log(JSON.stringify(accounts, null, 4));
    if(_.isArray(accounts)){
        _.forEach(accounts, (item)=>{
            (async()=>{
                let blance = await huobi.accountAPI.getBalance(item.id);
                console.log(JSON.stringify(blance, null, 4));
            })();
        });
    }

    let market = await huobi.marketAPI.getKLines(Huobi.types.Symbols.USDT.XRP, Huobi.types.Periods.m60);
    console.log(JSON.stringify(market, null, 4));
})()
