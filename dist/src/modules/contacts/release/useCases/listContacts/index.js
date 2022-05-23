"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ContactRepository_1 = __importDefault(require("../../repositories/ContactRepository"));
var ListContactsController_1 = __importDefault(require("./ListContactsController"));
var ListContactsUseCase_1 = __importDefault(require("./ListContactsUseCase"));
var contactRepository = new ContactRepository_1.default();
var listContactsUseCase = new ListContactsUseCase_1.default(contactRepository);
var listContactsController = new ListContactsController_1.default(listContactsUseCase);
exports.default = listContactsController;
