"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const caching = (req, res, next) => {
    //filename parameters from 'req' object
    const file = req.query.filename;
    file === undefined
        ? res.send('incorrect parameters. Expected "filename" parameter in URL')
        : '';
    req.query.width === undefined
        ? res.send('incorrect parameters. Expected "width" parameter in URL')
        : '';
    req.query.height === undefined
        ? res.send('incorrect parameters. Expected "height" paramete" in URL')
        : '';
    //File path to get image
    const filePath = `assets/thumb/${file}_${req.query.width}x${req.query.height}${file.slice(-4)}`;
    //Conidition for serving cached files (using the existsSync method)
    const fileExists = (0, fs_1.existsSync)(path_1.default.resolve(filePath));
    try {
        if (fileExists) {
            res.sendFile(path_1.default.resolve(filePath));
        }
        else {
            next();
        }
    }
    catch (err) {
        throw `${err} from caching`;
    }
};
exports.default = caching;
