"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var accounts_routes_1 = __importDefault(require("./accounts.routes"));
var contacts_routes_1 = __importDefault(require("./contacts.routes"));
var router = (0, express_1.Router)();
router.use("/contacts", contacts_routes_1.default);
router.use("/accounts", accounts_routes_1.default);
exports.default = router;
