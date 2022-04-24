import AccountRepository from "../../repositories/AccountRepository";
import AuthenticateAccountController from "./AuthenticateAccountController";
import AuthenticateAccountUseCase from "./AuthenticateAccountUseCase";

const accountRepository = new AccountRepository();
const authenticateAccountUseCase = new AuthenticateAccountUseCase(
    accountRepository
);
const authenticateAccountController = new AuthenticateAccountController(
    authenticateAccountUseCase
);

export default authenticateAccountController;
