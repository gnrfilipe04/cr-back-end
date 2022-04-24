import { AppError } from "../../../../../errors/AppError";
import IAccountDTO from "../../../dtos/IAccountDTO";
import AuthenticateAccountUseCase from "../../../release/useCases/authenticateAccount/AuthenticateAccountUseCase";
import CreateAccountUseCase from "../../../release/useCases/createAccount/CreateAccountUseCase";
import AccountRepositoryInMemory from "../../repositories/AccountRepositoryInMemory";

let accountRepositoryInMemory: AccountRepositoryInMemory;
let createAccountUseCase: CreateAccountUseCase;
let authenticateAccountUseCase: AuthenticateAccountUseCase;

describe("Authenticate account", () => {
    accountRepositoryInMemory = new AccountRepositoryInMemory();
    createAccountUseCase = new CreateAccountUseCase(accountRepositoryInMemory);
    authenticateAccountUseCase = new AuthenticateAccountUseCase(
        accountRepositoryInMemory
    );
});

it("should be able to authenticate a account", async () => {
    const account: IAccountDTO = {
        email: "authenticate_test@hotmail.com",
        name: "Filipe",
        password: "12345",
        id: "1",
    };
    await createAccountUseCase.execute(account);
    const result = await authenticateAccountUseCase.execute(
        account.email,
        account.password
    );

    expect(result).toHaveProperty("email");
});

it("should not be able to authenticate a account", async () => {
    const account: IAccountDTO = {
        email: "authenticate_test2@hotmail.com",
        name: "Filipe",
        password: "12345",
        id: "1",
    };

    await createAccountUseCase.execute(account);

    expect(async () => {
        await authenticateAccountUseCase.execute(
            "authenticate_test3@hotmail.com",
            account.password
        );
        await authenticateAccountUseCase.execute(account.email, "1234");
    }).rejects.toBeInstanceOf(AppError);
});
