const fs = require('fs');
const uuidv1 = require('uuid/v1');
const sizeOf = require('image-size');
const im = require("imagemagick");
const BASE_64 = "base64";

class FileUtil {
    static base64ToFile(base64, folder, extension, callback) {
        var fileName = uuidv1() + extension;
        var bitmap = new Buffer(base64, BASE_64);
        fs.writeFileSync(folder + fileName, bitmap);
        callback(fileName);
    }

    static fileToBase64(absolutPath, callback) {
        var bitmap = fs.readFileSync(absolutPath);
        callback(Buffer(bitmap).toString(BASE_64));
    }


    static getFileSize(absolutePath, callback) {
        callback(fs.statSync(absolutePath).size / 1000);
    }

    static getImageDimension(absolutPath, callback) {
        sizeOf(absolutPath, function (err, dimensions) {
            callback(dimensions.width, dimensions.height);
        });
    }

    static normalizaImagem(absolutPath, width, height, callback) {
        var outputName = absolutPath.split(".", 1) + "-norm." + absolutPath.split(".").pop();
        im.crop({
            srcPath: absolutPath,
            dstPath: outputName,
            width: width,
            height: height,
            quality: 1,
            gravity: 'Center'
        }, function (err, stdout, stderr) {
            if (err) throw err;
            FileUtil.removeFile(absolutPath, function (response) {
                if (response) {
                    callback(outputName)
                }
            });
        });
    }

    /**
     *
     * @param absolutPath Caminho absoluto do arquivo.
     * @param callback retorno assincrono.
     */
    static removeFile(absolutPath, callback) {
        fs.unlink(absolutPath);
        if (fs.existsSync(absolutPath)) {
            callback(false);
        } else {
            callback(true);
        }
    }


}

module.exports = FileUtil;