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
const caching_1 = __importDefault(require("../../middleware/caching"));
const resize_processing_1 = __importDefault(require("../../functionalities/resize-processing"));
const path_1 = __importDefault(require("path"));
const resize = (0, express_1.default)();
resize.use(caching_1.default);
resize.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const request = { file: file, width: width, height: height };
    const filepath = yield (0, resize_processing_1.default)(request);
    res.sendFile(path_1.default.resolve(filepath));
}));
exports.default = resize;
