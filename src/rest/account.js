/*  header-comment
    用户资产
/*  file   : account
/*  author : jerry
/*  date   : 2018-1-3 14:10:40
/*  last   : 2018-1-3 18:30:16
*/
const BaseAPI = require('./base');
const apis = require('../config/apis');

const baseurl = apis.rest.baseurl;
const accountAPIs = apis.rest.account;

class AccountAPI extends BaseAPI{
    constructor(option){
        super(option);
    }

    /**
     * 查询当前用户的所有账户(即account-id)
     */
    async getAccounts(){
        let method = 'GET';
        let path = accountAPIs.accounts.path;
        let body = this.get_body();
        let payload = this.sign_sha(method, baseurl, path, body);

        return await this.call_api(method, baseurl, path, payload, body);
    }

    async getBalance(account_id){
        let method = 'GET';
        let path = accountAPIs.balance.path.replace(':account_id', `{${account_id}}`);;

        let body = this.get_body();
        let payload = this.sign_sha(method, baseurl, path, body);

        return await this.call_api(method, baseurl, path, payload, body);
    }
}

module.exports = AccountAPI;