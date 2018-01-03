const Huobi = require('./index');
const _ = require('lodash');

let config = {
    "access_key": "d1186589-940ef784-e76631be-ece45",
    "secretkey": "9a350f0b-26cf776e-ed0be561-34cbd",
    "account_id": "replace_me",
    "account_id_pro": "15814401802",
    "trade_password": "123456"
}
let huobi = new Huobi(config);
(async()=>{
    let accounts = await huobi.accountAPI.getAccounts();
    console.log(JSON.stringify(accounts));
    if(_.isArray(accounts)){
        _.forEach(accounts, (item)=>{
            (async()=>{
                let blance = await huobi.accountAPI.getBalance(item.id);
                console.log(blance);
            })();
        });
    }
})()
