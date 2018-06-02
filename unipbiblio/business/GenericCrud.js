"use strict"

class GenericCrud {
    findAll(object, callback) {
        console.log(object);
        object.findAll({
            raw: true
        }).then(response => {
            callback(response)
        });
    }


    findId(object, id, callback) {
        console.log(object);
        object.findById(
            id
        ).then(response => {
            callback(response)
        });
    }


    insert(object, callback) {
        object.create(object).then(response => {
            callback(response);
        }).catch(error => {
            throw error;
        });
    }


    update(object, where, callback) {
        object.update(object, {
            where: {
                where
            }
        }).then(() => {
            callback({status: "ok"});
        }).catch(error => {
            callback({status: "erro"});
            throw error;
        });
    }


    delete(object, where, callback) {
        object.destroy({
            where: {
                where
            }
        }).then(() => {
            callback({status: "ok"});
        }).catch(() => {
            callback({status: "erro"});
            throw error;
        });
    }
}

module.exports = GenericCrud;