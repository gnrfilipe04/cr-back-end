"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authenticateAccount_1 = __importDefault(require("../modules/accounts/release/useCases/authenticateAccount"));
var createAccount_1 = __importDefault(require("../modules/accounts/release/useCases/createAccount"));
var accountsRoutes = (0, express_1.Router)();
accountsRoutes.post("/", function (request, response) {
    return createAccount_1.default.handle(request, response);
});
accountsRoutes.post("/authenticate", function (request, response) {
    return authenticateAccount_1.default.handle(request, response);
});
exports.default = accountsRoutes;
