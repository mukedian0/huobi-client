# huobi-client
## 封装了火币交易平台的API
## 调用样例如下：
```
const Huobi = require('./index');
const Symbols = Huobi.types.Symbols;
const TradeTypes = Huobi.types.TradeTypes;
const Periods = Huobi.types.Periods;
const States = Huobi.types.TradeStates;
const DepthTypes = Huobi.types.DepthTypes;
const _ = require('lodash');

let config = {
    "access_key": "XXXX",
    "secretkey": "XXXX",
}
let huobi = new Huobi(config);
(async()=>{
    /*********************测试账户 API********************** */
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

    /**************************测试 交易API *******************************/
    //下单
    let order_id = await huobi.orderAPI.place(accounts[0].id, 1, 0.01, Symbols.USDT.XRP, TradeTypes.buy_limit);
    console.log(JSON.stringify(order_id, null, 4));

    //撤单
    let ret = await huobi.orderAPI.cancel(order_id);
    console.log(JSON.stringify(ret, null, 4));

    //批量撤单
    let ret = await huobi.orderAPI.cancels([id1,id2,id3]);
    console.log(JSON.stringify(ret, null, 4));

    //获取下单列表
    let states = [States.submitted, States.canceled].join(',');
    let orders = await huobi.orderAPI.getOrders(Symbols.USDT.XRP,states,TradeTypes.buy_limit);
    console.log(JSON.stringify(orders, null, 4));

    //获取订单详情
    let order = await huobi.orderAPI.getOrder(id1);
    console.log(JSON.stringify(order, null, 4));

    let matchs = await huobi.orderAPI.getMatchs(Symbols.USDT.XRP, TradeTypes.buy_limit);
    console.log(JSON.stringify(matchs, null, 4));
    
    let match = await huobi.orderAPI.getMatch(id2);
    console.log(JSON.stringify(match, null, 4));

    /**********************测试 行情API**************************** */
    let market = await huobi.marketAPI.getKLines(Symbols.USDT.XRP, Periods.m60);

    let merged = await huobi.marketAPI.getMerged(Symbols.USDT.XRP);

    let depth = await huobi.marketAPI.getDepth(Symbols.USDT.XRP, DepthTypes.step0);

    let tradeInfo = await huobi.marketAPI.getTrade(Symbols.USDT.XRP);

    let tradeInfos = await huobi.marketAPI.getTrades(Symbols.USDT.XRP);

    let tradeDetail = await huobi.marketAPI.getDetail(Symbols.USDT.XRP);

    /**********************测试 公共API***************** */
    let symbols = await huobi.commonAPI.getSymbols();
    let currencys = await huobi.commonAPI.getCurrencys();
    let timestamp = await huobi.commonAPI.getTimestamp();

    console.log("Test end");
})()
```
