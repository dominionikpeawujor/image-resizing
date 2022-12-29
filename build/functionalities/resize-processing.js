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
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = require("fs");
const processing = (request) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const file = request.file;
        const width = request.width;
        const height = request.height;
        const fullPath = `assets/full/${file}`;
        const filename = `${file}_${width}x${height}.jpg`;
        const fileDir = `assets/thumb/${filename}`;
        //Using the sharp module
        const image = (0, sharp_1.default)(path_1.default.resolve(fullPath));
        //Resizing pictures
        yield image
            .resize({ width: width, height: height })
            .toBuffer()
            .then((data) => __awaiter(void 0, void 0, void 0, function* () {
            const makeFile = fs_1.promises.open(path_1.default.resolve(fileDir), 'w+');
            (yield makeFile).writeFile(data);
        }));
        return path_1.default.resolve(fileDir);
    }
    catch (err) {
        throw `${err}`;
    }
});
exports.default = processing;
