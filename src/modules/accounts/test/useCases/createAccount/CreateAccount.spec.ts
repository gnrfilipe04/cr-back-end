import IAccountDTO from "../../../dtos/IAccountDTO";
import CreateAccountUseCase from "../../../release/useCases/createAccount/CreateAccountUseCase";
import AccountRepositoryInMemory from "../../repositories/AccountRepositoryInMemory";

let accountRepositoryInMemory: AccountRepositoryInMemory;
let createAccountUseCase: CreateAccountUseCase;

describe("Create account", () => {
    accountRepositoryInMemory = new AccountRepositoryInMemory();
    createAccountUseCase = new CreateAccountUseCase(accountRepositoryInMemory);
});

it("should be able to create an account", async () => {
    const account: IAccountDTO = {
        email: "gnr_filipe@hotmail.com",
        name: "Filipe",
        password: "12345",
        id: "1",
    };

    const result = await createAccountUseCase.execute(account);
    expect(result).toHaveProperty("id");
});
