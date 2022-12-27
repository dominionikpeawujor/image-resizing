"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const caching_1 = __importDefault(require("./caching"));
const resize = express_1.default.Router();
resize.use(caching_1.default);
//Resize Endpoint
resize.get('/', (req, res) => {
    try {
        //Parameters from the 'req' object
        const file = req.query.filename;
        const width = parseInt(req.query.width);
        const height = parseInt(req.query.height);
        //File Directories for operations
        const fullPath = `assets/full/${file}`;
        const filename = `${file}_${width}x${height}.jpg`;
        const fileDir = `assets/thumb/${filename}`;
        //Using the sharp module
        const image = (0, sharp_1.default)(fullPath);
        //Resizing pictures
        image
            .resize({ width: width, height: height })
            .toBuffer()
            .then((data) => __awaiter(void 0, void 0, void 0, function* () {
            const makeFile = fs_1.promises.open(fileDir, 'w+');
            (yield makeFile).writeFile(data);
        }))
            .then(() => res.sendFile(path_1.default.resolve(fileDir)));
    }
    catch (err) {
        throw `${err}`;
    }
});
exports.default = resize;
