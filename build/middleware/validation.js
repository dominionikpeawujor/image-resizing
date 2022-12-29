"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const validation = (0, express_1.default)();
validation.get('/', (req, res, next) => {
    const file = req.query.filename;
    file === undefined ? res.send('Invalid input') : '';
    !fs_1.default.existsSync(path_1.default.resolve(`assets/full/${file}`))
        ? res.send('File not found.')
        : '';
    next();
});
exports.default = validation;
