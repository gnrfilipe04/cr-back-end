"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var createContact_1 = __importDefault(require("../modules/contacts/release/useCases/createContact"));
var listContacts_1 = __importDefault(require("../modules/contacts/release/useCases/listContacts"));
var contactsRoutes = (0, express_1.Router)();
contactsRoutes.post("/", function (request, response) {
    return createContact_1.default.handle(request, response);
});
contactsRoutes.get("/", function (request, response) {
    return listContacts_1.default.handle(request, response);
});
exports.default = contactsRoutes;
