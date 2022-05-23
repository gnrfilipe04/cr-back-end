"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var database_1 = __importDefault(require("./database"));
var AppError_1 = require("./errors/AppError");
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.default);
(0, database_1.default)()
    .then(function () { return console.log("Success in connection database"); })
    .catch(function (e) { return console.log("Error in connection database - ".concat(e)); });
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error - ".concat(err.message),
    });
});
app.listen(3333, function () {
    console.log("port", process.env.PORT);
    console.log("Server is running...");
});
