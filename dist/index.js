"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// config dotenv
dotenv_1.default.config();
// create Express app
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 3000);
// Define the routes
app.get('/', (req, res) => {
    res.send('Welcome to the home page');
});
app.get('/hello', (req, res) => {
    res.send('Hello World');
});
//! execute app and listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map