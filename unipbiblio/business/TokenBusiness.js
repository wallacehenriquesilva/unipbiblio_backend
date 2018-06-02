"use strict";
const GenericCrud = require("./GenericCrud");

class TokenBusiness extends GenericCrud {

    findAll(tokenModel, callbackToken) {
        super.findAll(
            tokenModel.Token,
            callbackToken
        );
    }


    findId(tokenModel, callbackToken) {
        super.findId(
            tokenModel.Token,
            tokenModel.getTkId(),
            callbackToken
        );
    }


    insert(tokenModel, callbackToken) {
        super.insert(
            tokenModel.Token,
            callbackToken)
        ;
    }


    update(tokenModel, callbackToken) {
        super.update(
            tokenModel.Token,
            {
                auId: tokenModel.getAuId()
            },
            callbackToken
        );


    }


    delete(tokenModel, callbackToken) {
        super.delete(
            tokenModel.Token,
            {
                tkId: tokenModel.getTkId()
            },
            callbackToken
        );
    }

    findUs(tokenModel, callbackToken) {
        console.log("TOKEN: " + tokenModel.getTkUs())
        tokenModel.Token.findAll({
                raw: true,
                where: {tkUs: tokenModel.getTkUs()}
            }
        ).then(response => {
            callbackToken(response)
        });
    }
}

module.exports = TokenBusiness;