const BaseAPI = require('./base');
const apis = require('../config/apis');
const _ = require('lodash');

class OrderAPI extends BaseAPI{
    constructor(option){
        super(option);

        this.orderAPIs = apis.rest.order;
    }

    /**
     * POST /v1/order/orders/place 下单
     * 
     * @param {any} account_id 账户 ID，使用accounts方法获得。币币交易使用‘spot’账户的accountid；借贷资产交易，请使用‘margin’账户的accountid
     * @param {any} amount 限价单表示下单数量，市价买单时表示买多少钱，市价卖单时表示卖多少币
     * @param {any} price 下单价格，市价单不传该参数
     * @param {any} source 订单来源:api，如果使用借贷资产交易，请填写‘margin-api’
     * @param {any} symbol 交易对
     * @param {any} type 订单类型 buy-market：市价买, sell-market：市价卖, buy-limit：限价买, sell-limit：限价卖
     * @returns 
     * {
        "status": "ok",
        "data": "59378"
        }
     * @memberof OrderAPI
     */
    async place(account_id, amount, price, symbol, type, source='api'){
        let path = this.orderAPIs.place.path;

        return await this.call_api('POST', path, {account_id:account_id, 
            amount:amount, 
            price:price, 
            source:source, 
            symbol:symbol, 
            type:type});
    }

    /**
     * POST /v1/order/orders/{order-id}/submitcancel 申请撤销一个订单请求
     * 
     * @param {any} order_id 订单ID，填在path中
     * @returns 
     * {
        "status": "ok",//注意，返回OK表示撤单请求成功。订单是否撤销成功请调用订单查询接口查询该订单状态
        "data": "59378"
        }
     * @memberof OrderAPI
     */
    async cancel(order_id){
        let path = this.orderAPIs.cancel.path.replace(':order_id', order_id);
        return await this.call_api('POST', path, {'order-id': order_id});
    }

    async cancels(order_ids){
        if(!_.isArray(order_ids)){
            throw new Error('order_ids must be array!');
        }

        
    }
}