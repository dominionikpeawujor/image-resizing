"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const logger_1 = __importDefault(require("./middleware/logger"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', [logger_1.default, routes_1.default]);
app.get('/', (_req, res) => {
    res.send('server connected');
});
app.listen(port, () => console.log(`Listening at port ${port}`));
exports.default = app;
