"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AccountRepository_1 = __importDefault(require("../../repositories/AccountRepository"));
var CreateAccountController_1 = __importDefault(require("./CreateAccountController"));
var CreateAccountUseCase_1 = __importDefault(require("./CreateAccountUseCase"));
var accountRepository = new AccountRepository_1.default();
var createAccountUseCase = new CreateAccountUseCase_1.default(accountRepository);
var createAccountController = new CreateAccountController_1.default(createAccountUseCase);
exports.default = createAccountController;
