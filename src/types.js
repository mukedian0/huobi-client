// 交易对
module.exports.Symbols = {
    USDT: {
        // 主区
        BTC: 'btcusdt',
        BCH: 'bchusdt',
        ETH: 'edhusdt',
        LTC: 'ltcusdt',
        XRP: 'xrpusdt',
        DASH: 'dashusdt',
        ETC: 'etcusdt',
        EOS: 'eosusdt',
        ZEC: 'zecusdt',
        OMG: 'omgusdt',

        // 创新区
        QTUM: 'qtumusdt',
    },

    BTC: {
        // 主区
        BCH: 'bchbtc',
        ETH: 'edhbtc',
        XRP: 'xrpbtc',
        LTC: 'ltcbtc',
        DASH: 'dashbtc',
        EOS: 'eosbtc',
        ETC: 'etcbtc',
        OMG: 'omgbtc',
        ZEC: 'zecbtc',

        // 创新区
        HSR: 'hsrbtc',
        VEN: 'venbtc',
        SALT: 'saltbtc',
        CVC: 'cvcbtc',
        MANA: 'manabtc',
        SMT: 'smtbtc',
        BAT: 'batbtc',
        QTUM: 'qtumbtc',
        CMT: 'cmtbtc',
        AST: 'astbtc',
        WAX: 'waxbtc',
        MCO: 'mcobtc',
        ITC: 'itcbtc',
        QASH: 'qashbtc',
        GNT: 'gntbtc',
        DGD: 'dgdbtc',
        PAY: 'paybtc',
        TNB: 'tnbbtc',
        TNT: 'tntbtc',
        QSP: 'qspbtc',
        SNT: 'sntbtc',
        MTL: 'mtlbtc',
        STORJ: 'storjbtc',
        RDN: 'rdnbtc',
        RCN: 'rcnbtc',
        KNC: 'kncbtc',
        ZRX: 'zrxbtc',

        // 分叉区
        BTG: 'btgbtc',
        BCD: 'bcdbtc',
        SBTC: 'sbtcbtc',
        BCX: 'bcxbtc',
    },

    ETH: {
        // 主区
        EOS: 'eoseth',
        OMG: 'omgeth',

        // 创新区
        HSR: 'hsreth',
        VEN: 'veneth',
        SALT: 'salteth',
        CVC: 'cvceth',
        MANA: 'manaeth',
        SMT: 'smteth',
        BAT: 'bateth',
        QTUM: 'qtumeth',
        CMT: 'cmteth',
        WAX: 'waxeth',
        MCO: 'mcoeth',
        ITC: 'itceth',
        QASH: 'qasheth',
        GNT: 'gnteth',
        DGD: 'dgdeth',
        PAY: 'payeth',
        TNB: 'tnbeth',
        TNT: 'tnteth',
        QSP: 'qspeth',
        RDN: 'rdneth',
        RCN: 'rcneth',
    },
};

// K线类型
module.exports.Periods = {
    m1: '1min',
    m5: '5min',
    m15: '15min',
    m30: '30min',
    m60: '60min',
    d1: '1day',
    d7: '1week',
    d30: '1mon',
    y1: '1year',
};

// depth类型
module.exports.DepthTypes = {
    step0: 'step0',
    step1: 'step1',
    step2: 'step2',
    step3: 'step3',
    step4: 'step4',
    step5: 'step5',
};


// 交易类型
module.exports.TradeTypes = {
    buy_market: 'buy-market',   //市价买
    sell_market: 'sell-market', //市价卖
    buy_limit: 'buy-limit',     //限价买
    sell_limit: 'sell-limit',   //限价卖
}

// 交易状态
module.exports.TradeStates = {
    pre_submiited: 'pre-submitted',     //准备提交
    submitting: 'submitting',           //已提交
    submitted: 'submitted',             //已提交
    partial_filled: 'partial-filled',   //部分完成
    partial_canceled: 'partial-canceled',//部分成交撤销
    filled: 'filled',                   //完全成交
    canceled: 'canceled'                //已撤销
}