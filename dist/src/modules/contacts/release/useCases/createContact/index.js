"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ContactRepository_1 = __importDefault(require("../../repositories/ContactRepository"));
var CreateContactController_1 = __importDefault(require("./CreateContactController"));
var CreateContactUseCase_1 = __importDefault(require("./CreateContactUseCase"));
var contactRepository = new ContactRepository_1.default();
var createContactUseCase = new CreateContactUseCase_1.default(contactRepository);
var createContactController = new CreateContactController_1.default(createContactUseCase);
exports.default = createContactController;
