"use strict"

class Cryptography {
    constructor() {

    }

    /**
     *
     * @param user
     * @param length
     * @returns {string}
     */
    generateToke(user, length) {
        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890|!@#$%/\\".split("");
        var b = [];
        for (var i = 0; i < length; i++) {
            var j = (Math.random() * (a.length - 1)).toFixed(0);
            b[i] = a[j];
        }
        var t = b.join("");

        return this.textEncrypt(user, t) + "." + t;
    }

    textEncrypt(input, key) {
        var c = '';
        while (key.length < input.length) {
            key += key;
        }
        for (var i = 0; i < input.length; i++) {
            var value1 = input[i].charCodeAt(0);
            var value2 = key[i].charCodeAt(0);

            var xorValue = value1 ^ value2;

            var xorValueAsHexString = xorValue.toString("16");

            if (xorValueAsHexString.length < 2) {
                xorValueAsHexString = "0" + xorValueAsHexString;
            }

            c += xorValueAsHexString;
        }
        return c;
    }

}

module.exports = new Cryptography();
