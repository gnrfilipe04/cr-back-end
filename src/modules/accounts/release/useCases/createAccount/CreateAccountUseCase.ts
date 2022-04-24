import { hash } from "bcryptjs";

import IAccountDTO from "../../../dtos/IAccountDTO";
import IAccountRepository from "../../../interfaces/IAccountRepository";

class CreateAccountUseCase {
    constructor(private accountsRepository: IAccountRepository) {}

    async execute(account: IAccountDTO): Promise<IAccountDTO> {
        const passwordHash = await hash(account.password, 8);
        const newAccount = { ...account, password: passwordHash };
        this.accountsRepository.create(newAccount);
        return newAccount;
    }
}

export default CreateAccountUseCase;
