"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    const url = req.url;
    console.log(`${url} was accessed`);
    next();
};
exports.default = logger;
