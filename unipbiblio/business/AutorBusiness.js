"use strict";
const GenericCrud = require("./GenericCrud");

class AutorBusiness extends GenericCrud {

    findAll(callbackAutor, autorModel) {
        super.findAll(
            autorModel.Autor,
            callbackAutor
        );
    }


    findId(autorModel, callbackAutor) {
        super.findId(
            autorModel.Autor,
            autorModel.getAuId(),
            callbackAutor
        );
    }


    insert(autorModel, callbackAutor) {
        super.insert(
            autorModel.Autor,
            callbackAutor)
        ;
    }


    update(autorModel, callbackAutor) {
        super.update(
            autorModel.Autor,
            {
                auId: autorModel.getAuId()
            },
            callbackAutor
        );


    }


    delete(autorModel, callbackAutor) {
        super.delete(
            autorModel.Autor,
            {
                auId: autorModel.getAuId()
            },
            callbackAutor
        );
    }
}

module.exports = AutorBusiness;