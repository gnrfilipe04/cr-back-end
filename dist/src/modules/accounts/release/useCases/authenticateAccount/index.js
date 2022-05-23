"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AccountRepository_1 = __importDefault(require("../../repositories/AccountRepository"));
var AuthenticateAccountController_1 = __importDefault(require("./AuthenticateAccountController"));
var AuthenticateAccountUseCase_1 = __importDefault(require("./AuthenticateAccountUseCase"));
var accountRepository = new AccountRepository_1.default();
var authenticateAccountUseCase = new AuthenticateAccountUseCase_1.default(accountRepository);
var authenticateAccountController = new AuthenticateAccountController_1.default(authenticateAccountUseCase);
exports.default = authenticateAccountController;
